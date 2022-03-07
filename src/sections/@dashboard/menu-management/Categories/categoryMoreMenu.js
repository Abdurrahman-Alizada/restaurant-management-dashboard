import { useState } from 'react';
// @mui
import { SwipeableDrawer, styled, Divider, IconButton } from '@mui/material';
// routes
// components
import Iconify from '../../../../components/Iconify';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));


export default function UserMoreMenu() {
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };


  // const [open, setOpen] = useState(false);

  const handleDrawerOpen = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(!open);
  };


  return (
  <>
        <IconButton onClick={handleOpen}>
        <Iconify icon={'eva:more-vertical-fill'} width={20} height={20} />
      </IconButton>

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

  </SwipeableDrawer>
  </>
  );
}
