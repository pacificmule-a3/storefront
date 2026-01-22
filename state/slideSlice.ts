import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface SlideState {
  slide: number
}

const initialState: SlideState = {
  slide: 0,
}

export const slideSlice = createSlice({
  name: "slide",
  initialState,
  reducers: {
    setSlideState: (state, action: PayloadAction<number>) => {
      state.slide = action.payload
    },
  },
})

export const { setSlideState } = slideSlice.actions
export const slideReducer = slideSlice.reducer