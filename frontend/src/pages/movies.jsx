import Card from "../components/card";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";
import { getMovieTopRated, getMoviePopular } from "../api";
import { NavLink } from "react-router-dom";
const Movies = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieTopRated().then((result) => {
      setTopRatedMovies(result);
    });
    getMoviePopular().then((result) => {
      setPopularMovies(result);
    });
  }, []);
  return (
    <main
      className="bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url('/img/mainBackground1.jpg')`,
      }}
    >
      <div className="container pb-16 pt-32 lg:px-4">
        <div className="flex flex-wrap">
          <h3 className="inline-block border-l-4 border-secondary pl-6 font-homenaje text-3xl">
            Film terbaik
          </h3>
        </div>
        <div className="mt-14 cursor-grabbing">
          <Splide
            options={{
              fixedWidth: "300px",
              arrows: false,
              pagination: false,
              perMove: 1,
              gap: "3rem",
            }}
          >
            {topRatedMovies.map(function (movie) {
              return (
                <SplideSlide key={movie.id}>
                  <NavLink to={`/movies/details/${movie.id}`}>
                    <Card
                      title={movie.title}
                      poster_path={movie.poster_path}
                      release_date={movie.release_date}
                      vote_average={movie.vote_average}
                      language={movie.original_language}
                    />
                  </NavLink>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
        <div className="mt-16 flex flex-wrap">
          <h3 className="inline-block border-l-4 border-secondary pl-6 font-homenaje text-3xl">
            Film terpopuler
          </h3>
        </div>
        <div className="mt-14 cursor-grabbing">
          <Splide
            options={{
              fixedWidth: "300px",
              arrows: false,
              pagination: false,
              perMove: 1,
              gap: "3rem",
            }}
          >
            {popularMovies.map(function (movie) {
              return (
                <SplideSlide key={movie.id}>
                  <NavLink to={`/movies/details/${movie.id}`}>
                    <Card
                      title={movie.title}
                      poster_path={movie.poster_path}
                      release_date={movie.release_date}
                      vote_average={movie.vote_average}
                      language={movie.original_language}
                    />
                  </NavLink>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      </div>
    </main>
  );
};
export default Movies;
