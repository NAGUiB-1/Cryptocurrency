



import Banner from '../components/Banner'
import CoinsTable from '../components/CoinsTable'
import {motion} from 'framer-motion'
function Home() {
  return (
<motion.div
    animate ={{opacity:1}}
      initial={{opacity:0}}
      exit={{opacity:0}}
      transition={{duration:0.5}}
    >
      <Banner />
      <CoinsTable />
    </motion.div>
  );
}

export default Home;




