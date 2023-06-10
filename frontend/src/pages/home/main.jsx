import Card from '../../components/card'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { getMovieUpcoming, getMovieTrending, getTvAiring } from '../../api';
import { useEffect, useState } from 'react';
import Marvel from "../../assets/marvel.png"
import Disney from "../../assets/disney.png"
import Dc from "../../assets/dc.png"
import Starwars from "../../assets/starwars.png"
import { NavLink } from 'react-router-dom';
import '@splidejs/react-splide/css';

function Main() {
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [airingTv, setAiringTv] = useState([]);
    useEffect(() => {
        getMovieUpcoming().then((result) => {
            setUpcomingMovies(result)
        })
        getMovieTrending().then((result) => {
            setTrendingMovies(result)
        })
        getTvAiring().then((result) => {
            setAiringTv(result)
        })
    }, [])
    return (
        <main>
            <section className="bg-no-repeat  bg-cover bg-left-top pt-24 pb-16 text-white" style={{
                backgroundImage: `url('/img/mainBackground1.jpg')`,
            }}>
                <div className="container">
                    <div className="flex flex-wrap">
                        <h6 className="uppercase text-primary">online streaming</h6>
                    </div>
                    <div className="flex flex-wrap items-center mt-9">
                        <h3 className="font-homenaje text-4xl block">Upcoming Movies</h3>
                        <ul className="flex h-max ms-auto gap-x-3">
                            <li className="bg-dark px-6 py-2 rounded-full">Film</li>
                            <li className="bg-dark px-6 py-2 rounded-full">Acara TV</li>
                            <li className="bg-dark px-6 py-2 rounded-full">Anime</li>
                        </ul>
                    </div>
                    <div className='mt-16 cursor-grabbing'>
                        <Splide options={{
                            fixedWidth: '300px',
                            arrows: false,
                            pagination: false,
                            perMove: 1,
                            gap: '3rem',
                        }}>
                            {upcomingMovies.map(function (movie, i) {
                                return(
                                    <SplideSlide>
                                        <NavLink to={`/movies/details/${movie.id}`}>
                                            <Card title={movie.title} poster_path={movie.poster_path} release_date={movie.release_date} vote_average={movie.vote_average} language={movie.original_language}/>
                                        </NavLink>
                                    </SplideSlide>
                                )
                            })
                            }
                        </Splide>

                    </div>
                    <div className='mt-14 cursor-grabbing'>
                        <Splide options={{
                            fixedWidth: '207px',
                            arrows: false,
                            perMove: 1,
                            gap: '.5rem',
                            pagination: false,
                        }}>
                            {trendingMovies.map(function(movie, i) {
                                return (
                                    <SplideSlide>
                                        <NavLink to={`/movies/details/${movie.id}`}>
                                            <img src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} alt={movie.title}/>
                                        </NavLink>
                                    </SplideSlide>
                                )
                            })

                            }
                        </Splide>
                    </div>
                </div>
            </section>

            <section className='bg-[#1E1E1E] pt-16'>
                <div className='container lg:hidden'>
                    <div className='flex flex-wrap justify-evenly'>
                        <img src={Marvel} alt='marvel'/>
                        <img src={Disney} alt='disney'/>
                        <img src={Dc} alt='dc'/>
                        <img src={Starwars} alt='starwars' />
                    </div>

                    <div className='mt-14 cursor-grabbing'>
                        <Splide options={{
                            type: 'loop',
                            fixedWidth: '207px',
                            arrows: false,
                            perMove: 1,
                            gap: '.5rem',
                            pagination: false
                        }}>
                            {airingTv.map((tv, i) => {
                                return(
                                    <SplideSlide>
                                        <NavLink to={`/tv-shows/details/${tv.id}`}>
                                            <img src={`${process.env.REACT_APP_BASEIMGURL}/${tv.poster_path}`} alt={tv.name}/>
                                        </NavLink>
                                    </SplideSlide>
                                )
                            })

                            }
                        </Splide>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default Main