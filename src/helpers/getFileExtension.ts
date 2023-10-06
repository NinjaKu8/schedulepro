
export function getFileExtension(filename: string): string|undefined {
  return filename.split('.').pop()
}