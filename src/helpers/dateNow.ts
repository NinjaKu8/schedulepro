import { dateToISO } from "helpers"

export function dateNow(): string {
  return dateToISO(new Date())
}