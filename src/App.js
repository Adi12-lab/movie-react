import './assets/style.css';
import Home from "./pages/home/home"
import Movies from './pages/movies/movies';
import TVShows from './pages/tvShows/tvshows';
import Details from './pages/details/details';
import Login from './pages/login/login';
import './input.css'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/movies' element={<Movies />}/>
        <Route path='/tv-shows' element={<TVShows />} />
        <Route path='/details' element={<Details />} />
        <Route path='/login' element={<Login />}/>
      </Routes>
    </Router>
  );
}

export default App;
