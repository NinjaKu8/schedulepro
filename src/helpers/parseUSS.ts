import _ from 'lodash'

import { dateNow, isBlob, createObjectId } from 'helpers'
import { InitialCategory, initialCategories } from 'globals/initialCategories'
import { USSStripboard, USSBoard, USSBreakdown, USSCalendar, USSCategory, USSElement, USSEvent, USSObject, USSBody } from 'types/ussTypes'
import { createCalendarEvent, createCalendarEventType, createCategory, createCategoryGroup, createElement, createInitialCategoriesAndElements, createSchedBoard, createSchedBreakdown, createSchedCalendar, createSchedScenario, createSchedule } from 'creators'
import { ICalendarEvent } from 'creators/createCalendarEvent'
import { ICalendarEventType } from 'creators/createCalendarEventType'
import { ICategory } from 'creators/createCategory'
import { ICategoryGroup } from 'creators/createCategoryGroup'
import { IElement } from 'creators/createElement'
import { InitialElement, initialElements } from 'globals/initialElements'
import { ISchedBoard } from 'creators/createSchedBoard'
import { ISchedBreakdown } from 'creators/createSchedBreakdown'
import { ISchedCalendar } from 'creators/createSchedCalendar'
import { ISchedScenario } from 'creators/createSchedScenario'
import { ISchedule } from 'creators/createSchedule'

type Props = {
  file: File,
  handleError: (e: unknown)=>void,
  projectId: string,
}

interface IUSSImport {
  breakdowns: ISchedBreakdown[];
  calendarEvents: ICalendarEvent[];
  calendarEventTypes: ICalendarEventType[];
  categories: ICategory[];
  categoryGroup: ICategoryGroup;
  elements: IElement[];
  schedBoards: ISchedBoard[];
  schedCalendars: ISchedCalendar[];
  schedScenarios: ISchedScenario[];
  schedule: ISchedule;
}

