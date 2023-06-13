import BackButton from "../components/backButton";
import Card from "../components/card";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchMulti } from "../api";
import { formatNumber } from "../helper";
const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q");
  // let results =useRef([])
  const [results, setResults] = useState([]);
  useEffect(() => {
    searchMulti(query).then((response) => {
      setResults(response);
    });
    return () => searchMulti();
  }, [query]);
  const baseImgUrl = process.env.REACT_APP_BASEIMGURL;
  return (
    <>
      <section
        className="bg-cover bg-no-repeat h-screen text-white"
        style={{
          backgroundImage: `url('/img/mainBackground1.jpg')`,
        }}
      >
        <div className="container pt-32">
          <BackButton />
          <h4 className="mt-10 font-homenaje text-3xl">Search "{query}"</h4>
          <div className="mt-9 flex flex-wrap items-center gap-8 lg:justify-center">
            {results.length !== 0 ? (
              results.map((item, i) => {
                const card = (
                  <Card
                    poster_path={`${baseImgUrl}/${item.poster_path}`}
                    title={item.title ?? item.name}
                    vote_average={formatNumber(item.vote_average)}
                    release_date={item.release_date ?? item.first_air_date}
                    language={item.original_language}
                  />
                );

                if (item.media_type === "tv")
                  return (
                    <NavLink to={`/tv-shows/details/${item.id}`}>
                      {" "}
                      {card}{" "}
                    </NavLink>
                  );

                return (
                  <NavLink to={`/movies/details/${item.id}`}> {card} </NavLink>
                );
              })
            ) : (
              <div className="flex flex-wrap bg-slate-700">
                <h3 className="mx-auto font-homenaje text-3xl">
                  Film atau Acara Tv <span className="text-primary">tidak ditemukan</span>
                </h3>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
export default Search;
