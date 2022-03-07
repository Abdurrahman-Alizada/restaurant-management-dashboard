// @mui
// import { useTheme } from '@mui/material/styles';
import { Container, Grid } from '@mui/material';
// hooks
// import useAuth from '../../hooks/useAuth';
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
// sections
import {
  AppWelcome,
  AppWidget,
  AppTopRelated,
  AppAreaInstalled,
  AppCurrentDownload,
} from '../../sections/@dashboard/general/app';
// ----------------------------------------------------------------------

export default function GeneralApp() {
  // const { user } = useAuth();
  // const theme = useTheme();
  const { themeStretch } = useSettings();

  return (
    <Page title="Overview">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12}>
            <AppWelcome displayName='Basit' />
          </Grid>


          <Grid item xs={12} sm={6} md={3}>
            <AppWidget title="Weekly Sales" total={714000} icon={'ant-design:android-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidget title="New Users" total={1352831} color="info" icon={'ant-design:apple-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidget
              title="Item Orders"
              total={1723315}
              color="warning"
              icon={'ant-design:windows-filled'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidget title="Bug Reports" total={234} color="error" icon={'ant-design:bug-filled'} />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentDownload />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppAreaInstalled />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentDownload />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppAreaInstalled />
          </Grid>


          <Grid item xs={12} md={6} lg={4}>
            <AppTopRelated />
          </Grid>

        </Grid>
      </Container>
    </Page>
  );
}
