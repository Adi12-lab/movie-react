/* eslint-disable react/prop-types */
import BackButton from "../../../components/backButton";
import { Icon } from "@iconify/react";
import PlayButton from "../../../components/playButton";

function HeaderTv(props) {
  const genres = props.genres || []; // Tetapkan genres sebagai array kosong jika props.genres tidak terdefinisi

  return (
    <header
      className="w-1440 backdrop-header bg-cover bg-no-repeat pb-24 text-white"
      style={{ backgroundImage: `url('/img/darkBackground.jpg')` }}
    >
      <div className="container pt-32 lg:px-4">
        <BackButton className="mt-6" />
        <div className="mt-12 flex gap-x-12 lg:block">
          <img
            src={props.image}
            alt={props.name}
            className="w-[330px] lg:mx-auto lg:w-[300px]"
          />

          <div className="lg:mt-4">
            <h3 className="font-gurajada text-3xl uppercase tracking-[8.5px] text-secondary">
              {props.status}
            </h3>
            <h2 className="font-gurajada text-8xl lg:text-[64px]">
              {props.name},
            </h2>
            <ul className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 font-imprima">
              <li className="bg-white px-1 text-black">Tv Show</li>
              <li className="border px-1">HD</li>
              <li className="text-xl">
                {genres.map((item) => `${item.name}, `)}
              </li>
              <li>
                <p className="ms-auto flex items-center">
                  <Icon icon="subway:time-2" className="text-primary" />
                  <span className="ms-2 text-xs">{props.duration} min</span>
                </p>
              </li>
              <li>
                <p className="flex items-center">
                  <Icon
                    icon="clarity:date-line"
                    className="text-[18px] text-primary"
                  />
                  <span className="ms-2 text-xl">{props.release_date}</span>
                </p>
              </li>
            </ul>
            <div className="mt-6 flex h-[112px] w-[484px] items-center justify-evenly rounded-[19.31px] bg-[#3F3F3F]/70 font-imprima backdrop-blur-[2px] lg:w-full">
              <button>
                <Icon icon="material-symbols:share" className="text-[46.5px]" />
                Share
              </button>
              <span className="">
                Rate The Show
                <span className="ms-2 flex items-center">
                  <Icon
                    icon="material-symbols:star"
                    className="text-[33.56px]"
                  />
                  <span className="text-3xl">{props.rate}</span>
                </span>
              </span>
              <PlayButton
                className="mb-9 mt-9 flex h-10 w-[131px] items-center rounded-full border-2 border-primary bg-darkness px-3 py-2 uppercase transition hover:bg-primary"
                spanClass="ms-2"
              />
            </div>
            <p className="mt-6 w-[839.5px] font-gurajada text-2xl tracking-[0.09em] lg:w-full">
              {props.overview}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderTv;
