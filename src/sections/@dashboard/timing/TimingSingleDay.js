import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types';
// @mui
import { Box, Card, Stack,Checkbox, Button, Collapse, TextField, Typography, IconButton } from '@mui/material';
import { LoadingButton, MobileTimePicker } from '@mui/lab';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
// components

import Iconify from '../../../components/Iconify';
import {addTiming, IncludeOrNot, deleteTiming, editTiming} from '../../../redux/slices/Timing'

// ----------------------------------------------------------------------
const ColorButton = styled(Button)(({ theme }) => ({
    marginLeft:5,
    float:'right',
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));

TimingSingleDay.propTypes = {
  timing : PropTypes.object,
  index : PropTypes.number
};

export default function TimingSingleDay({ timing,index }) {
  const [btnDisable, setBtnDisable] = useState(true);
    const [open, setOpen] = useState(false);
   
    const [newStartingFrom, setNewStartingFrom] = useState(new Date('2018-01-01T06:08:00.000Z'))
    const [newEndingAt, setNewEndingAt] = useState(new Date('2018-01-01T03:08:00.000Z'))

    const dispatch = useDispatch()

    const handleChangesInStartingTime = (newValue, HourIndex)=>{
      console.log(newValue)
      const value = newValue
      setBtnDisable(false)
      dispatch(editTiming({index , value, HourIndex, ChangeIn:"start"}))
    }

    const handleChangesInEndingTime = (newValue, HourIndex)=>{
      console.log(newValue)
      const value = newValue
      setBtnDisable(false)
      dispatch(editTiming({index , value, HourIndex, ChangeIn:"end"}))
    }
    
    return (
    <Card sx={{ p: 3 , marginBottom : 3}}>
      <Typography variant="overline" sx={{ mb: 3, display: 'block', color: 'text.secondary' }}>
      {timing.name}
      </Typography>
        <Stack spacing={2} direction={{ xs: 'column', md: 'row' }} sx={{justifyContent:'space-between'}}>
          
          <Stack sx={{justifyContent:'center'}}>
            <Checkbox
            size="medium"
            checked={timing.isInclude}
            onChange={()=>dispatch(IncludeOrNot({index}))}
            inputProps={{ 'aria-label': 'controlled' }}
            />
          </Stack>
          <Stack spacing={2} direction={{ xs: 'column' }}>
           {timing.hours.map((hour, HourIndex)=>(
            <Stack key={HourIndex} spacing={2} direction={{ xs: 'row' }}>
              <MobileTimePicker
                label="Starting from"
                value={hour.openingTime}
                onChange={(newValue) => {
                  handleChangesInStartingTime(newValue, HourIndex);
                }}
                renderInput={(params) => <TextField {...params} />}
                />
                <MobileTimePicker
                label="Ending at"
                value={hour.closingTime}
                onChange={(newValue) => {
                  handleChangesInEndingTime(newValue, HourIndex);
                }}
                renderInput={(params) => <TextField {...params} />}
                />

                <IconButton onClick={()=> dispatch(deleteTiming({HourIndex , index}))}>
                <Iconify icon={'fluent:delete-20-regular'} width={20} height={20} />
                </IconButton>
            </Stack>
            
           ))}    
            
          </Stack>
      
          <IconButton
            sx={{
                top: 15,
                right: 8,
                position: 'absolute',
              }}
              >
            <Iconify icon={'eva:more-vertical-fill'} width={20} height={20} />
          </IconButton>
        
        </Stack>

      <Box sx={{ mt: 3, alignSelf: 'flex-end' }}>
      { open ?        
        <Button size="small"  startIcon={<Iconify icon={'icons8:cancel'} />} onClick={()=>setOpen(!open)}>
          Cancel
        </Button>
          :
        <Button size="small"  startIcon={<Iconify icon={'eva:plus-fill'} />} onClick={()=>setOpen(!open)}>
          Add new hours
        </Button>
          }
        <ColorButton onClick={()=>console.log('')} disabled={btnDisable} variant="contained">Save Changes</ColorButton>
        </Box>

      <Collapse in={open}>
        <Box
          sx={{
            padding: 3,
            marginTop: 3,
            borderRadius: 1,
            bgcolor: 'background.neutral',
          }}
        >
          <Stack spacing={3}>
            <Typography variant="subtitle1">Add new card</Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <MobileTimePicker
                label="Starting from"
                value={newStartingFrom}
                onChange={(newValue) => {
                    setNewStartingFrom(newValue);
                }}
                renderInput={(params) => <TextField {...params} fullWidth  />}
                />
            
            <MobileTimePicker
            label="Ending at"
            value={newEndingAt}
            onChange={(newValue) => {
                setNewEndingAt(newValue);
            }}
            renderInput={(params) => <TextField {...params} fullWidth  />}
            />
            </Stack>


            <Stack direction="row" justifyContent="flex-end" spacing={1.5}>
              <Button color="inherit" variant="outlined" onClick={()=>setOpen(false)}>
                Cancel
              </Button>
              <LoadingButton 
                type="submit" 
                variant="contained" 
                onClick={()=>dispatch(addTiming({index, newStartingFrom, newEndingAt}))}>
                Save Change
              </LoadingButton>
            </Stack>
          </Stack>
        </Box>
      </Collapse>
    </Card>
  );
}
