







import {AppBar, Container,Toolbar,Typography, Select, MenuItem, makeStyles, createTheme, ThemeProvider} from '@material-ui/core';
import { useNavigate } from "react-router-dom";
import {CryptoState} from '../CryptoContext'
import styled from 'styled-components';
const useStyles = makeStyles(() => ({
  title:{
    flex:1,
    color:'gold',
    fontFamily:'Outfit',
    fontWeight:'blod',
    cursor:'pointer'
  }
}))
function Header() {
  const {currency, setCurrency} = CryptoState();
  const classes = useStyles();
  const navigate= useNavigate();
  const darkTheme = createTheme({
    palette:{
      primary:{
        main:'#fff',
      },
      type: 'dark',
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color='transparent' position='static'>
      <Container>
        <Toolbar>
          <Typography 
          onClick={()=>navigate('/')} 
          className={classes.title}
          variant='h6'
          >Crypto Hunter</Typography>
          <Select variant='outlined' style={{
            width: 100,
            height: 40,
            marginRight: 15,
            }}
            value={currency}
            onChange={(e) => {setCurrency(e.target.value)}}
            >
            <MenuItem value={'USD'}>USD</MenuItem>
            <MenuItem value={'AED'}>AED</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
}

export default Header;




