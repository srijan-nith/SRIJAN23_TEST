import Home from './Pages/Homepage/home'
import Teampage from './Pages/Teampage/Teampage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contributions from './Pages/Contributions/Contributions';

import './App.css';
import EditionsCardPage from './Pages/Editions/EditionsCardPage';
import Gallery from './Pages/Gallery/Gallery';
import Edition from './Pages/Editions/Edition';

function App() {
  // const isPhone = window.innerWidth <= 700;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        {/* {!isPhone && <Route path="/editions" element={<EditionsDesktop/>}></Route>}
        {!isPhone && <Route path="/editions" element={<EditionsDesktop/>}></Route>} */}
        <Route path="/editions" element={<Edition/>}></Route>
        <Route path="/editions/all" element={<EditionsCardPage/>}></Route>
        <Route path="/contributions" element={<Contributions/>}></Route>
        <Route path="/team" element={<Teampage/>}></Route>
        <Route path="/gallery" element={<Gallery/>}></Route>
      </Routes>
    </Router>
    );
}

export default App;
