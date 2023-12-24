import Card from "../../components/card";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { getMovieUpcoming, getMovieTrending, getTvAiring } from "../../api";
import { useEffect, useState } from "react";
import Marvel from "../../assets/marvel.png";
import Disney from "../../assets/disney.png";
import Dc from "../../assets/dc.png";
import Starwars from "../../assets/starwars.png";
import { NavLink } from "react-router-dom";
import "@splidejs/react-splide/css";
import { ImageWithSkeleton } from "../../components/image-skeleton";

function Main() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [airingTv, setAiringTv] = useState([]);
  useEffect(() => {
    getMovieUpcoming().then((result) => {
      setUpcomingMovies(result);
    });
    getMovieTrending().then((result) => {
      setTrendingMovies(result);
    });
    getTvAiring().then((result) => {
      setAiringTv(result);
    });
  }, []);
  return (
    <main>
      <section
        className="bg-cover  bg-left-top bg-no-repeat pb-16 pt-24 text-white"
        style={{
          backgroundImage: `url('/img/mainBackground1.jpg')`,
        }}
      >
        <div className="container lg:px-4">
          <div className="flex flex-wrap">
            <h6 className="uppercase text-primary">online streaming</h6>
          </div>
          <div className="mt-9 flex flex-wrap items-center">
            <h3 className="block font-homenaje text-4xl">Upcoming Movies</h3>
            <ul className="ms-auto flex h-max gap-x-3">
              <li className="rounded-full bg-dark px-6 py-2">Film</li>
              <li className="rounded-full bg-dark px-6 py-2">Acara TV</li>
              <li className="rounded-full bg-dark px-6 py-2">Anime</li>
            </ul>
          </div>
          <div className="mt-16 cursor-grabbing">
            <Splide
              options={{
                fixedWidth: "300px",
                arrows: false,
                pagination: false,
                perMove: 1,
                gap: "3rem",
              }}
            >
              {upcomingMovies.map(function (movie, i) {
                return (
                  <SplideSlide key={i}>
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
          <div className="mt-14 cursor-grabbing">
            <Splide
              options={{
                fixedWidth: "207px",
                arrows: false,
                perMove: 1,
                gap: ".5rem",
                pagination: false,
              }}
            >
              {trendingMovies.map(function (movie, i) {
                return (
                  <SplideSlide key={i}>
                    <NavLink to={`/movies/details/${movie.id}`}>
                      <ImageWithSkeleton
                        src={`${import.meta.env.VITE_REACT_APP_BASEIMGURL}/${
                          movie.poster_path
                        }`}
                        alt={movie.title}
                        classNameSkeleton="w-[300px] h-[300px]"
                      />
                    </NavLink>
                  </SplideSlide>
                );
              })}
            </Splide>
          </div>
        </div>
      </section>

      <section className="bg-[#1E1E1E] pt-16">
        <div className="container lg:hidden">
          <div className="flex flex-wrap justify-evenly">
            <img src={Marvel} alt="marvel" />
            <img src={Disney} alt="disney" />
            <img src={Dc} alt="dc" />
            <img src={Starwars} alt="starwars" />
          </div>

          <div className="mt-14 cursor-grabbing">
            <Splide
              options={{
                type: "loop",
                fixedWidth: "207px",
                arrows: false,
                perMove: 1,
                gap: ".5rem",
                pagination: false,
              }}
            >
              {airingTv.map((tv, i) => {
                return (
                  <SplideSlide key={i}>
                    <NavLink to={`/tv-shows/details/${tv.id}`}>
                      <ImageWithSkeleton
                        src={`${import.meta.env.VITE_REACT_APP_BASEIMGURL}/${
                          tv.poster_path
                        }`}
                        alt={tv.name}
                        classNameSkeleton="w-[300px] h-[300px]"
                      />
                    </NavLink>
                  </SplideSlide>
                );
              })}
            </Splide>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
