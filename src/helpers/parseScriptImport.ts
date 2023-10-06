
import { getFileExtension, parseFDX, parsePDF } from 'helpers'
import { parseFormattedScript } from 'helpers/parseFormattedScript'
import { IScript } from 'creators/createScript'
import { IScriptScene } from 'creators/createScriptScene'
import { IBreakdown } from 'creators/createBreakdown'
import { ICategory } from 'creators/createCategory'
import { IElement } from 'creators/createElement'
import { ICategoryGroup } from 'creators/createCategoryGroup'
import { IScriptImport } from 'types/script'

type Props = {
  currentProjectId: string;
  files: File[];
  handleError: (error: unknown) => void;
}

export interface IScriptImportParsed {
  breakdowns: IBreakdown[];
  categories: ICategory[];
  categoryGroup: ICategoryGroup|null;
  elements: IElement[];
  script: IScript;
  scriptScenes: IScriptScene[];
}

export async function parseScriptImport({ currentProjectId, files, handleError }: Props): Promise<IScriptImportParsed[]> {
  const parsedScripts: IScriptImportParsed[] = []
  for await (const file of files) {
    let parsedData: IScriptImport|null|undefined
    const fileName = file.name
    const fileExtension = getFileExtension(fileName)
    // first do a basic parse of the file into the IScriptImport type
    switch(fileExtension) {
      case 'pdf': parsedData = await parsePDF(file, handleError); break;
      case 'fdx': parsedData = await parseFDX(file, handleError); break;
      default: parsedData = null
    }
    if(!parsedData) {
      handleError(new Error(`${fileName} is not a valid script`))
      continue
    }
    // then parse the formatted script into the final data structure
    const parsedScriptData = await parseFormattedScript({ currentProjectId, fileName, handleError, parsedData })
    if(parsedScriptData instanceof Error) handleError(parsedScriptData)
    if(parsedScriptData) parsedScripts.push(parsedScriptData)
  }
  return parsedScripts
}