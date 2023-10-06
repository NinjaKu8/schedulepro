
export function convertFloatToEighths(pages: number = 0): number[] { // takes 2.625, returns [2, 5] (whole number, eighths)
  return pages
    ? [parseInt(pages.toString().split('.')[0]), parseInt((pages % 1).toFixed(3).split('.')[1], 10) / 125]
    : [0,0]
}