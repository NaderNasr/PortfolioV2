import ReactGA from 'react-ga';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './../src/components/Home/Home';
import NotFound from './components/NotFound/NotFound';



const App = () => {

  const TRACKING_ID = 'UA-163447962-1' || 'G-09Y4Z0FMWP';
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
