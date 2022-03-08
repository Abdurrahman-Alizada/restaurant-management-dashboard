import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  days: [
    {
      id: 0,
      name: 'Monday',
      isInclude: true,
      hours: [
        {
          id: 0,
          openingTime: new Date('2018-01-01T05:10:00.000Z'),
          closingTime: new Date('2018-01-01T00:00:00.000Z'),
        },
        {
          id: 0,
          openingTime: new Date('2018-01-01T03:08:00.000Z'),
          closingTime: new Date('2018-01-01T00:00:00.000Z'),
        },
      ],
    },
    {
      id: 1,
      name: 'Tuesday',
      isInclude: true,
      hours: [
        {
          id: 0,
          openingTime: new Date('2018-01-01T03:08:00.000Z'),
          closingTime: new Date('2018-01-01T00:00:00.000Z'),
        },
      ],
    },
    {
      id: 2,
      name: 'Wednesday',
      isInclude: true,
      hours: [
        {
          id: 0,
          openingTime: new Date('2018-01-01T03:08:00.000Z'),
          closingTime: new Date('2018-01-01T00:00:00.000Z'),
        },
      ],
    },
    {
      id: 3,
      name: 'Thursday',
      isInclude: true,
      hours: [
        {
          id: 0,
          openingTime: new Date('2018-01-01T03:08:00.000Z'),
          closingTime: new Date('2018-01-01T00:00:00.000Z'),
        },
      ],
    },
    {
      id: 4,
      name: 'Friday',
      isInclude: true,
      hours: [
        {
          id: 0,
          openingTime: new Date('2018-01-01T03:08:00.000Z'),
          closingTime: new Date('2018-01-01T00:00:00.000Z'),
        },
      ],
    },
    {
      id: 5,
      name: 'Saturday',
      isInclude: true,
      hours: [
        {
          id: 0,
          openingTime: new Date('2018-01-01T03:08:00.000Z'),
          closingTime: new Date('2018-01-01T00:00:00.000Z'),
        },
      ],
    },
    {
      id: 6,
      name: 'Sunday',
      isInclude: true,
      hours: [
        {
          id: 0,
          openingTime: new Date('2018-01-01T03:08:00.000Z'),
          closingTime: new Date('2018-01-01T00:00:00.000Z'),
        },
      ],
    },
  ],
};
export const timingSlice = createSlice({
  name: 'timing',
  initialState,
  reducers: {
    // day is include or not
    IncludeOrNot: (state, action) => {
      const { index } = action.payload;
      state.days[index].isInclude = !state.days[index].isInclude;
    },

    addTiming: (state, action) => {
      const { index, newStartingFrom, newEndingAt } = action.payload;
      const newHours = {
        id: 1,
        openingTime: newStartingFrom,
        closingTime: newEndingAt,
      };
      state.days[index].hours.push(newHours);
    },

    deleteTiming: (state, action) => {
      const { index, HourIndex } = action.payload;
      console.log(index, HourIndex);
      state.days[index].hours.splice(HourIndex, 1);
    },

    editTiming: (state, action) => {
      const {index, HourIndex, ChangeIn, value} = action.payload
      console.log(index, HourIndex, ChangeIn)
      if(ChangeIn === "start"){
        state.days[index].hours[HourIndex].openingTime = value 
      }else{
        state.days[index].hours[HourIndex].closingTime = value 
      }
    }
   },
});

// Action creators are generated for each case reducer function
export const { IncludeOrNot, addTiming, deleteTiming, editTiming } = timingSlice.actions;

export default timingSlice.reducer;
