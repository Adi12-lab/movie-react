import Vector from '../assets/Vector.png'
import { Search } from 'feather-icons-react'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'


const Navbar = () => {
    function hamburgerClick() {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('hidden')
    }

    return (
        <section className='bg-transparent w-full flex items-center z-10'>
            <div className='container py-7'>
                <div className='flex items-center justify-between relative'>

                    <a className='flex items-center grow'>
                        <img src={Vector} className='inline-block w-10 h-10' />
                        <h3 className='inline font-frenchCanon text-3xl'>Bajakmovie</h3>
                    </a>

                    <div className='flex items-center px-4 hidden'>
                        <button id='hamburger' type='button' className='block absolute right-4' onClick={hamburgerClick}>
                            <span className='hamburger-line'></span>
                            <span className='hamburger-line'></span>
                            <span className='hamburger-line'></span>
                        </button>
                    </div>

                    {/* Yang bawah ini disembunyikan terlebih dahulu */}

                    <nav className='grow flex items-center'>
                        <NavLink to='/' className={({ isActive }) => `nav-link ${isActive ? 'text-primary' : ''}`}>Home</NavLink>
                        <NavLink to='/movies' className={({ isActive }) => `nav-link ${isActive ? 'text-primary' : ''}`}>Movies</NavLink>
                        <NavLink to='/tv' className={({ isActive }) => `nav-link ${isActive ? 'text-primary' : ''}`}>Tv Show</NavLink>

                        <button className='border-r border-gray px-9 cursor-pointer ms-auto'>
                            <Search />
                        </button>
                        <button className='border-2 border-secondary w-24 p-2 rounded-full uppercase ms-6 cursor-pointer font-imprima'>
                            sign in
                        </button>
                    </nav>

                </div>
            </div>
        </section>
    )

}
export default Navbar