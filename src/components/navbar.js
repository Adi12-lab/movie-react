import Vector from '../assets/Vector.png'
import { Search } from 'feather-icons-react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    function hamburgerClick() {
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');
        navMenu.classList.toggle('md:hidden')
        navLinks.forEach(function(item) {
            item.classList.toggle('nav-link-breakpoint')
        })

    }
    function searchInput() {
        const formSearch = document.querySelector(".form-search");
        formSearch.classList.toggle("hidden");
    }

    return (
        <section className='bg-transparent w-full flex items-center z-10'>
            <div className='container py-7'>
                <div className='flex items-center justify-between relative'>

                    <a className='flex items-center grow'>
                        <img src={Vector} className='inline-block w-10 h-10' />
                        <h3 className='inline font-frenchCanon text-3xl'>Bajakmovie</h3>
                    </a>

                    <div className='flex items-center px-4 hidden md:block'>
                        <button id='hamburger' type='button' className='block' onClick={hamburgerClick}>
                            <span className='hamburger-line'></span>
                            <span className='hamburger-line'></span>
                            <span className='hamburger-line'></span>
                        </button>
                    </div>

                    {/* Yang bawah ini disembunyikan terlebih dahulu */}

                    <nav className='grow flex items-center z-10 nav-menu md:hidden md:absolute md:right-4 md:top-20 md:w-2/3 md:max-w-lg md:rounded-lg md:py-8 md:bg-dark md:flex-col '>
                        <NavLink to='/' className={({ isActive }) => `nav-link ${isActive ? 'text-primary' : ''}`}>Home</NavLink>
                        <NavLink to='/movies' className={({ isActive }) => `nav-link ${isActive ? 'text-primary' : ''}`}>Movies</NavLink>
                        <NavLink to='/tv-shows' className={({ isActive }) => `nav-link ${isActive ? 'text-primary' : ''}`}>Tv Show</NavLink>

                        <button className='border-r border-gray px-9 cursor-pointer ms-auto' id='search' onClick={searchInput}>
                            <Search />
                        </button>
                        {/* Span search */}
                        <span className='bg-dark p-4 font-homenaje rounded-md absolute right-5 top-14 hidden form-search md:top-64'>
                            <input className='border-2 border-secondary bg-dark px-4 py-2 uppercase w-72 tracking-[2px]' placeholder='Cari film kamu'/>
                            <button className='bg-primary px-4 py-2 text-black font-bold uppercase ms-4 tracking-[2px]'>cari</button>
                        </span>
                        <NavLink to='/login' className='border-2 border-secondary w-24 p-2 rounded-full uppercase ms-6 cursor-pointer font-imprima text-center'>
                            sign in
                        </NavLink>
                    </nav>

                </div>
            </div>
        </section>
    )

}
export default Navbar