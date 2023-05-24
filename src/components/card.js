import Test from "../assets/test.png"
import { Icon } from '@iconify/react';

const Card = () => {
    return (
        <>
            <article className="text-white font-imprima">
                    <img src={Test} className="mb-7"/>
                <div className="flex flex-wrap text-lg">
                    <h6>Free Guy</h6>
                    <span className="text-primary ms-auto">2023</span>
                </div>
                <div className="flex flex-wrap mt-3">
                    <span className="border px-1">HD</span>
                    <p className="flex items-center ms-auto">
                        <Icon icon="subway:time-2" className="text-primary"/>
                        <span className="ms-2 text-xs">130 min</span>
                    </p>
                    <p className="flex items-center ms-7">
                        <Icon icon="ic:round-star" className="text-primary"/>   
                        <span className="ms-2 text-xs">7.0</span>
                    </p>
                </div>
               
            </article>
        </>
    )
}

export default Card