import _ from 'lodash'

import { dateTimeNow, createObjectId } from 'helpers'

type ScriptBlockType = {
  _id: string;
  name: string;
  pageBreak: boolean;
  styles: {
    [x: string]: string;
  };
  next: string;
}

type ScriptScenePositionSide = {
  position: string;
  visible: boolean;
}

interface ScriptMoreContinuedPosition {
  text: string | null;
  visible: boolean;
  sceneVisible?: boolean;
}

type ScriptScenePosition = {
  left: ScriptScenePositionSide;
  right: ScriptScenePositionSide;
}

export type ScriptMoreContinued = {
  dialogueBottom?: ScriptMoreContinuedPosition;
  dialogueTop?: ScriptMoreContinuedPosition;
  sceneBottom?: ScriptMoreContinuedPosition;
  sceneTop?: ScriptMoreContinuedPosition;
}

interface ScriptWatermark extends ScriptMoreContinuedPosition {
  style: {
    [x: string]: string;
  }
}

export interface IScript {
  _id: string;
  isActive: boolean;
  projectId: string;
  categoryGroupId: string;
  scenesOrdered: string[];
  name: string;
  description: string|null;
  episode: string|null;
  fileName: string;
  revisionName: string|null;
  revisionDate: string|null;
  titlePage: string|null;
  blockTypes: ScriptBlockType[];
  scenePosition: ScriptScenePosition;
  moreContinued: ScriptMoreContinued;
  header: ScriptScenePositionSide;
  footer: ScriptScenePositionSide;
  watermark: ScriptWatermark;
  pageSize: string;
  margins: string[];
  isPagesLocked: boolean;
  lockLevel: number;
  modified: string;
  __v: number;
}
interface Props extends Partial<IScript> {
  projectId: string;
  categoryGroupId: string;
  name: string;
  fileName: string;
}

export function createScript(obj: Props): IScript {
  const objClean = _.pick(obj, ['_id', 'isActive', 'projectId', 'categoryGroupId', 'scenesOrdered', 'name', 'description', 'episode', 'fileName', 'revisionName', 'revisionDate', 'titlePage', 'blockTypes', 'scenePosition', 'moreContinued', 'header', 'footer', 'watermark', 'pageSize', 'margins', 'isPagesLocked', 'lockLevel', 'modified', '__v'])
  const sceneHeadingId = createObjectId()
  const actionId = createObjectId()
  const characterId = createObjectId()
  const parentheticalId = createObjectId()
  const dialogueId = createObjectId()
  const shotId = createObjectId()
  const generalId = createObjectId()
  const transitionId = createObjectId()
  return {
    _id: createObjectId(),
    isActive: true,
    scenesOrdered: [],
    description: null,
    episode: null,
    revisionName: null,
    revisionDate: null,
    titlePage: null,
    blockTypes: [
      {
        name: 'Scene Heading',
        pageBreak: false,
        styles: {
          marginTop: '1em',
          maxWidth: '38em',
          textTransform: 'uppercase'
        },
        _id: sceneHeadingId,
        next: actionId
      },
      {
        name: 'Action',
        pageBreak: false,
        styles: {
          marginTop: '1em',
          marginBottom: '0',
          maxWidth: '38em'
        },
        _id: actionId,
        next: actionId
      },
      {
        name: 'Character',
        pageBreak: false,
        styles: {
          marginTop: '1em',
          marginLeft: '13em',
          marginBottom: '0',
          textTransform: 'uppercase'
        },
        _id: characterId,
        next: dialogueId
      },
      {
        name: 'Parenthetical',
        pageBreak: false,
        styles: {
          marginLeft: '10em',
          marginBottom: '0'
        },
        _id: parentheticalId,
        next: dialogueId
      },
      {
        name: 'Dialogue',
        pageBreak: false,
        styles: {
          marginLeft: '7em',
          maxWidth: '20em'
        },
        _id: dialogueId,
        next: actionId
      },
      {
        name: 'Shot',
        pageBreak: false,
        styles: {
          marginTop: '1em',
          maxWidth: '38em',
          textTransform: 'uppercase'
        },
        _id: shotId,
        next: actionId
      },
      {
        name: 'General',
        pageBreak: false,
        styles: {
          maxWidth: '38em',
          marginBottom: '0'
        },
        _id: generalId,
        next: generalId
      },
      {
        name: 'Transition',
        pageBreak: false,
        styles: {
          marginTop: '1em',
          marginLeft: '27em',
          maxWidth: '15em',
          textTransform: 'uppercase'
        },
        _id: transitionId,
        next: sceneHeadingId
      }
    ],
    scenePosition: {
      left: {
        position: '0',
        visible: true
      },
      right: {
        position: '0',
        visible: true
      }
    },
    moreContinued: {
      dialogueBottom: {
        text: '(MORE.)',
        visible: true
      },
      dialogueTop: {
        text: '(CONT\'D.)',
        visible: true
      },
      sceneBottom: {
        text: '(CONTINUED.)',
        visible: true
      },
      sceneTop: {
        text: 'CONTINUED:.',
        visible: true,
        sceneVisible: true
      }
    },
    header: {
      visible: false,
      position: '0'
    },
    footer: {
      visible: false,
      position: '0'
    },
    watermark: {
      visible: true,
      text: '',
      style: {
        transform: 'rotate(-45deg)',
        fontSize: '20px',
      }
    },
    pageSize: 'letter',
    margins: ['0','38em'],
    isPagesLocked: false,
    lockLevel: 1,
    modified: dateTimeNow(),
    __v: 0,
    ...objClean,
  }
}