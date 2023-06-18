/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";
const MainTv = ({ episode, seasons }) => {
  const baseImgUrl = import.meta.env.VITE_REACT_APP_BASEIMGURL;
  return (
    <main className="bg-darkness py-8 text-white">
      <div className="container lg:px-4">
        <div className="flex flex-wrap">
          <h3 className="inline-block border-l-4 border-secondary pl-6 font-homenaje text-3xl">
            Episode terbaru
          </h3>
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-10">
          <button
            className="relative w-[450px] cursor-pointer overflow-hidden rounded-2xl"
            type="button"
          >
            <img
              src={`${baseImgUrl}/${episode.still_path}`}
              alt={episode.id}
              className="w-full"
            />
            <div className="bg-grad absolute bottom-0 w-full px-7 py-2">
              <h5 className="font-imprima text-[18px]">
                Epsiode {episode.episode_number}
              </h5>
              <p className="text-[15px] text-[#78828A]">{episode.name}</p>
            </div>
          </button>
          <div className="w-[500px]">
            <p className="font-imprima text-lg">{episode.overview}</p>
          </div>
        </div>

        <h3 className="mt-12 inline-block border-l-4 border-secondary pl-6 font-homenaje text-3xl">
          Daftar Season
        </h3>
        <div className="mt-4 flex flex-wrap">
          {seasons &&
            seasons.map((item, i) => {
              if (item.poster_path !== null) {
                return (
                  <div
                    className="mt-8 flex flex-wrap gap-10 border border-secondary bg-dark p-4"
                    key={i}
                  >
                    <div className="w-64 lg:mx-auto">
                      <img
                        src={`${baseImgUrl}${item.poster_path}`}
                        alt={item.name}
                      />
                    </div>
                    <div className="w-[840px] lg:w-full">
                      <h4 className="font-frenchCanon text-[35px] uppercase tracking-[5px] text-primary">
                        {item.name}
                      </h4>

                      {item.air_date && (
                        <p className="flex items-center gap-x-4">
                          <Icon
                            icon="clarity:date-line"
                            className="text-[18px] text-primary"
                          />
                          <span className="font-imprima">{item.air_date}</span>
                        </p>
                      )}
                      {item.episode_count && (
                        <p className="mt-4 flex items-center gap-x-4">
                          <Icon
                            icon="mdi:film-outline"
                            className="text-[18px] text-primary"
                          />
                          <span className="font-imprima uppercase">
                            {item.episode_count} episode
                          </span>
                        </p>
                      )}
                      <p className="mt-4 font-imprima">{item.overview}</p>
                    </div>
                  </div>
                );
              }
              return "";
            })}
        </div>
      </div>
    </main>
  );
};
export default MainTv;
