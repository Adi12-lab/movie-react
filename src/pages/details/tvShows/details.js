import HeaderTv from "./header"
import MainTv from './main'
import Footer from '../../../components/footer'
import { getTvDetails } from "../../../api"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { formatNumber } from "../../../helper"

const TvDetails = () => {
    const {id} = useParams()
    const [detailTv, setDetailTv] = useState([])
    useEffect(() => {
        getTvDetails(id).then((result) => {
            setDetailTv(result)
        })
    }, [])
    const duration = detailTv.episode_run_time && detailTv.episode_run_time[0];
    const baseImgUrl = process.env.REACT_APP_BASEIMGURL;
    return(
        <>
            <HeaderTv 
            name={detailTv.name}
            image={`${baseImgUrl}/${detailTv.poster_path}`}
            overview={detailTv.overview}
            duration={duration}
            genres={detailTv.genres}
            release_date={detailTv.first_air_date}
            rate={formatNumber(detailTv.vote_average)}
            status={detailTv.status}
            
            />

        </>
    )
}
export default TvDetails