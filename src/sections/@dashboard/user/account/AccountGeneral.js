import { capitalCase } from 'change-case';
import { useState } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Tab, Box, Card, Tabs, Container } from '@mui/material';
// routes
// hooks
import useSettings from '../../../../hooks/useSettings';
// _mock_
import { _userAbout, _userFeeds, _userFriends, _userGallery, _userFollowers } from '../../../../_mock';
// components
import Page from '../../../../components/Page';
import Iconify from '../../../../components/Iconify';
// sections
import {
  Profile,
  ProfileFriends,
  ProfileGallery,
  ProfileFollowers,
} from '../profile';

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
    justifyContent: 'center',
    paddingRight: theme.spacing(3),
  },
}));

// ----------------------------------------------------------------------

export default function UserProfile() {
  const { themeStretch } = useSettings();

  const [currentTab, setCurrentTab] = useState('profile');
  const [findFriends, setFindFriends] = useState('');

  const handleChangeTab = (newValue) => {
    setCurrentTab(newValue);
  };

  const handleFindFriends = (value) => {
    setFindFriends(value);
  };

  const PROFILE_TABS = [
    {
      value: 'biryani',
      icon: <Iconify icon={'ic:round-account-box'} width={20} height={20} />,
      component: <Profile myProfile={_userAbout} posts={_userFeeds} />,
    },
    {
      value: 'followers',
      icon: <Iconify icon={'eva:heart-fill'} width={20} height={20} />,
      component: <ProfileFollowers followers={_userFollowers} />,
    },
    {
      value: 'friends',
      icon: <Iconify icon={'eva:people-fill'} width={20} height={20} />,
      component: <ProfileFriends friends={_userFriends} findFriends={findFriends} onFindFriends={handleFindFriends} />,
    },
    {
      value: 'gallery',
      icon: <Iconify icon={'ic:round-perm-media'} width={20} height={20} />,
      component: <ProfileGallery gallery={_userGallery} />,
    },
  ];

  return (
    <Page title="Main Menu">
      <Container maxWidth={themeStretch ? false : 'lg'}>
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
                <Tab disableRipple key={tab.value} value={tab.value} icon={tab.icon} label={capitalCase(tab.value)} />
              ))}
            </Tabs>
          </TabsWrapperStyle>
        </Card>

        {PROFILE_TABS.map((tab) => {
          const isMatched = tab.value === currentTab;
          return isMatched && <Box key={tab.value}>{tab.component}</Box>;
        })}
      </Container>
    </Page>
  );
}
