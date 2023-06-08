import Card from "../../components/card"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import { useEffect, useState } from "react"
import { getMovieTopRated, getMoviePopular } from "../../api"
import { NavLink } from "react-router-dom"
const Main = () => {
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([])

    useEffect(() => {
        getMovieTopRated().then((result) => {
            setTopRatedMovies(result)
        })
        getMoviePopular().then((result) => {
            setPopularMovies(result)
        })
    }, [])
    return (
        <main className="text-white bg-cover bg-no-repeat bg-center" style={{
            backgroundImage: `url('/img/mainBackground1.jpg')`,
        }}>
            <div className="container pt-32">
                <div className="flex flex-wrap">
                    <h3 className="font-homenaje text-3xl border-l-4 border-secondary pl-6 inline-block">Film terbaik</h3>
                </div>
                <div className="mt-14 cursor-grabbing">
                    <Splide options={{
                        fixedWidth: '300px',
                        arrows: false,
                        pagination: false,
                        perMove: 1,
                        gap: '3rem',
                    }}>
                        {topRatedMovies.map(function (movie, i) {
                            return (
                                <SplideSlide>
                                    <NavLink to={`/movies/details/${movie.id}`}>
                                        <Card title={movie.title} poster_path={movie.poster_path} release_date={movie.release_date} vote_average={movie.vote_average} language={movie.original_language} />
                                    </NavLink>
                                </SplideSlide>
                            )
                        })
                        }
                    </Splide>
                </div>
                <div className="flex flex-wrap mt-16">
                    <h3 className="font-homenaje text-3xl border-l-4 border-secondary pl-6 inline-block">Film terpopuler</h3>
                </div>
                <div className="mt-14 cursor-grabbing">
                    <Splide options={{
                        fixedWidth: '300px',
                        arrows: false,
                        pagination: false,
                        perMove: 1,
                        gap: '3rem',
                    }}>
                        {popularMovies.map(function (movie, i) {
                            return (
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
            </div>
        </main>
    )
}
export default Main