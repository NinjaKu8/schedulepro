
export function formatPages(pages: number[]): string {
  const hasWholeNumber = pages[0] !== 0
  const hasEighths = pages[1] !== 0
  let final = ''
  if(hasWholeNumber) final += `${pages[0]}`
  if(hasEighths) {
    if (hasWholeNumber) final += ' '
    final += `${pages[1]}/8`
  }
  return final
}