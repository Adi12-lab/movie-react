import Vector from '../assets/Vector.png'
import {Search} from 'feather-icons-react'
const Navbar = () => {
    return(
        <div className='container py-7 flex'>
            <a>
                <img src={Vector} className='inline-block w-10 h-10'/>
                <h3 className='inline font-frenchCanon text-3xl'>Bajakmovie</h3>
            </a>
            <ul className='flex font-imprima ms-auto gap-x-9'>
                <li className='border'>
                    <a className='uppercase'>Home</a>
                </li>
                <li>
                    <a className='uppercase'>Movie</a>
                </li>
                <li>
                    <a className='uppercase'>Tv Show</a>
                </li>
                <li>
                    <a className='uppercase'>Premium</a>
                </li>
            </ul>
            <button>
                <Search />
            </button>
            <button>

            </button>
        </div>
    )
}
export default Navbar