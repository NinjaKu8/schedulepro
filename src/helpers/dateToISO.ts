
const pad = (num: number) => num > 9 ? `${num}` : `0${num}`

export function dateToISO(date: Date): string {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${year}-${pad(month)}-${pad(day)}T00:00:00.000Z`
}