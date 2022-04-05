import { Grid, Container, } from '@mui/material';
import PropTypes from 'prop-types';

// hooks
import useSettings from '../../../../hooks/useSettings';
import { SkeletonPostItem } from '../../../../components/skeleton';
// sections
import { DishCard } from '.';

Main.propTypes = {
  posts : PropTypes.array
}

export default function Main({posts}) {
  const { themeStretch } = useSettings();

  return (
      <Container maxWidth={themeStretch ? false : 'lg'}>
        
        <Grid container spacing={3}>
          {(!posts.length ? posts : posts).map((post, index) =>
            post ? (
              <Grid key={index} item xs={12} sm={6} md={3}>
                <DishCard post={post} index={index} />
              </Grid>
            ) : (
              <SkeletonPostItem key={index} />
            )
          )}
        </Grid>
      </Container>
  );
}
