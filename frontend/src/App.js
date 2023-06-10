import './assets/style.css';
import Home from "./pages/home/home"
import Movies from './pages/movies';
import TvShows from './pages/tvshows';
import MovieDetails from './pages/details/movie/details';
import TvDetails from './pages/details/tvShows/details';
import Login from './pages/login';
import Search from './pages/search';
import './input.css'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Register from './pages/register';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route index element={<Home />} />
                <Route path="movies" element={<Movies />} />
                <Route path="tv-shows" element={<TvShows />} />
                <Route path="movies/details/:id" element={<MovieDetails />} />
                <Route path="tv-shows/details/:id" element={<TvDetails />} />
                <Route path="search" element={<Search />} />
              </Routes>
              <Footer />
            </>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;