import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { Box, styled, SwipeableDrawer, IconButton, Divider, Stack, Typography, Paper } from '@mui/material';
// _mock_
// import { _bookingNew } from '../../../../_mock';
// components
import Label from '../../../../components/Label';
import Image from '../../../../components/Image';
import Iconify from '../../../../components/Iconify';
import { EditDish } from '.'
// ----------------------------------------------------------------------

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

DishCard.propTypes = {
  post: PropTypes.shape({
    cover: PropTypes.string,
    name: PropTypes.string,
    person: PropTypes.string,
    roomNumber: PropTypes.string,
    roomType: PropTypes.string,
  }),
};


export default function DishCard({post}) {

  return (
    <Box sx={{ py: 2 }}>
        <BookingItem  item={post} />
    </Box>
  );
}

// ----------------------------------------------------------------------

BookingItem.propTypes = {
  item: PropTypes.shape({
    cover: PropTypes.string,
    name: PropTypes.string,
    person: PropTypes.string,
    roomNumber: PropTypes.string,
    roomType: PropTypes.string,
  }),
};

function BookingItem({ item }) {
  const {  name, roomNumber, person, cover, roomType } = item;
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(!open);
  };

  return (
    <Paper sx={{ mx: 1.5, borderRadius: 2, marginBottom:2 ,bgcolor: 'background.neutral' }}>
      <Stack spacing={2.5} sx={{ p: 3, pb: 2.5 }}>
         <Stack direction={"row"} justifyContent="space-between" alignItems={"center"} sacing={2}>
           <Stack spacing={2}>
          <div>
            <Typography variant="subtitle2">{name}</Typography>
          </div>
           </Stack>
           <IconButton onClick={handleDrawerOpen}>
            <Iconify  icon={'bi:three-dots-vertical'} width={16} height={16} />
            </IconButton>
           </Stack>

        <Stack direction="row" alignItems="center" spacing={3} sx={{ color: 'text.secondary' }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Iconify icon={'ic:round-vpn-key'} width={16} height={16} />
            <Typography variant="caption">Room {roomNumber}</Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1}>
            <Iconify icon={'eva:people-fill'} width={16} height={16} />
            <Typography variant="caption">{person} Person</Typography>
          </Stack>
        </Stack>
      </Stack>

      <Box sx={{ p: 1, position: 'relative' }}>
        <Label
          variant="filled"
          color={(roomType === 'king' && 'error') || (roomType === 'double' && 'info') || 'warning'}
          sx={{
            right: 16,
            zIndex: 9,
            bottom: 16,
            position: 'absolute',
            textTransform: 'capitalize',
          }}
        >
          {roomType}
        </Label>
        <Image src={cover} ratio="1/1" sx={{ borderRadius: 1.5 }} />
      </Box>

      <SwipeableDrawer
        sx={{
          width: '50%',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '50%',
            boxSizing: 'border-box',
          },
        }}
        anchor="right"
        open={open}
        onOpen={handleDrawerOpen}
        onClose={handleDrawerOpen}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerOpen}>
            <Iconify icon={'eva:arrow-ios-back-outline'} />
          </IconButton>
        </DrawerHeader>
        <Divider />
        
      <EditDish />

      </SwipeableDrawer>

    </Paper>
  );
}
