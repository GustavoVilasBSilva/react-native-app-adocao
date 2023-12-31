/* eslint-disable @typescript-eslint/indent */
import { type store } from '.'

import { type Action, type ThunkAction } from '@reduxjs/toolkit'

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
