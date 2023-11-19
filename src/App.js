import ReactGA from 'react-ga';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './../src/components/Home/Home';
import NotFound from './components/NotFound/NotFound';


const App = () => {

  const TRACKING_ID = 'G-L0ZBB6C5SL';
  ReactGA.initialize(TRACKING_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);



  return (
    <>
      <Router>
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
