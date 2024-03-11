import { ThemeProvider } from '@emotion/react';
import './App.css';
import { AnimatePresence } from 'framer-motion';
import theme from './theme';

import Home from './components/pages/Home/home';
import Navbar from './components/utilities/navbar';
import Services from './components/pages/Services/services';
import Work from './components/pages/Work/work';
import About from './components/pages/About/about';
import Testimonials from './components/pages/Testimonials/testimonials';
import Inquiry from './components/pages/Contact us/inquiry';
import Footer from './components/utilities/footer';
import HomeCards from './components/pages/Home/HomeCards';
import Blogs from './components/pages/Blogs/blogs';
import ScrollTop from './components/utilities/scrolltop';
import { Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function App(props) {
  
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AnimatePresence>
          <Navbar />
          <Home />
          <HomeCards />
          <Services />
          <Work />
          <About />
          <Testimonials />
          <Blogs />
          <Inquiry />
          <Footer />
          <ScrollTop {...props}>
            <Fab size="medium" aria-label="scroll back to top" sx={{background: '#66fcf1'}}>
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
        </AnimatePresence>
      </ThemeProvider>
    </div>
  );
}

export default App;
