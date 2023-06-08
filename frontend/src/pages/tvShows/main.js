import Card from "../../components/card"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import { useEffect, useState } from "react"
import { getTvPopular, getTvTopRated } from "../../api"
import { NavLink } from "react-router-dom"
const Main = () => {
    const [topRatedTv, setTopRatedTvs] = useState([]);
    const [popularTv, setPopularTvs] = useState([])

    useEffect(() => {
        getTvTopRated().then((result) => {
            setTopRatedTvs(result)
        })
        getTvPopular().then((result) => {
            setPopularTvs(result)
        })
    }, [])
    return (
        <main className="text-white bg-cover bg-no-repeat pb-14" style={{
            backgroundImage: `url('/img/mainBackground1.jpg')`,
        }}>
            <div className="container pt-32">
                <div className="flex flex-wrap">
                    <h3 className="font-homenaje text-3xl border-l-4 border-secondary pl-6 inline-block">Acara Tv terbaik</h3>
                </div>
                <div className="mt-14 cursor-grabbing">
                    <Splide options={{
                        fixedWidth: '300px',
                        arrows: false,
                        pagination: false,
                        perMove: 1,
                        gap: '3rem',
                    }}>
                         {topRatedTv.map(function (tv, i) {
                            return (
                                <SplideSlide>
                                    <NavLink to={`/tv-shows/details/${tv.id}`}>
                                        <Card title={tv.name} poster_path={tv.poster_path} vote_average={tv.vote_average} release_date={tv.first_air_date} language={tv.origin_country[0]}/>
                                    </NavLink>
                                </SplideSlide>
                            )
                        })
                        }
                    </Splide>
                    
                </div>
                <div className="flex flex-wrap mt-16">
                    <h3 className="font-homenaje text-3xl border-l-4 border-secondary pl-6 inline-block">Acara TV terpopuler</h3>
                </div>
                <div className="mt-14 cursor-grabbing">
                    <Splide options={{
                        fixedWidth: '300px',
                        arrows: false,
                        pagination: false,
                        perMove: 1,
                        gap: '3rem',
                    }}>
                         {popularTv.map(function (tv, i) {
                            return (
                                <SplideSlide>
                                    <NavLink to={`/tv-shows/details/${tv.id}`}>
                                        <Card title={tv.name} poster_path={tv.poster_path} release_date={tv.first_air_date} vote_average={tv.vote_average} language={tv.origin_country[0]} />

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