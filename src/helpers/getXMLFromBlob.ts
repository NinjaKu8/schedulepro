
export async function getXMLFromBlob(blob: Blob): Promise<Document | null | undefined> {
  try {
    const parser = new DOMParser()
    const xml = await blob?.text() ?? null
    if(!xml) { 
      return null
    }
    const xmlDoc = parser.parseFromString(xml, 'application/xml')
    if(!xmlDoc || xmlDoc.getElementsByTagName('parsererror').length) { 
      return null
    }
    return xmlDoc
  } catch(e) {
    console.error(e)
  }
}