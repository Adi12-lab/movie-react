import Header from "./header"
import Footer from '../../components/footer'
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getMovieDetails, getTvDetails } from "../../api"
import { formatNumber } from "../../helper"
const MovieDetails = () => {
    const { id } = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        getMovieDetails(id).then((result) => {
            setData(result)

        }).catch(() => {
            getTvDetails(id).then((result) => {
                setData(result)
            })
        })
        // getMovieDetails(id)
    }, [])
    console.log(data)
    const baseImgUrl = process.env.REACT_APP_BASEIMGURL;

    return (
        <>
            <Header
                title={data.title}
                duration={data.runtime}
                overview={data.overview}
                backdrop={`${baseImgUrl}/${data.backdrop_path}`}
                image={`${baseImgUrl}/${data.poster_path}`}
                status={data.status}
                genres={data.genres}
                release_date={data.release_date}
                rate={formatNumber(data.vote_average)}
            />

            <Footer />

        </>
    )


}

export default MovieDetails