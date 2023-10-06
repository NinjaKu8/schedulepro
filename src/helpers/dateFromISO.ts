
export function dateFromISO(iso: string): Date {
  const year = Number(iso.slice(0,4))
  const month = Number(iso.slice(5,7)) - 1
  const day = Number(iso.slice(8,10))
  return new Date(year, month, day, 0, 0, 0, 0)
}