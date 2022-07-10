import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import NotMatch from './pages/NotMatch';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </div>
  );
}

export default App;