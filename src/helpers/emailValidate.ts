import { emailRegex } from "globals/emailRegex"

export function emailValidate(email: string): boolean {
  return emailRegex.test(email);
}