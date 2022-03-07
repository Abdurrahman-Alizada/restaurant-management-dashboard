import { capitalCase } from 'change-case';
import { useState } from 'react';
// @mui
import { Container, Tab, Box, Tabs } from '@mui/material';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
// sections
import {
    MainMenu, 
    Categories
} from '../../sections/@dashboard/menu-management';

// ----------------------------------------------------------------------

export default function UserAccount() {
  const { themeStretch } = useSettings();

  const [currentTab, setCurrentTab] = useState('main menu');

  const ACCOUNT_TABS = [
    {
      value: 'main menu',
      icon: <Iconify icon={'ic:baseline-restaurant-menu'} width={20} height={20} />,
      component: <MainMenu />,
    },
    {
      value: 'categories',
      icon: <Iconify icon={'bxs:category-alt'} width={20} height={20} />,
      component: <Categories />,
    
    },
    {
      value: 'notifications',
      icon: <Iconify icon={'eva:bell-fill'} width={20} height={20} />,
      component: <MainMenu />,
    },
    {
      value: 'social_links',
      icon: <Iconify icon={'eva:share-fill'} width={20} height={20} />,
      component: <MainMenu />,
    },
    {
      value: 'change_password',
      icon: <Iconify icon={'ic:round-vpn-key'} width={20} height={20} />,
      component: <MainMenu />,
    },
  ];

  return (
    <Page title="Menu Management">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        
        <Tabs
          value={currentTab}
          scrollButtons="auto"
          variant="scrollable"
          allowScrollButtonsMobile
          onChange={(e, value) => setCurrentTab(value)}
        >
          {ACCOUNT_TABS.map((tab) => (
            <Tab disableRipple key={tab.value} label={capitalCase(tab.value)} icon={tab.icon} value={tab.value} />
          ))}
        </Tabs>

        <Box sx={{ mb: 5 }} />

        {ACCOUNT_TABS.map((tab) => {
          const isMatched = tab.value === currentTab;
          return isMatched && <Box key={tab.value}>{tab.component}</Box>;
        })}
      </Container>
    </Page>
  );
}
