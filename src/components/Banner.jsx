






import {makeStyles, Container, Typography} from '@material-ui/core';
import Carousel from './Carousel'
const useStyles = makeStyles(() => ({
  banner:{
    backgroundImage : "url('./banner2.jpg')",
  },
  bannerContent: {
    height:400,
    display:'flex',
    flexDirection: 'column',
    paddingTop:25,
    justifyContent: 'space-around',
  },
  tagline: {
    display:'flex',
    flexDirection:'column',
    height:'40%',
    justifyContent:'center',
    textAlign: 'center'
  }
}))
function Banner() {
  const classes = useStyles()
  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
          variant='h2'
          style ={{
            fontWeight: 'bold',
            marginBottom: 15,
            fontFamily: 'Outfit'
          }}
          >
          Crypto Hunter</Typography>
           <Typography
          variant='subtitle2'
          style ={{
            color:'darkgray',
            textTransform:'capitalize',
            fontFamily: 'Outfit'
          }}
          >
          Get all the info regarding your favorite Crypto Currency</Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
}

export default Banner;




