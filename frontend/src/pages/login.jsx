import Vector from "../assets/Vector.png";
import BackButton from "../components/backButton";
import PasswordInput from "../components/passwordInput";
import { axiosInstance } from "../api";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const username = useRef(null);
  const password = useRef(null);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      return navigate("/dashboard");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/login", {
        username: username.current.value,
        password: password.current.value,
      });
      const { accessToken, refreshToken } = response.data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      setIsError(false);

      navigate("/dashboard");
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <section
      className="bg-cover h-screen"
      style={{ backgroundImage: "url(/img/loginBackground.jpg)" }}
    >
      <div className="container py-20">
        <BackButton />
        <div>
          <div className="mt-14 flex w-full flex-wrap justify-center">
            <div className="mb-8 flex w-full items-center justify-center">
              <img
                src={Vector}
                className="inline-block h-10 w-10"
                alt="brand"
              />
              <h1 className="font-frenchCanon text-3xl text-white">
                Bajakmovie
              </h1>
            </div>
            <form className="w-[600px] rounded-2xl bg-[#1E1E1E] px-8 py-10 font-imprima text-white drop-shadow-lg">
              <h3 className="font-gurajada text-5xl">Login ke akun anda</h3>
              {isError && (
                <h5 className="mt-3 text-center font-frenchCanon text-xl text-red-500">
                  Username / password salah
                </h5>
              )}
              <div className="mt-6">
                <label className="mb-3 block w-full">Username</label>
                <input
                  ref={username}
                  className="w-full rounded-lg border-2 border-secondary bg-dark px-4 py-2 tracking-[1.2px] focus:outline-none"
                  autoFocus
                />
              </div>
              <div className="mt-6">
                <label className="mb-3 block w-full">Password</label>
                <PasswordInput
                  ref={password}
                  className="w-full rounded-lg border-2 border-secondary bg-dark px-4 py-2 tracking-[1.2px] focus:outline-none"
                />
              </div>

              <button
                className="mt-10 w-full rounded-lg bg-primary font-gurajada text-[28px] text-black transition hover:bg-yellow-400 focus:bg-yellow-400 "
                type="button"
                onClick={handleSubmit}
              >
                Sign in
              </button>
              <p className="mt-5 text-green-600">
                Belum punya akun ?{" "}
                <Link
                  to="/register"
                  className="ms-1 cursor-pointer text-emerald-400 hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
