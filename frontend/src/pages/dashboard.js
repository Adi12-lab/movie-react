import Dc from '../assets/dc.png'
import { Icon } from '@iconify/react'
import PasswordInput from '../components/passwordInput'
import BackButton from '../components/backButton'
import {useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import jwt_decode from 'jwt-decode'
import { axiosInstance } from '../api'

const Dashboard = () => {
    const navigate = useNavigate()
    const first_name = useRef(null)
    const last_name = useRef(null)
    const phone = useRef(null)
    const gender = useRef(null)
    const address = useRef(null)
    const accessToken =localStorage &&  localStorage.getItem('accessToken')
    const refreshToken = localStorage && localStorage.getItem('refreshToken')
    const username = jwt_decode(refreshToken).username

    const [userData, setUserData] = useState([])
    const getProfile = async (accessToken, username) => {
        const result = await axiosInstance.get("http://localhost:3001/getProfile", {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            params: {
                username
            }
        });
        return result;
    };
    
    useEffect(() => {
        if (!accessToken) {
            navigate('/login');
        } else {
            
            getProfile(accessToken,username).then((result) => {
                setUserData(result.data[0])
            })
        }
    }, [])

    const handleLogout = async (e) => {
        try {
            await axiosInstance.delete('http://localhost:3002/logout', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("refreshToken")}`,
                },
            })
            localStorage.removeItem("accessToken")
            localStorage.removeItem("refreshToken")
            navigate("/login")
        } catch(err) {
            console.log(err)
        }
    }
    const handleSubmit =async (e) => {
        e.preventDefault()
    
        try {
            await axiosInstance.post("http://localhost:3001/insertProfile", {
                username,
                first_name: first_name.current.value,
                last_name: last_name.current.value,
                phone: phone.current.value,
                gender: gender.current.value,
                address: address.current.value
            },{
           
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }

            })
        } catch(err) {
            console.log(err)
        }
    } 
  
    return (
        <main className="bg-dark">
            <div className="container text-white py-20">
                <button className='bg-red-500 px-3 py-2 rounded-lg mb-7 flex items-center font-imprima text-xl' type='button' onClick={handleLogout} ><Icon icon="solar:logout-2-outline" /> <span className='ms-3'>Logout</span></button>
                <BackButton/>

                <h1 className='text-6xl font-gurajada text-end mb-4'>Dashboard</h1>
                <h2 className="font-homenaje text-3xl border-l-4 border-secondary pl-7">Profil {userData.username}</h2>
                <div className="flex mt-3 gap-x-6">
                    <div className='mt-9 w-[500px]'>
                        <img src={Dc} alt='foto profil.png' className='w-full' />
                        <span className='bg-primary p-4 mt-8 block font-frenchCanon uppercase text-center text-black font-bold border-4 border-orange-600 rounded-full shadow-lg'>Premium</span>

                 
                    </div>
                    <div className='w-full'>
                        <form className='flex flex-col' onSubmit={handleSubmit}>
                            <div className="mt-6 grid grid-cols-2 font-imprima gap-6">
                                <div>
                                    <label className="block w-full mb-3">Nama depan</label>
                                    <input ref={first_name} className='border-2 border-secondary bg-stone-800 px-4 py-2 w-full focus:outline-none' defaultValue={userData.first_name} />
                                </div>
                                <div>
                                    <label className="block w-full mb-3">Nama belakang</label>
                                    <input ref={last_name} className='border-2 border-secondary bg-stone-800 px-4 py-2 w-full focus:outline-none' defaultValue={userData.last_name} />
                                </div>
                                <div>
                                    <label className="block w-full mb-3">Jenis kelamin</label>
                                    <select ref={gender} className="border-2 border-secondary bg-stone-800 px-4 py-[10px] w-full focus:outline-none text-white">
                                        <option></option>
                                        <option value='L' selected={userData.gender === 'L' ? 'selected' : ''}>Laki - laki</option>
                                        <option value='P' selected={userData.gender === 'P' ? 'selected' : ''}>Perempuan</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block w-full mb-3">No telepon</label>
                                    <input ref={phone} className='border-2 border-secondary bg-stone-800 px-4 py-2 w-full focus:outline-none' type='number' defaultValue={userData.phone} />
                                </div>
                                <div className='col-span-2'>
                                    <label className="block w-full mb-3">Alamat</label>
                                    <textarea ref={address} className='w-full border-2 border-secondary bg-stone-800 py-2 focus:outline-none px-4 h-40' defaultValue={userData.address}></textarea>
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