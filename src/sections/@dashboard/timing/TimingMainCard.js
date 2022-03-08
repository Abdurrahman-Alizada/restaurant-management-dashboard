import { useSelector } from 'react-redux'
import { Grid, } from '@mui/material';

import {TimingSingleDay} from '.';
// ----------------------------------------------------------------------

export default function TimingMainCard() {

  const timings = useSelector((state) => state.timing.days)

  return (
      <Grid container spacing={2}>
       {timings.map((timing, index)=>(
        <Grid key={index} item xs={12} >
        <TimingSingleDay
          timing={timing}
          index={index}
        />
        </Grid>

       ))}   
        
      </Grid>
  );
}
