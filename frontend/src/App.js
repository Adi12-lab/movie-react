import './assets/style.css';
import Home from "./pages/home/home"
import Movies from './pages/movies/movies';
import TVShows from './pages/tvShows/tvshows';
import MovieDetails from './pages/details/movie/details';
import TvDetails from './pages/details/tvShows/details';
import Login from './pages/login/login';
import Search from './pages/search';
import './input.css'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/movies' element={<Movies />}/>
        <Route path='/tv-shows' element={<TVShows />} />
        <Route path='/movies/details/:id' element={<MovieDetails />} />
        <Route path='/tv-shows/details/:id' element={<TvDetails />} />
        <Route path='/search'element={<Search />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;