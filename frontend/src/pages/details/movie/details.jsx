import HeaderMovie from "./header";
import MainMovie from "./main";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails, getMovieImages } from "../../../api";
import { formatNumber } from "../../../helper";
const MovieDetails = () => {
  const { id } = useParams();
  const [detailMovie, setDetailMovie] = useState([]);
  const [imageMovie, setImageMovie] = useState([]);

  useEffect(() => {
    getMovieDetails(id).then((result) => {
      setDetailMovie(result);
    });
    getMovieImages(id).then((result) => {
      setImageMovie(result);
    });
    // getMovieDetails(id)
  }, [id]);
  const baseImgUrl = import.meta.env.VITE_REACT_APP_BASEIMGURL;

  return (
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
      <MainMovie images={imageMovie} />
    </>
  );
};

export default MovieDetails;
