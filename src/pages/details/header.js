import Navbar from "../../components/navbar"
import Thumbnail from '../../assets/thumbnail.png'
import BackButton from "../../components/backButton";
import { Icon } from '@iconify/react';

const Header = () => {
    return (
        <header className='w-1440 bg-no-repeat bg-cover text-white backdrop-header bg-darkness pb-24'>
            <Navbar />
            <div className="container">
                <BackButton />
                <div className="flex flex-wrap mt-20">
                    <img src={Thumbnail} />

                    <div className="ms-16 md:ms-0">
                        <h3 className="font-gurajada uppercase tracking-[8.5px] text-secondary text-3xl">Episode baru</h3>
                        <h2 className="text-8xl font-gurajada">Free Guy,</h2>
                        <ul className="flex items-center gap-x-3 font-imprima">
                            <li className="bg-white text-black px-1">Movie</li>
                            <li className="border px-1">HD</li>
                            <li className="text-xl"> Action, Drama, Adventure, Science fiction</li>
                            <li>
                                <p className="flex items-center ms-auto">
                                    <Icon icon="subway:time-2" className="text-primary" />
                                    <span className="ms-2 text-xs">130 min</span>
                                </p>
                            </li>
                            <li>
                                <p className="flex items-center">
                                    <Icon icon="clarity:date-line" className="text-primary text-[18px]" />
                                    <span className="ms-2 text-xl">2023</span>
                                </p>
                            </li>
                        </ul>
                        <div className="w-[484px] h-[112px] bg-[#3F3F3F]/70 mt-6 flex items-center justify-evenly font-imprima rounded-[19.31px] backdrop-blur-[2px]">
                            <button>
                                <Icon icon="material-symbols:share" className="text-[46.5px]" />
                                Share
                            </button>
                            <button className="">
                                Rate The Show
                                <span className="flex items-center">
                                    <Icon icon="material-symbols:star" className="text-[33.56px]"/>
                                    <span className="text-3xl">7.0</span>
                                </span>
                            </button>
                            <button className="border-2 border-primary rounded-full bg-darkness mt-9 uppercase flex items-center px-3 py-2 hover:bg-primary transition w-[131px] h-10 mb-9">
                                <Icon icon="ph:play-fill" /> <span className="ms-2">play now</span>
                            </button>
                        </div>
                        <p className="mt-6 font-gurajada text-2xl w-[839.5px] tracking-[0.09em]">
                        Ryan Reynolds as Guy / Blue Shirt Guy, a bank teller and non-player character (NPC) in Free City who is initially unaware that he is a video game character.
                        </p>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header