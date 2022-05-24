




import styled from 'styled-components'
import {Route, Routes, useLocation} from 'react-router-dom'
import  Header from './components/Header';
import Home from 'pages/Home'
import {AnimatePresence} from 'framer-motion'

import Coin from 'pages/Coin';
import {makeStyles} from '@material-ui/core'
function App() {
  const location = useLocation()
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: '#14161a',
      color:'white',
      minHeight:'100vh'
    }
  }));
  const classes = useStyles()
  return (
    <div className={classes.App}>
      <Header />
      <AnimatePresence exitBeforeEnter >
      <Routes location ={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/coins/:id' element={<Coin />} />
      </Routes>
      </AnimatePresence >
    </div>
    
  );
}


export default App;




