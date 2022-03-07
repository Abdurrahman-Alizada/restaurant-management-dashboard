import { Grid, Container, } from '@mui/material';

// hooks
import useSettings from '../../../../hooks/useSettings';
import { SkeletonPostItem } from '../../../../components/skeleton';
// sections
import { DishCard } from '.';

export default function BlogPosts() {
  const { themeStretch } = useSettings();

  const posts1 = [
    {
      name : "Basit",
      roomNumber : "23" , 
      bookdAt : "23/4/23", 
      person : '3-5', 
      cover : "https://minimal-assets-api.vercel.app/assets/images/rooms/room-1.jpg", 
      roomType : "double",
    },
    {
      name : "Basit",
      roomNumber : "23" , 
      bookdAt : "23/4/23", 
      person : '3-5', 
      cover : "https://minimal-assets-api.vercel.app/assets/images/rooms/room-1.jpg", 
      roomType : "double",
    },
    {
      name : "Basit",
      roomNumber : "23" , 
      bookdAt : "23/4/23", 
      person : '3-5', 
      cover : "https://minimal-assets-api.vercel.app/assets/images/rooms/room-1.jpg", 
      roomType : "double",
    }

  ]

  return (
      <Container maxWidth={themeStretch ? false : 'lg'}>
        
        <Grid container spacing={3}>
          {(!posts1.length ? posts1 : posts1).map((post, index) =>
            post ? (
              <Grid key={post.id} item xs={12} sm={6} md={3}>
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
