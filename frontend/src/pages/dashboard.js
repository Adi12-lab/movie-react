import Dc from '../assets/dc.png'
import { Icon } from '@iconify/react'
import PasswordInput from '../components/passwordInput'
import BackButton from '../components/backButton'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
const Dashboard = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken')
        console.log(accessToken)
        if (!accessToken) {
            navigate('/login');
        }
    }, [navigate])
    return (
        <main className="bg-dark">
            <div className="container text-white py-24">
                <BackButton />
                <h1 className='text-6xl font-gurajada text-end mb-4'>Dashboard</h1>
                <h2 className="font-homenaje text-3xl border-l-4 border-secondary pl-7">Profil saya</h2>
                <div className="flex mt-3 gap-x-6">
                    <div className='mt-9 w-[500px]'>
                        <img src={Dc} alt='foto profil.png' className='w-full' />
                        <span className='bg-primary p-4 mt-8 block font-frenchCanon uppercase text-center text-black font-bold border-4 border-orange-600 rounded-full shadow-lg'>Premium</span>

                        <span className='mt-8 block font-frenchCanon uppercase text-center text-primary'>Username</span>
                    </div>
                    <div className='w-full'>
                        <form className='flex flex-col'>
                            <div className="mt-6 grid grid-cols-2 font-imprima gap-6">
                                <div>
                                    <label className="block w-full mb-3">Nama depan</label>
                                    <input className='border-2 border-secondary bg-stone-800 px-4 py-2 w-full focus:outline-none' />
                                </div>
                                <div>
                                    <label className="block w-full mb-3">Nama belakang</label>
                                    <input className='border-2 border-secondary bg-stone-800 px-4 py-2 w-full focus:outline-none' />
                                </div>
                                <div>
                                    <label className="block w-full mb-3">Jenis kelamin</label>
                                    <select className="border-2 border-secondary bg-stone-800 px-4 py-[10px] w-full focus:outline-none text-white">
                                        <option></option>
                                        <option value='L'>Laki - laki</option>
                                        <option value='P'>Perempuan</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block w-full mb-3">No telepon</label>
                                    <input className='border-2 border-secondary bg-stone-800 px-4 py-2 w-full focus:outline-none' type='number' />
                                </div>
                                <div className='col-span-2'>
                                    <label className="block w-full mb-3">Alamat</label>
                                    <textarea className='w-full border-2 border-secondary bg-stone-800 py-2 focus:outline-none px-4 h-40'></textarea>
                                </div>
                            </div>
                            <button className='bg-primary py-2 px-4 w-[100px] text-black font-gurajada text-3xl mx-auto mt-3 flex items-center'>
                                <span>
                                    Save
                                </span>
                                <Icon icon="material-symbols:save-sharp" className='ms-2' />
                            </button>

                        </form>
                    </div>
                </div>
                <h1 className='mt-10 border-l-4 border-red-600 pl-7 font-homenaje text-3xl'>Ganti password</h1>
                <form className='flex flex-col'>
                    <div className='mt-9 grid gap-y-6 font-imprima'>
                        <div>
                            <label className="block w-full mb-3">Password lama</label>
                            <PasswordInput className='border-2 border-secondary bg-stone-800 px-4 py-2 w-full focus:outline-none tracking-[1.2px]' />
                        </div>
                        <div>
                            <label className="block w-full mb-3">Password baru</label>
                            <PasswordInput className='border-2 border-secondary bg-stone-800 px-4 py-2 w-full focus:outline-none tracking-[1.2px]' />
                        </div>
                        <div>
                            <label className="block w-full mb-3">Konfirmasi password baru</label>
                            <PasswordInput className='border-2 border-secondary bg-stone-800 px-4 py-2 w-full focus:outline-none tracking-[1.2px]' />
                        </div>
                    </div>
                    <button className='bg-yellow-600 py-2 px-4 w-[100px] text-black font-gurajada text-3xl mx-auto mt-6 flex items-center'>
                        <span>
                            Save
                        </span>
                        <Icon icon="material-symbols:save-sharp" className='ms-2' />
                    </button>
                </form>
            </div>
        </main>
    )
}

export default Dashboard