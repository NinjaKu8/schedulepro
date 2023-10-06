interface alerts {
  message: string | null
}
interface invites {
  inviteId: string[]
}
interface people {
  firstname: string | null
  middlename: string | null
  lastname: string | null
  position: string | null
  about: string | null
  dob: Date | null
}
interface contacts {
  valueType: string // 'email', 'phone', ...
  name: string | null // 'Work', 'Home', ...
  value: string | null // 'name@email.com
  note: string | null // 'some note'
}
interface addresses {
  name: string | null // 'Work', 'Home', ...
  note: string | null // 'some note'
  addressStreet1: string | null
  addressStreet2: string | null
  addressCity: string | null
  addressState: string | null
  addressZip: string | null
  addressCountry: string | null
}

export interface UserState {
  userAvatarURI: string | null
  userAvatarCroppedURI: string | null
  tokens: string[]
  alerts: alerts
  invites: invites
  people: people
  contacts: contacts
  addresses: addresses
}
