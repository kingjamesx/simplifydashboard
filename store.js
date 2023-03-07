import { configureStore } from '@reduxjs/toolkit'
import navReducer from './features/Nav/navSlice'
export const store = configureStore({
  reducer: {
    nav: navReducer,
  },
})