export async function parseUSS({ file, handleError, projectId }: Props): Promise<IUSSImport | null | undefined> { //ussObject, userId, currentProjectId
  try {
    if(!isBlob(file)) return null
    const ussJSON = await file.text()
    if(!ussJSON || !ussJSON.length) throw new Error('You tried to upload something other than a USS file. Try uploading a different file')
    const ussObject: USSObject = JSON.parse(ussJSON)
    const newUssBody: USSBody|undefined = updateIds(ussObject.universalScheduleStandard)
    if(!newUssBody) throw new Error('There was an error parsing the USS file. Try uploading a different file')

    let categoryGroup, schedule
    const breakdowns: ISchedBreakdown[] = [],
          categories: ICategory[] = [], 
          elements: IElement[] = [], 
          calendarEvents: ICalendarEvent[] = [], 
          calendarEventTypes: ICalendarEventType[] = [], 
          schedCalendars: ISchedCalendar[] = [],
          schedScenarios: ISchedScenario[] = [],
          schedBoards: ISchedBoard[] = []

    // breakdowns
    if(!newUssBody.breakdowns?.length) {
      breakdowns.push(createSchedBreakdown({ scheduleId: newUssBody.id, valueType: 'strip' })) // blank strip
    } else {
      newUssBody.breakdowns.forEach(ussBreakdown=>{
        const newBreakdown: ISchedBreakdown = createSchedBreakdown({
          _id: ussBreakdown.id,
          scheduleId: newUssBody.id,
          comments: ussBreakdown.comments ?? null,
          description: ussBreakdown.description ?? null,
          bannerText: ussBreakdown.bannerText ?? null,
          valueType: ussBreakdown.type,
          elementIds: ussBreakdown.elements ?? null,
          pages: ussBreakdown.pages ?? null,
          scene: ussBreakdown.scene ?? null,
          scriptPage: ussBreakdown.scriptPage ?? null,
          duration: ussBreakdown.duration ?? null,
        })
        const setValue = (ucid: number)=>{
          const breakdownElement = getBreakdownElement({ 
            breakdownElements: ussBreakdown.elements, 
            elements: newUssBody.elements, 
            categories: newUssBody.categories, 
            ucid
          })
          return breakdownElement ?? null
        }
        if(newBreakdown) {
          newBreakdown.set = setValue(0)
          newBreakdown.ie = setValue(1)
          newBreakdown.dn = setValue(2)
          newBreakdown.scriptDay = setValue(3)
          newBreakdown.unit = setValue(4)
          newBreakdown.sequence = setValue(5)
          newBreakdown.location = setValue(6)
        }
        breakdowns.push(newBreakdown)
      })
    }

    // categories & elements
    if(!newUssBody?.categories?.length) { // are there no categories in the ussObject?
      const { initialCategoryObjects, initialElementObjects, initialCategoryGroupObject } = createInitialCategoriesAndElements() // if not, create standard categories & elems
      categories.push(...initialCategoryObjects)
      elements.push(...initialElementObjects)
      categoryGroup = initialCategoryGroupObject
    } else {
      
      // categories
      newUssBody.categories.forEach(ussCategory=>{
        const initialCategory = initialCategories.find(c=>c.ussId===ussCategory.ucid)
        const newCategory: ICategory = createCategory({
          _id: ussCategory.id,
          breakdownField : initialCategory?.breakdownField ?? '',
          elementsOrdered: newUssBody.elements?.filter(e=>e.category===ussCategory.id)?.map(e=>e.id) ?? [],
          isRemovable: initialCategory?.isRemovable ?? true,
          name: ussCategory.name,
          ussId: initialCategory?.ussId ?? 124,
        })
        categories.push(newCategory)
      })

      // ensure that the basic categories for dn, ie, etc exist, if not add them
      const missingCategories = initialCategories.reduce((acc: InitialCategory[], cur: InitialCategory)=>{
        const existingCategory = categories.find(c=>c.ussId===cur.ussId)
        if(!existingCategory) acc.push(cur)
        return acc
      }, [])
      if(missingCategories.length) {
        missingCategories.forEach(missingCategory=>{
          const newCategory: ICategory = createCategory(missingCategory)
          categories.push(newCategory)
        })
      }

      // category group
      categoryGroup = createCategoryGroup({
        categoriesOrdered: categories.map(c=>c._id),
      })

      // elements
      newUssBody.elements.forEach(ussElement=>{
        const calendarEventIds = handleEvents(ussElement.events, newUssBody.id)
        const newElement: IElement = createElement({
          _id: ussElement.id,
          calendarEventIds: calendarEventIds,
          daysOff: ussElement.daysOff,
          dropDays: ussElement.dropDayCount,
          elementNumber: ussElement.elementId,
          isDrop: ussElement.isDrop,
          isHold: ussElement.isHold,
          isInclude: ussElement.isDood,
          isLocked: ussElement.isIdLock,
          linkIds: ussElement.linkedElements ?? [],
          name: ussElement.name,
          paletteCoord: initialElements.find(e=>e.element.name===ussElement.name)?.element.paletteCoord ?? null,
        })
        elements.push(newElement)
      })

      // ensure that the basic elements for dn, ie, etc exist, if not add them and update their parent categories
      const missingElements = initialElements.reduce((acc: InitialElement[], cur: InitialElement)=>{
        const existingElement = elements.find(e=>e.name===cur.element.name)
        if(!existingElement) acc.push(cur)
        return acc
      }, [])
      if(missingElements.length) {
        missingElements.forEach(missingElement=>{
          const newElement: IElement = createElement(missingElement.element)
          elements.push(newElement)
          const parentCategoryIndex = categories.findIndex(c=>c.ussId===missingElement.ussId)
          if(parentCategoryIndex) categories[parentCategoryIndex].elementsOrdered.push(newElement._id)
        })
      }
    }
  
    // schedCalendars
    if(!newUssBody?.calendars?.length) {
      createPrimaryCalendar(newUssBody.id)
    } else {
      newUssBody.calendars.forEach((ussCalendar: USSCalendar) =>{
        const calendarEventIds = handleEvents(ussCalendar.events, newUssBody.id)
        const newSchedCalendar: ISchedCalendar = createSchedCalendar({
          _id: ussCalendar.id,
          name: ussCalendar.name,
          daysOff: ussCalendar.daysOff,
          calendarEventIds
        })
        schedCalendars.push(newSchedCalendar)
      })
    }
  
    // schedScenarios
    if(!newUssBody?.stripboards?.length) {
      const calendarId = schedCalendars[0]?._id ?? createPrimaryCalendar(newUssBody.id)
      const newSchedBoard: ISchedBoard = createSchedBoard()
      const newSchedRecycle: ISchedBoard = createSchedBoard({ isRecycle: true })
      const newSchedScenario: ISchedScenario = createSchedScenario({ calendarId, schedBoardsOrdered: [newSchedBoard._id, newSchedRecycle._id] })
      schedScenarios.push(newSchedScenario)
      schedBoards.push(newSchedBoard)
      schedBoards.push(newSchedRecycle)
    } else {
      newUssBody.stripboards.forEach((ussStripboard: USSStripboard) =>{
        const calendarId = ussStripboard.calendar
          ? ussStripboard.calendar
          : schedCalendars.length>0
            ? schedCalendars[0]?._id
            : createPrimaryCalendar(newUssBody.id)
        ussStripboard.boards.forEach(board=>{
          const newSchedBoard: ISchedBoard = createSchedBoard({
            _id: board.id,
            name: board.name,
            isRecycle: board.name.toLowerCase().includes('recycle') || board.name.toLowerCase().includes('boneyard'),
            schedBreakdownsOrdered: board.breakdownIds,
          })
          schedBoards.push(newSchedBoard)
        })
        const newSchedScenario: ISchedScenario = createSchedScenario({
          _id: ussStripboard.id,
          name: ussStripboard.name,
          calendarId,
          schedBoardsOrdered: ussStripboard.boards.map(b=>b.id),
          revisionName: newUssBody.schedColor,
          revisionDate: newUssBody.schedDate,
          revisionScriptName: newUssBody.scriptColor,
          revisionScriptDate: newUssBody.scriptDate,
        })
        schedScenarios.push(newSchedScenario)
      })
    }
  
    // schedule
    schedule = createSchedule({
      _id: newUssBody?.id,
      name: newUssBody?.name ?? null,
      description: newUssBody?.description ?? null,
      projectId,
      categoryGroupId: categoryGroup._id,
      schedScenariosOrdered: schedScenarios.map(s=>s._id),
      schedCalendarsOrdered: schedCalendars.map(c=>c._id),
    })
      
    return { breakdowns, calendarEvents, calendarEventTypes, categories, categoryGroup, elements, schedBoards, schedCalendars, schedScenarios, schedule }


    // HELPER FUNCTIONS

    function createStartEvent() {
      return {
        id: createObjectId(), 
        type : 'start', 
        name : null, 
        date: dateNow() 
      }
    }

    function createPrimaryCalendar(scheduleId: string) {
      const calendarEventIds = handleEvents([createStartEvent()], scheduleId)
      const newSchedCalendar: ISchedCalendar = createSchedCalendar({ calendarEventIds })
      schedCalendars.push(newSchedCalendar)
      return newSchedCalendar._id
    }

    function handleEvents(events: USSEvent[]|null, scheduleId: string) {
      const { newCalendarEvents, newCalendarEventTypes } = createCalendarEventsAndTypes(events, scheduleId)
      calendarEvents.push(...newCalendarEvents)
      calendarEventTypes.push(...newCalendarEventTypes)
      return newCalendarEvents.map(ce=>ce._id)
    }

    function createCalendarEventsAndTypes(events: USSEvent[]|null, scheduleId: string) {
      const newCalendarEvents: ICalendarEvent[] = [], newCalendarEventTypes: ICalendarEventType[] = []
      if(events) events.forEach(event=>{
        // element event types
        const elementCalendarEventType = calendarEventTypes.find(cet=>cet.name===event.name)
        if(!elementCalendarEventType && (event.type==='event' || (event.type==='dayOff' && event.name==='holiday'))) {
          const newEventType: ICalendarEventType = createCalendarEventType({
            scheduleId,
            name: event.name,
          })
          newCalendarEventTypes.push(newEventType)
        }
        // element events
        const newEvent: ICalendarEvent = createCalendarEvent({
          _id: event.id,
          isStart: event.type==='start',
          isDayOff: event.type==='dayOff' && event.name==='dayOff',
          isHoliday: event.type==='dayOff' && event.name==='holiday',
          calendarEventTypeId: elementCalendarEventType?._id,
          date: event.date,
        })
        newCalendarEvents.push(newEvent)
      })
      return { newCalendarEvents, newCalendarEventTypes }
    }

    // takes body of ussObject, assign new objectIds to all ids in the body, ensure their relationships are maintained
    function updateIds(ussBody: USSBody) {
      type Hash = {[x:string]:string} // { oldUSSId: newId }
      try {
        let breakdownIdHash: Hash = {}, elementIdHash: Hash = {}, categoryIdHash: Hash = {}, stripboardIdHash: Hash = {}, calendarIdHash: Hash = {}
        const newUssBody: USSBody = {...ussBody, id: createObjectId(), breakdowns: [], categories: [], elements: [], stripboards: null, calendars: null}
        // calendar
        if(ussBody.calendars) {
          newUssBody.calendars = []
          for(let calendar of ussBody.calendars) {
            const id = createObjectId()
            calendarIdHash[calendar.id] = id
            newUssBody.calendars.push({ ...calendar, id })
          }
        }
        // category
        for(let category of ussBody.categories) {
          const id = createObjectId()
          categoryIdHash[category.id] = id
          newUssBody.categories.push({ ...category, id })
        }
        // element 1st pass
        for(let element of ussBody.elements) {
          const elementId = createObjectId()
          elementIdHash[element.id] = elementId
          const categoryId = categoryIdHash[element.category] ?? null
          if(categoryId) {
            newUssBody.elements.push({ ...element, category: categoryId, id: elementId, linkedElements: [] })
          } else {
            throw new Error('A category id is missing')
          }
        }
        // element 2nd pass - handle linkedElements now that we have a full elementIdHash array
        for(let element of ussBody.elements) {
          const newLinkedElements: string[] = []
          if(element.linkedElements) {
            for(let linkedElement of element.linkedElements) {
              const newId = elementIdHash[linkedElement] ?? null
              if(newId) {
                newLinkedElements.push(newId)
              } else {
                throw new Error('A linkedElement is missing')
              }
            }
          }          
          // find index of matching element in elements array
          const elementId = elementIdHash[element.id] ?? null
          const index = newUssBody.elements.findIndex(e=>e.id===elementId)
          if(index>-1) newUssBody.elements[index].linkedElements = newLinkedElements
        }
        // stripboard
        if(ussBody.stripboards) {
          newUssBody.stripboards = []
          for(let stripboard of ussBody.stripboards) {
            const stripboardId = createObjectId()
            stripboardIdHash[stripboard.id] = stripboardId
            const calendarId = (stripboard.calendar && calendarIdHash[stripboard.calendar]) ?? null
            if(calendarId) {
              const newStripboard: USSStripboard = {...stripboard, id: stripboardId, calendar: calendarId, boards: []}
              for(let board of stripboard.boards) {
                const newBoard: USSBoard = {...board, breakdownIds: []}
                for(let item of board.breakdownIds) {
                  if(_.isArray(item)) { // if the breakdowns are structured as arrays for day breaks
                    const newBdArray: string[] = []
                    for(let breakdownId of item) {
                      let bdId
                      const existingBreakdownId = breakdownIdHash[breakdownId] ?? null
                      if(existingBreakdownId) {
                        bdId = existingBreakdownId
                      } else {
                        bdId = createObjectId()
                        breakdownIdHash[breakdownId] = bdId
                      }
                      newBdArray.push(bdId)
                    }
                    newBoard.breakdownIds.push(newBdArray)
                  } else { // if there are no days, then its just an array of plain ids
                    const bdId = createObjectId()
                    breakdownIdHash[item] = bdId
                    newBoard.breakdownIds.push(bdId)
                  }
                }
                newStripboard.boards.push(newBoard)
              }
              newUssBody.stripboards.push(newStripboard)
            } else {
              throw new Error('A calendar id is missing')
            }
          }
        }  
        // breakdown
        for(let breakdown of ussBody.breakdowns) {
          const breakdownId = breakdownIdHash[breakdown.id] ?? null
          if(breakdownId) {
            const newBreakdown: USSBreakdown = {...breakdown, id: breakdownId, elements: []}
            for(let elementId of breakdown.elements) {
              const newElementId = elementIdHash[elementId] ?? null
              if(newElementId) newBreakdown.elements.push(newElementId)
            }
            newUssBody.breakdowns.push(newBreakdown)
          } else {
            throw new Error('A breakdown id is missing')
          }
        }
        return newUssBody
      } catch(e) {
        handleError(e)
      }
    }

    // get non-removable elements for a breakdown (set, dn, ie, unit, location, etc)
    function getBreakdownElement({breakdownElements, elements, categories, ucid}: {breakdownElements: string[], elements: USSElement[], categories: USSCategory[], ucid: number}) {
      try {
        return breakdownElements.reduce((acc: string|null,cur: string)=>{
          const element = elements.find(e=>e.id===cur)
          if(element) {
            const category = categories.find(c=>c.id===element.category)
            if(category) {
              if(category.ucid===ucid) return cur
            }
          }
          return acc
        },null)
      } catch(e) {
        handleError(e)
      }
    }

  } catch(e) {
    handleError(e)
  }
}

