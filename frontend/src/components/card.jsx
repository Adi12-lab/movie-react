/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";

const Card = (props) => {
  return (
    <>
      <article className={`w-[300px] font-imprima text-white`}>
        <img
          src={`${import.meta.env.VITE_REACT_APP_BASEIMGURL}/${
            props.poster_path
          }`}
          alt={props.title}
          className="mb-7"
        />
        <div className="flex flex-wrap text-lg">
          <h6>{props.title}</h6>
          <span className="ms-auto w-full text-primary">
            {props.release_date}
          </span>
        </div>
        <div className="mt-3 flex flex-wrap">
          <span className="border px-1">HD</span>

          <p className="ms-auto flex items-center">
            <Icon icon="material-symbols:language" className="text-secondary" />
            <span className="ms-2 text-lg uppercase">{props.language}</span>
          </p>
          <p className="ms-7 flex items-center">
            <Icon icon="ic:round-star" className="text-primary" />
            <span className="ms-2 text-xs">{props.vote_average}</span>
          </p>
        </div>
      </article>
    </>
  );
};

export default Card;
