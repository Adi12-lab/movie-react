import { lazy, Suspense } from "react";
import "./input.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/style.css";
import Loading from "./components/loading";

const Home = lazy(() => import("./pages/home/home"));
const Movies = lazy(() => import("./pages/movies"));
const TvShows = lazy(() => import("./pages/tvshows"));
const MovieDetails = lazy(() => import("./pages/details/movie/details"));
const TvDetails = lazy(() => import("./pages/details/tvShows/details"));
const Login = lazy(() => import("./pages/login"));
const Search = lazy(() => import("./pages/search"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const Register = lazy(() => import("./pages/register"));
const Navbar = lazy(() => import("./components/navbar"));
const Footer = lazy(() => import("./components/footer"));

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
                <Route
                  index
                  element={
                    <Suspense fallback={<Loading />}>
                      <Home />
                    </Suspense>
                  }
                />
                <Route
                  path="movies"
                  element={
                    <Suspense fallback={<Loading />}>
                      <Movies />
                    </Suspense>
                  }
                />
                <Route
                  path="tv-shows"
                  element={
                    <Suspense fallback={<Loading />}>
                      <TvShows />
                    </Suspense>
                  }
                />
                <Route
                  path="movies/details/:id"
                  element={
                    <Suspense fallback={<Loading />}>
                      <MovieDetails />
                    </Suspense>
                  }
                />
                <Route
                  path="tv-shows/details/:id"
                  element={
                    <Suspense fallback={<Loading />}>
                      <TvDetails />
                    </Suspense>
                  }
                />
                <Route
                  path="search"
                  element={
                    <Suspense fallback={<Loading />}>
                      <Search />
                    </Suspense>
                  }
                />
              </Routes>
              <Footer />
            </>
          }
        />
        <Route
          path="login"
          element={
            <Suspense fallback={<Loading />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="dashboard"
          element={
            <Suspense fallback={<Loading />}>
              <Dashboard />
            </Suspense>
          }
        />
        <Route
          path="register"
          element={
            <Suspense fallback={<Loading />}>
              <Register />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
