import Vector from '../assets/Vector.png';
import BackButton from '../components/backButton';
import PasswordInput from '../components/passwordInput';
import { axiosInstance } from '../api';
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()
    const [isExist, setIsExist] = useState(false)
    const [isNotMatch, setIsNotMatch] = useState(false)
    const username = useRef(null)
    const password = useRef(null)
    const confirmPassword = useRef(null)

    const handleSubmit = async() => {
        if(password.current.value !== confirmPassword.current.value) setIsNotMatch(true)
        else setIsNotMatch(false)
        
        try {
            await axiosInstance.post('http://localhost:3002/register', {
                username: username.current.value, 
                password: password.current.value
            })
            setIsExist(false)
            navigate('/login')
        } catch {
            setIsExist(true)
        }
    }
    return (
        <section className='bg-cover' style={{ backgroundImage: 'url(/img/loginBackground.jpg)' }}>

            <div className="container py-20">
                <div className='flex flex-wrap'>
                    <BackButton />
                </div>
                <div>
                    <div className='flex flex-wrap justify-center w-full mt-14'>
                        <div className="w-full flex items-center justify-center mb-8">
                            <img src={Vector} className='inline-block w-10 h-10' alt='brand' />
                            <h1 className="font-frenchCanon text-3xl text-white">Bajakmovie</h1>
                        </div>
                        <form className="w-[600px] bg-[#1E1E1E] text-white font-imprima px-8 py-10 rounded-2xl drop-shadow-lg">
                            <h3 className="font-gurajada text-5xl">Registrasi</h3>
                            {isNotMatch && <h5 className='text-center text-red-500 text-xl mt-3 font-frenchCanon'>Konfirmasi password tidak sesuai</h5>}
                            {isExist && <h5 className='text-center text-red-500 text-xl mt-3 font-frenchCanon'>Username telah dipakai</h5>}
                            <div className="mt-6">
                                <label className="block w-full mb-3">Username</label>
                                <input ref={username} className='border-2 border-secondary bg-dark px-4 py-2 w-full rounded-lg focus:outline-none tracking-[1.2px]' autoFocus />
                            </div>
                            <div className="mt-6">
                                <label className="block w-full mb-3">Password</label>
                                <PasswordInput ref={password} className='border-2 border-secondary bg-dark px-4 py-2 w-full rounded-lg focus:outline-none tracking-[1.2px]' />
                            </div>
                            <div className="mt-6">
                                <label className="block w-full mb-3">Konfirmasi password</label>
                                <PasswordInput ref={confirmPassword} className='border-2 border-secondary bg-dark px-4 py-2 w-full rounded-lg focus:outline-none tracking-[1.2px]' />
                            </div>

                            <button className="bg-primary text-black w-full text-[28px] font-gurajada rounded-lg mt-10" type='button' onClick={handleSubmit}>Sign up</button>
                            <p className='text-green-600 mt-5'>Sudah punya akun ? <Link className='text-emerald-400 ms-1 cursor-pointer hover:underline'>Sign in</Link></p>

                        </form>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register