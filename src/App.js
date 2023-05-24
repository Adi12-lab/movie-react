import './assets/style.css';
import Home from "./pages/home/home"
import Movies from './pages/movies/movies';
import './input.css'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='movies' element={<Movies />}/>
      </Routes>
    </Router>
  );
}

export default App;
