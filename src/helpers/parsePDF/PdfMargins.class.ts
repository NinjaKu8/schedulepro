
export interface MarginContent {
  actual: number|null, 
  leftMost: number, 
  rightMost: number
  standard: number, 
}
export interface Margin {
  action: MarginContent
  character: MarginContent
  continued: MarginContent
  dialogue: MarginContent
  dualCharacterLeft: MarginContent
  dualCharacterRight: MarginContent
  dualDialogueLeft: MarginContent
  dualDialogueRight: MarginContent
  dualParentheticalLeft: MarginContent
  dualParentheticalRight: MarginContent
  heading: MarginContent
  parenthetical: MarginContent
  sceneNumberLeft: MarginContent
  sceneNumberRight: MarginContent
  revisionMark: MarginContent
  scriptPage: MarginContent
  shot: MarginContent
  transition: MarginContent
  [x: string]: MarginContent | any
}

export default class PdfMargins{
  constructor() {
    // set default values, 'actual' value determined later when each element is properly identified
    this.heading = { standard: 108, actual: null, leftMost: 70, rightMost: 146 }
    this.action = { standard: 108, actual: null, leftMost: 70, rightMost: 146 }
    this.character = { standard: 252, actual: null, leftMost: 214, rightMost: 290 }
    this.parenthetical = { standard: 208, actual: null, leftMost: 170, rightMost: 246 }
    this.dialogue = { standard: 180, actual: null, leftMost: 142, rightMost: 218 }
    this.shot = { standard: 108, actual: null, leftMost: 70, rightMost: 146 }
    this.transition = { standard: 511, actual: null, leftMost: 473, rightMost: 549 }
    this.sceneNumberLeft = { standard: 54, actual: null, leftMost: 16, rightMost: 92 }
    this.sceneNumberRight = { standard: 523, actual: null, leftMost: 485, rightMost: 671 }
    this.revisionMark = { standard: 550, actual: null, leftMost: 495, rightMost: 671 }
    this.scriptPage = { standard: 508, actual: null, leftMost: 470, rightMost: 546 }
    this.continued = { standard: 108, actual: null, leftMost: 70, rightMost: 146 }
    this.dualDialogueLeft = { standard: 108, actual: null, leftMost: 70, rightMost: 146 }
    this.dualDialogueRight = { standard: 332, actual: null, leftMost: 294, rightMost: 370 }
    this.dualCharacterLeft = { standard: 193, actual: null, leftMost: 155, rightMost: 231 }
    this.dualCharacterRight = { standard: 417, actual: null, leftMost: 379, rightMost: 455 }
    this.dualParentheticalLeft = { standard: 126, actual: null, leftMost: 88, rightMost: 164 }
    this.dualParentheticalRight = { standard: 350, actual: null, leftMost: 312, rightMost: 388 }
  }
  heading: MarginContent
  action: MarginContent
  character: MarginContent
  parenthetical: MarginContent
  dialogue: MarginContent
  shot: MarginContent
  transition: MarginContent
  sceneNumberLeft: MarginContent
  sceneNumberRight: MarginContent
  revisionMark: MarginContent
  scriptPage: MarginContent
  continued: MarginContent
  dualDialogueLeft: MarginContent
  dualDialogueRight: MarginContent
  dualCharacterLeft: MarginContent
  dualCharacterRight: MarginContent
  dualParentheticalLeft: MarginContent
  dualParentheticalRight: MarginContent
  [x: string]: MarginContent | any
  
  updateMargins(marginName: string, num: number): void {
    try {
      this[marginName].actual = num
      // when we know the position of one element, we can infer bounds of other elements
      if(marginName==='action') {
        this.dualDialogueLeft.leftMost = num
        this.dualParentheticalLeft.leftMost = num
      }
      if(['heading','shot'].includes(marginName)) {
        this.sceneNumberLeft.rightMost = num-1
      } 
      if(marginName==='character') this.parenthetical.rightMost = num-1
      if(marginName==='parenthetical') {
        this.character.leftMost = num+1
        this.dialogue.rightMost = num-1
      } 
      if(marginName==='dialogue') this.parenthetical.leftMost = num+1
    } catch(e) {
      console.error(e)
    }
  }
}