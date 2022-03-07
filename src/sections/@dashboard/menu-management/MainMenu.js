import { capitalCase } from 'change-case';
import { useState } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Tab, Box, Card, Button, Tabs, Stack, SwipeableDrawer, IconButton, Divider } from '@mui/material';
import Iconify from '../../../components/Iconify';

// components
import Page from '../../../components/Page';
import { Dish, DishSearch, NewDish } from './Dish';
// ----------------------------------------------------------------------

const TabsWrapperStyle = styled('div')(({ theme }) => ({
  zIndex: 9,
  bottom: 0,
  width: '100%',
  display: 'flex',
  position: 'absolute',
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.up('sm')]: {
    justifyContent: 'center',
  },
  [theme.breakpoints.up('md')]: {
    justifyContent: 'flex-start',
    paddingLeft: theme.spacing(3),
  },
}));

// ----------------------------------------------------------------------

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));


export default function UserProfile() {
  const [currentTab, setCurrentTab] = useState('biryani');

  const handleChangeTab = (newValue) => {
    setCurrentTab(newValue);
  };

  const PROFILE_TABS = [
    {
      value: 'biryani',
      component: <Dish />,
    },
    {
      value: 'burger',
      component: <Dish />,
    },
    {
      value: 'salads',
      component: <Dish />,
    },
    {
      value: 'shawarma',
      component: <Dish />,
    },
  ];

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(!open);
  };

  return (
    <Page title="Main Menu">
      <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
        <DishSearch />
        <Stack  direction="row" mr={2} alignItems="center" justifyContent="space-between" >
        <Button 
           variant="contained" startIcon={<Iconify icon={'eva:plus-fill'} />}
           onClick={handleDrawerOpen}>
          Add Item
        </Button>
     
        <Button variant="contained" 
          startIcon={<Iconify icon={'eva:edit-fill'} />} 
          onClick={handleDrawerOpen}
          color="secondary"
          sx={{
            marginLeft:2
          }}
          >
          Edit Item
        </Button>
        </Stack>
      </Stack>
      <Card
        sx={{
          mb: 3,
          height: 50,
          position: 'relative',
        }}
      >
        <TabsWrapperStyle>
          <Tabs
            value={currentTab}
            scrollButtons="auto"
            variant="scrollable"
            allowScrollButtonsMobile
            onChange={(e, value) => handleChangeTab(value)}
          >
            {PROFILE_TABS.map((tab) => (
              <Tab disableRipple key={tab.value} value={tab.value} label={capitalCase(tab.value)} />
            ))}
          </Tabs>
        </TabsWrapperStyle>
      </Card>

      {PROFILE_TABS.map((tab) => {
        const isMatched = tab.value === currentTab;
        return isMatched && <Box key={tab.value}>{tab.component}</Box>;
      })}

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
        
        <NewDish />

      </SwipeableDrawer>
    </Page>
  );
}
