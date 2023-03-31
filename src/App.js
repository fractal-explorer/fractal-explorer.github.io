import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Creators from "./pages/Creators";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

function App() {
  return (
      <Router>
      <Navbar />
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/creators' element={<Creators/>} />
      </Routes>
      </Router>
    
  );
}

export default App;
