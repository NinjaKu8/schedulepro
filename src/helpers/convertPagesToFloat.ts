
export function convertPagesToFloat(pages: number[]): number { // takes [2, 5], returns 2.625
  return pages[0] + (pages[1] / 8)
} 