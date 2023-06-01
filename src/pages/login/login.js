import Vector from '../../assets/Vector.png';
import BackButton from '../../components/backButton';
import PasswordInput from '../../components/passwordInput';

const Login = () => {
    return (
        <section className='bg-cover' style={{backgroundImage: 'url(/img/loginBackground.jpg)'}}>
                
            <div className="container h-screen pt-20">
                <div className='flex flex-wrap'>
                <BackButton/>
                </div>
                <div>
                    <div className='flex flex-wrap justify-center w-full mt-14'>
                        <div className="w-full flex items-center justify-center mb-8">
                            <img src={Vector} className='inline-block w-10 h-10' alt='brand'/>
                            <h1 className="font-frenchCanon text-3xl text-white">Bajakmovie</h1>
                        </div>
                        <div className="w-[600px] h-[430px] bg-[#1E1E1E] text-white font-imprima px-8 py-10 rounded-2xl drop-shadow-lg">
                            <h3 className="font-gurajada text-5xl">Login ke akun anda</h3>

                            <div className="mt-6">
                                <label className="block w-full mb-3">Username</label>
                                <input className='border-2 border-secondary bg-dark px-4 py-2 w-full rounded-lg focus:outline-none tracking-[1.2px]' autoFocus/>
                            </div>
                            <div className="mt-6">
                                <label className="block w-full mb-3">Password</label>
                                <PasswordInput className='border-2 border-secondary bg-dark px-4 py-2 w-full rounded-lg focus:outline-none tracking-[1.2px]' />
                            </div>
                            <div className="mt-10">
                                <button className="bg-primary text-black w-full text-[28px] font-gurajada rounded-lg">Sign in</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login