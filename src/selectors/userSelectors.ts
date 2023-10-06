import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from 'store/store'
import { UserState } from './types/userTypes'

const initialState: UserState = {
  userAvatarURI: '/assets/img/avatars/user_plus.png',
  userAvatarCroppedURI: '',
  tokens: [],
  alerts: { message: '' },
  invites: { inviteId: [] },
  people: {
    firstname: '',
    middlename: '',
    lastname: '',
    position: '',
    about: '',
    dob: new Date(),
  },
  contacts: {
    valueType: '',
    name: '',
    value: '',
    note: '',
  },
  addresses: {
    name: '',
    note: '',
    addressStreet1: '',
    addressStreet2: '',
    addressCity: '',
    addressState: '',
    addressZip: '',
    addressCountry: '',
  },
}

const localSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserAvatarURI: (
      state: UserState,
      action: PayloadAction<string | null>
    ) => {
      state.userAvatarURI = action.payload
    },
    setUserAvatarCroppedURI: (
      state: UserState,
      action: PayloadAction<string | null>
    ) => {
      state.userAvatarCroppedURI = action.payload
    },
  },
})

// Export selectors
export const selectUserAvatarURI = (state: RootState) =>
  state.user.userAvatarURI
export const selectUserAvatarCroppedURI = (state: RootState) =>
  state.user.userAvatarCroppedURI

// Export the actions
export const { setUserAvatarURI, setUserAvatarCroppedURI } = localSlice.actions

// Export the reducer
export default localSlice.reducer
