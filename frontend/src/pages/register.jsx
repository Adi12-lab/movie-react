import Vector from "../assets/Vector.png";
import BackButton from "../components/backButton";
import PasswordInput from "../components/passwordInput";
import { axiosInstance } from "../api";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(null);
  const username = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const isLogin = localStorage && localStorage.getItem("accessToken");

  useEffect(() => {
    if (isLogin) navigate("/dashboard");
  }, []);

  const handleSubmit = async () => {
    setIsError(null);
    if (password.current.value !== confirmPassword.current.value) {
      setIsError("Password tidak sama");
      return;
    }
    try {
      await axiosInstance.post("/register", {
        username: username.current.value,
        password: password.current.value,
      });
      Swal.fire(
        "Berhasil",
        "Selamat registrasi anda berhasil, silahkan login",
        "success"
      );

      navigate("/login");
    } catch (err) {
      setIsError(err.response.data);
    }
  };
  return (
    <section
      className="bg-cover"
      style={{ backgroundImage: "url(/img/registerBackground.jpg)" }}
    >
      <div className="container py-20">
        <div className="flex flex-wrap">
          <BackButton />
        </div>
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
              <h3 className="font-gurajada text-5xl">Registrasi</h3>
              {isError && (
                <h5 className="mt-3 text-center font-frenchCanon text-xl text-red-500">
                  {isError}
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
              <div className="mt-6">
                <label className="mb-3 block w-full">Konfirmasi password</label>
                <PasswordInput
                  ref={confirmPassword}
                  className="w-full rounded-lg border-2 border-secondary bg-dark px-4 py-2 tracking-[1.2px] focus:outline-none"
                />
              </div>

              <button
                className="mt-10 w-full rounded-lg bg-primary font-gurajada text-[28px] text-black transition hover:bg-yellow-400 focus:bg-yellow-400 "
                type="button"
                onClick={handleSubmit}
              >
                Sign up
              </button>
              <p className="mt-5 text-green-600">
                Sudah punya akun ?{" "}
                <Link
                  to="/login"
                  className="ms-1 cursor-pointer text-emerald-400 hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
