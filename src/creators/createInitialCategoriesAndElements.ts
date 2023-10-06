import { initialCategories } from 'globals/initialCategories'
import { initialElements } from 'globals/initialElements'
import { createCategoryGroup, ICategoryGroup } from './createCategoryGroup'
import { createCategory, ICategory } from './createCategory'
import { createElement, IElement } from './createElement'

type Return = {
  initialCategoryObjects: ICategory[];
  initialElementObjects: IElement[];
  initialCategoryGroupObject: ICategoryGroup;
}

export function createInitialCategoriesAndElements(): Return {
  const initialCategoryObjects: ICategory[] = []
  const initialElementObjects: IElement[] = []
  for(let c=0;c<initialCategories.length;c++) { // loop through initialCategories
    const category: ICategory = createCategory(initialCategories[c])
    initialCategoryObjects.push(category)
    const elementsInThisCategory = initialElements.filter(e=>e.ussId===category.ussId)
    if(!elementsInThisCategory) continue
    for(let e=0;e<elementsInThisCategory.length;e++) { // loop through elementsInThisCategory
      const element: IElement = createElement(elementsInThisCategory[e].element)
      category.elementsOrdered.push(element._id)
      initialElementObjects.push(element)
    }
  }
  const initialCategoryGroupObject: ICategoryGroup = createCategoryGroup({ categoriesOrdered: initialCategoryObjects.map(c=>c._id)})
  return { initialCategoryGroupObject, initialCategoryObjects, initialElementObjects }
}
