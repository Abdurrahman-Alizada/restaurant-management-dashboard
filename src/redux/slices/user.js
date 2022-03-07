import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name : 'Ali',
  email : 'suddais2017@gmail.com'
}

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeName: (state) => {
      state.name = "Basit"
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeName } = UserSlice.actions

export default UserSlice.reducer