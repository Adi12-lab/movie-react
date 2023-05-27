import HeaderMovie from "./header"
import MainMovie from './main'
import Footer from '../../../components/footer'
import { useParams } from "react-router-dom"
import { useEffect, useState} from "react"
import { getMovieDetails} from "../../../api"
import { formatNumber } from "../../../helper"
const MovieDetails = () => {
    const {id} = useParams()
    const [detailMovie, setDetailMovie] = useState([])
    
    useEffect(() => {
        getMovieDetails(id).then((result) => {
            setDetailMovie(result)
        
    })
        // getMovieDetails(id)
    }, [])
    const baseImgUrl = process.env.REACT_APP_BASEIMGURL;
    
        return(
            <>  
                <HeaderMovie 
                    title={detailMovie.title} 
                    duration={detailMovie.runtime} 
                    overview={detailMovie.overview}
                    backdrop={`${baseImgUrl}/${detailMovie.backdrop_path}`}
                    image={`${baseImgUrl}/${detailMovie.poster_path}`}
                    status={detailMovie.status}
                    genres={detailMovie.genres}
                    release_date={detailMovie.release_date}
                    rate={formatNumber(detailMovie.vote_average)}
                    />
                <MainMovie />
                <Footer />
    
            </>
        )

    
}

export default MovieDetails