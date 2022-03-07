import React from 'react'
import PropTypes from 'prop-types';
// @mui
import { Box, Card, Stack,Checkbox, Button, Collapse, TextField, Typography, IconButton } from '@mui/material';
import { LoadingButton, MobileTimePicker } from '@mui/lab';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
// components

import Iconify from '../../../components/Iconify';

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
  cards: PropTypes.array,
  isOpen: PropTypes.bool,
  onOpen: PropTypes.func,
  onCancel: PropTypes.func,
  addTiming : PropTypes.func,
  timing : PropTypes.object
};

export default function TimingSingleDay({ isOpen, onOpen, onCancel,addTiming, timing }) {
    const [value, setValue] = React.useState(timing.timing[0].openingTime);

  return (
    <Card sx={{ p: 3 , marginBottom : 3}}>
      <Typography variant="overline" sx={{ mb: 3, display: 'block', color: 'text.secondary' }}>
      {timing.name}
      </Typography>

            <Stack spacing={2} direction={{ xs: 'column', md: 'row' }} sx={{justifyContent:'space-between'}}>
             
                <Checkbox
                size="medium"
                checked={timing.isChecked}
                // onChange={handleChange}
                // inputProps={{ 'aria-label': 'controlled' }}
                />
               <Stack spacing={2} direction={{ xs: 'column' }}>
               
                <Stack spacing={2} direction={{ xs: 'row' }}>

                    <MobileTimePicker
                        label="Starting from"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                        />
                    <MobileTimePicker
                        label="Ending at"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                        />

                        <IconButton>
                        <Iconify icon={'fluent:delete-20-regular'} width={20} height={20} />
                        </IconButton>
                </Stack>

                <Stack spacing={2} direction={{ xs: 'row' }}>

                    <MobileTimePicker
                        label="Starting from"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                        />
                    <MobileTimePicker
                        label="Ending at"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                        />

                        <IconButton>
                        <Iconify icon={'fluent:delete-20-regular'} width={20} height={20} />
                        </IconButton>
                </Stack>
                
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
        <Button size="small"  startIcon={<Iconify icon={'eva:plus-fill'} />} onClick={onOpen}>
          Add new hours
        </Button>
        <ColorButton onClick={addTiming} variant="contained">Save Changes</ColorButton>
        </Box>

      <Collapse in={isOpen}>
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
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} fullWidth  />}
                />
            
            <MobileTimePicker
            label="Ending at"
            value={value}
            onChange={(newValue) => {
                setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} fullWidth  />}
            />
            </Stack>


            <Stack direction="row" justifyContent="flex-end" spacing={1.5}>
              <Button color="inherit" variant="outlined" onClick={onCancel}>
                Cancel
              </Button>
              <LoadingButton type="submit" variant="contained" onClick={onCancel}>
                Save Change
              </LoadingButton>
            </Stack>
          </Stack>
        </Box>
      </Collapse>
    </Card>
  );
}
