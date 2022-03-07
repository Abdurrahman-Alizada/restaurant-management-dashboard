import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';
// @mui
import { Grid, } from '@mui/material';

import {TimingSingleDay} from '.';
// ----------------------------------------------------------------------
import {addTiming} from '../../../redux/slices/Timing'

export default function TimingMainCard() {
  const [open, setOpen] = useState(false);

  const timings = useSelector((state) => state.timing)
  const dispatch = useDispatch()

  return (
      <Grid container spacing={2}>
       {timings.map((timing, index)=>(
        <Grid key={index} item xs={12} >
        <TimingSingleDay
          timing={timing}
          isOpen={open}
          addTiming={()=>dispatch(addTiming())}
          onOpen={() => setOpen(!open)}
          onCancel={() => setOpen(false)}
        />
        </Grid>

       ))}   
        
      </Grid>
  );
}
