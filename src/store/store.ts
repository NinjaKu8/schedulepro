import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import localReducer from './slices/local'

import { userReducer } from 'selectors'

export const store = configureStore({
  reducer: {
    local: localReducer,
    user: userReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
