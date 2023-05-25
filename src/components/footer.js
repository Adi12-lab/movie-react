
const Footer = () => {
    return (
        <footer className="bg-[#1E1E1E] py-16 text-white font-imprima">
            <div className="container">
                <div className="flex flex-wrap mt-16">
                    <p className=" w-[1130px] h-[130px] mx-auto text-[22px]/[25px] md:text-lg">Filmagnet is an online movie streaming platform that offers pirated content that is not released. It has a huge collection of latest movies and films that still not available on the market and YouTube. You can watch and download all contents free of costs, but they are illegal, so you have to take some precautions. It is not available in all countries so you can use VPN and choose a location with access to Filmagnet. Here, we will discuss the Filmagnet.</p>
                </div>
                <div className="flex flex-wrap mt-3 md:mt-32">
                    <nav className="mx-auto">
                        <ul className="flex">
                            <li>
                                <a className='border-r border-gray px-9 cursor-pointer hover:text-primary'>Home</a>
                            </li>
                            <li>
                                <a className='border-r border-gray px-9 cursor-pointer hover:text-primary'>Movie</a>
                            </li>
                            <li>
                                <a className='border-r border-gray px-9 cursor-pointer hover:text-primary'>Tv Show</a>
                            </li>
                            <li>
                                <a className='px-9 cursor-pointer hover:text-primary'>Premium</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer;