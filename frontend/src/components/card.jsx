import { Icon } from '@iconify/react';

const Card = (props) => {
    return (
        <>
            <article className={`text-white font-imprima w-[300px]`}>
                    <img src={`${process.env.REACT_APP_BASEIMGURL}/${props.poster_path}`} alt ={props.title} className="mb-7"/>
                <div className="flex flex-wrap text-lg">
                    <h6>{props.title}</h6>
                    <span className="text-primary ms-auto w-full">{props.release_date}</span>
                </div>
                <div className="flex flex-wrap mt-3">
                    <span className="border px-1">HD</span>

                    <p className="flex items-center ms-auto">
                        <Icon icon="material-symbols:language" className="text-secondary" />
                        <span className="ms-2 text-lg uppercase">{props.language}</span>
                    </p>
                    <p className="flex items-center ms-7">
                        <Icon icon="ic:round-star" className="text-primary"/>   
                        <span className="ms-2 text-xs">{props.vote_average}</span>
                    </p>
                </div>
               
            </article>
        </>
    )
}

export default Card