import { capitalCase } from 'change-case';
import { useState } from 'react';
// @mui
import { Container, Tab, Box, Tabs } from '@mui/material';
// hooks
import useSettings from '../../hooks/useSettings';
// _mock_
import { _userPayment, _userAddressBook, _userInvoices } from '../../_mock';
// components
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
import {
  TimingMainCard,
} from '../../sections/@dashboard/timing';

// ----------------------------------------------------------------------

export default function UserAccount() {
  const { themeStretch } = useSettings();

  const [currentTab, setCurrentTab] = useState('opening_hours');

  const ACCOUNT_TABS = [
    {
      value: 'opening_hours',
      icon: <Iconify icon={'ic:round-receipt'} width={20} height={20} />,
      component: <TimingMainCard cards={_userPayment} addressBook={_userAddressBook} invoices={_userInvoices} />,
    },
    {
      value: 'holidays',
      icon: <Iconify icon={'eva:bell-fill'} width={20} height={20} />,
      component: <TimingMainCard cards={_userPayment} addressBook={_userAddressBook} invoices={_userInvoices} />,
    },
    {
      value: 'special_hours',
      icon: <Iconify icon={'eva:share-fill'} width={20} height={20} />,
      component: <TimingMainCard cards={_userPayment} addressBook={_userAddressBook} invoices={_userInvoices} />,
    },
  ];

  return (
    <Page title="Timing | Restaurant management dashboard">
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
