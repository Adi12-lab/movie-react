import BackButton from "../../../components/backButton";
import { Icon } from '@iconify/react';
import PlayButton from '../../../components/playButton'

function HeaderTv(props) {
    const genres = props.genres || []; // Tetapkan genres sebagai array kosong jika props.genres tidak terdefinisi

    return (
        <header className='w-1440 bg-no-repeat bg-cover text-white backdrop-header pb-24' style={{ backgroundImage: `url('/img/darkBackground.jpg')` }}>

            <div className="container pt-32">
                <BackButton className='mt-6' />
                <div className="flex mt-12 gap-x-12 lg:block">
                    <img src={props.image} alt={props.name} className="w-[330px] lg:w-[300px] lg:mx-auto" />

                    <div className="lg:mt-4">
                        <h3 className="font-gurajada uppercase tracking-[8.5px] text-secondary text-3xl">{props.status}</h3>
                        <h2 className="text-8xl font-gurajada lg:text-[64px]">{props.name},</h2>
                        <ul className="flex items-center gap-x-3 font-imprima flex-wrap gap-y-2 mt-3">
                            <li className="bg-white text-black px-1">Tv Show</li>
                            <li className="border px-1">HD</li>
                            <li className="text-xl">
                                {
                                    genres.map((item, i) => `${item.name}, `)
                                }
                            </li>
                            <li>
                                <p className="flex items-center ms-auto">
                                    <Icon icon="subway:time-2" className="text-primary" />
                                    <span className="ms-2 text-xs">{props.duration} min</span>
                                </p>
                            </li>
                            <li>
                                <p className="flex items-center">
                                    <Icon icon="clarity:date-line" className="text-primary text-[18px]" />
                                    <span className="ms-2 text-xl">{props.release_date}</span>
                                </p>
                            </li>
                        </ul>
                        <div className="w-[484px] h-[112px] bg-[#3F3F3F]/70 mt-6 flex items-center justify-evenly font-imprima rounded-[19.31px] backdrop-blur-[2px] lg:w-full">
                            <button>
                                <Icon icon="material-symbols:share" className="text-[46.5px]" />
                                Share
                            </button>
                            <span className="">
                                Rate The Show
                                <span className="flex items-center ms-2">
                                    <Icon icon="material-symbols:star" className="text-[33.56px]" />
                                    <span className="text-3xl">{props.rate}</span>
                                </span>
                            </span>
                            <PlayButton className="border-2 border-primary rounded-full bg-darkness mt-9 uppercase flex items-center px-3 py-2 hover:bg-primary transition w-[131px] h-10 mb-9" spanClass='ms-2' />
                        </div>
                        <p className="mt-6 font-gurajada text-2xl w-[839.5px] tracking-[0.09em] lg:w-full">
                            {props.overview}
                        </p>
                    </div>
                </div>

            </div>


        </header>
    )
}

export default HeaderTv


