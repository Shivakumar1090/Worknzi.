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

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AnimatePresence>
          <Navbar />
          <Home />
          <HomeCards />
          <Services />
          {/* <Work /> */}
          <About />
          <Testimonials />
          <Inquiry />
          {/* <Footer /> */}
        </AnimatePresence>
      </ThemeProvider>
    </div>
  );
}

export default App;
