import { matchPath, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import NotMatch from './pages/NotMatch';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SinglePage from './pages/SinglePage';

function App() {
  const { path } = matchPath;

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path={`${path}/:slug`} element={<SinglePage />} />
        </Route>
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </div>
  );
}

export default App;
