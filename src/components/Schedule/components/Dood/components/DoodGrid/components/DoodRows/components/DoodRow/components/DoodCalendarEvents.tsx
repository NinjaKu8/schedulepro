import _ from 'lodash'

type Props = {
  children(d: boolean, v: string, f: boolean): JSX.Element;
  date: Date;
  elementId: string;
  isStarted: boolean;
  hasWrapped: boolean;
  isInDrop: boolean;
}

interface IReducedCalendarEvent {
  _id: string;
  dayOff: boolean;
  name: string|null;
  shortName: string|null;
}

interface ICalendarEvent {
  _id: string;
  calendarEventTypeId: string;
  date: Date;
}

interface ICalendarEventType {
  _id: string;
  valueType: string;
  name: string|null;
  shortName: string|null;
}

const calendar = {
  daysOff: [0,6]
}

const calendarEvents: ICalendarEvent[] = [
  { _id: '0', calendarEventTypeId: '100', date: new Date(2023,2,17) },
  { _id: '1', calendarEventTypeId: '101', date: new Date(2023,2,20) },
  { _id: '2', calendarEventTypeId: '102', date: new Date(2023,2,14) },
  { _id: '3', calendarEventTypeId: '103', date: new Date(2023,2,23) },
  { _id: '4', calendarEventTypeId: '104', date: new Date(2023,2,28) },
  { _id: '5', calendarEventTypeId: '105', date: new Date(2023,2,30) },
]

const elementCalendarEvents: ICalendarEvent[] = [
  { _id: '6', calendarEventTypeId: '102', date: new Date(2023,2,14) },
  { _id: '7', calendarEventTypeId: '100', date: new Date(2023,2,16) },
  { _id: '8', calendarEventTypeId: '102', date: new Date(2023,2,21) },
  { _id: '9', calendarEventTypeId: '103', date: new Date(2023,2,22) },
]

const calendarEventTypes:ICalendarEventType[] = [
  { _id: '100', valueType: 'dayoff', name: null, shortName: null },
  { _id: '101', valueType: 'holiday', name: null, shortName: '/' },
  { _id: '102', valueType: 'custom', name: 'Travel', shortName: 'T' },
  { _id: '103', valueType: 'custom', name: 'Rehearsal', shortName: 'R' },
  { _id: '104', valueType: 'custom', name: 'Fitting', shortName: 'Ft' },
  { _id: '105', valueType: 'custom', name: 'Photo', shortName: 'Ph' },
]

function getTodaysEvents(date: Date, events: ICalendarEvent[], isStarted: boolean, hasWrapped: boolean): IReducedCalendarEvent[] {
  return events.reduce<IReducedCalendarEvent[]>((acc,cur)=>{
    if(cur.date.toDateString()===date.toDateString()) { // TODO: use a better date comparison in production
      const eventType = calendarEventTypes.find(t=>t._id===cur.calendarEventTypeId)
      if(eventType) {
        acc.push({
          _id: eventType._id,
          dayOff: eventType.valueType==='dayoff'||eventType.valueType==='holiday', 
          name: eventType.name, 
          shortName: eventType.shortName
        })
      }
    }
    return acc
  },[])
}

export function DoodCalendarEvents({ children, date, elementId, isStarted, hasWrapped, isInDrop }: Props): JSX.Element {

  // this is in place of a redux selector
  const todaysCalendarEvents = getTodaysEvents(date, calendarEvents, isStarted, hasWrapped)
  const todaysElementCalendarEvents = elementId==='5' // fake, just for elementId = 5
    ? getTodaysEvents(date, elementCalendarEvents, isStarted, hasWrapped)
    : []

  const isFlagged = elementId==='4' // fake, just for elementId = 4
    ? elementCalendarEvents.some(e=>{
        const eventType = calendarEventTypes.find(t=>t._id===e.calendarEventTypeId)
        return eventType
          ? eventType.valueType==='dayoff' && e.date.toDateString()===date.toDateString() // TODO: use a better date comparison in production
          : false
      })
    : false
  const isDayOff = calendar.daysOff.includes(date.getDay()) || todaysCalendarEvents.some(e=>e.dayOff)
  const calendarEventsText =  isStarted && !hasWrapped && !isInDrop
    ? _.uniqBy([...todaysCalendarEvents, ...todaysElementCalendarEvents] , '_id').map(e=>e.shortName).join('')
    : ''

  return (
    children(isDayOff, calendarEventsText, isFlagged)
  )
}
