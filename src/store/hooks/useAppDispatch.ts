/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useDispatch } from 'react-redux'

import { type AppDispatch } from '../types'

export const useAppDispatch = () => useDispatch<AppDispatch>()
