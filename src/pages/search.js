import Footer from "../components/footer"
import Navbar from "../components/navbar"
import BackButton from "../components/backButton"
import Card from "../components/card"
import { NavLink, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { searchMulti } from "../api"
import { formatNumber } from "../helper"
const Search = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("q");
    // let results =useRef([])
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        searchMulti(query).then((response) => {
            setResults(response)
        }).finally(() => {
            setIsLoading(false)
        })
   

    }, [query])
    console.log(results)
    const baseImgUrl = process.env.REACT_APP_BASEIMGURL;
    return (
        <>{
            isLoading ? (<div>
                Loading....
            </div>)
                : (
                    <>
                        <section className="text-white bg-cover bg-no-repeat pb-14" style={{
                            backgroundImage: `url('/img/mainBackground1.jpg')`,
                        }}>
                            <Navbar />
                            <div className="container">
                                <BackButton />
                                <h4 className="font-homenaje text-3xl mt-10">
                                    Search "{query}"
                                </h4>
                                <div className="flex flex-wrap items-center mt-9 gap-8">
                                    {
                                        results.map((item, i) => {
                                            const card = <Card
                                                poster_path={`${baseImgUrl}/${item.poster_path}`}
                                                title={item.title ?? item.name}
                                                vote_average={formatNumber(item.vote_average)}
                                                release_date={item.release_date ?? item.first_air_date}
                                                language={item.original_language} />

                                            if (item.media_type === 'tv') return <NavLink to={`/tv-shows/details/${item.id}`}> {card} </NavLink>
                                            
                                            return <NavLink to={`/movies/details/${item.id}`}> {card} </NavLink>
                                        })
                                    }
                                </div>
                            </div>
                        </section>
                        <Footer />
                    </>
                )}


        </>
    )
}
export default Search