
export function isBlob(blob: any): boolean {
  return blob && blob instanceof Blob
}