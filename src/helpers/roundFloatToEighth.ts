
const inc = .125

export function roundFloatToEighth(num: number) {
  const unrounded = parseFloat(num.toFixed(3))
  const diff = unrounded % inc
  return diff > inc/2 ? (unrounded-diff+inc) : unrounded-diff
}