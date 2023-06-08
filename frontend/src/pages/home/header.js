
import { Icon } from '@iconify/react';
function Header() {
    return(
        <header className="text-white bg-cover bg-no-repeat bg-center" style={{
            backgroundImage: `url('/img/LANDING bg.png')`,
        }}>
           
            <div className="container pt-28 flex h-screen items-center">
                <div className="flex flex-wrap items-center">
                    <div className="w-full px-4 mb-10">
                    <h3 className="font-frenchCanon text-secondary text-3xl tracking-widest">
                        Bajakmovie
                    </h3>
                    <h1 className="font-homenaje text-6xl mt-4">
                        Hiburan <span className="text-secondary">Tanpa Batas</span>
                    </h1>
                    <h1 className="font-homenaje text-6xl  mt-4">
                    Film, Acara TV, & Sebagainya 
                    </h1>
                    <ul className="mt-4 flex text-white gap-x-6 font-imprima">
                        <li className="bg-white text-black px-1">Movie</li>
                        <li className="border px-1">HD</li>
                        <li>Action, Drama</li>
                        <li className="flex items-center"><Icon icon='clarity:date-line' className="text-primary"/> <span className="ms-4">2023</span></li>
                    </ul>
                    <button className="border-2 border-primary rounded-full bg-darkness mt-9 uppercase flex items-center p-4 hover:bg-primary transition">
                    <Icon icon="ph:play-fill" /> <span className="ms-4">play now</span> 
                    </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;