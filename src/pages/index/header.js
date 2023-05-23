import "../../assets/style.css"
import Navbar from "../../components/navbar"
function Header() {
    return(
        <header className="text-white" style={{
            backgroundImage: `url('/img/LANDING bg.png')`,
        }}>
            <Navbar />
            <div className="container flex h-screen items-center">
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
                    <ul className="mt-4 flex text-white gap-x-6">
                        <li className="bg-white text-black px-1">Movie</li>
                        <li className="border px-1">HD</li>
                        <li>Action, Drama</li>
                        <li>2023</li>
                    </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;