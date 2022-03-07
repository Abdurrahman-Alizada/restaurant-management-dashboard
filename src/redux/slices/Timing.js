import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
      id: 0,
      name: 'Monday',
      isChecked : true,
      timing : [
        {
          id: 0,
          openingTime : new Date('2018-01-01T03:08:00.000Z'),
          closingTime : new Date('2018-01-01T00:00:00.000Z')
        },
        
      ]
    },
    
   ]

export const timingSlice = createSlice({
  name: 'timing',
  initialState,
  reducers: {
    addTiming: (state) =>{
      // console.log(action.payload)
      const newTiming = {
        id: 1,
        name: 'Tuesday',
        isChecked : false,
        timing : [
          {
            id: 0,
            openingTime : new Date('2018-01-01T03:08:00.000Z'),
            closingTime : new Date('2018-01-01T00:00:00.000Z')
          },
          
        ]
  
    }
      state.push(newTiming)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTiming } = timingSlice.actions

export default timingSlice.reducer