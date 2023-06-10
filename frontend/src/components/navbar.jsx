import Vector from "../assets/Vector.png";
import { Search } from "feather-icons-react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import jwt_decode from "jwt-decode";
import { axiosInstance } from "../api";

const Navbar = () => {
  const dataSearch = useRef(null);
  const accessToken = localStorage && localStorage.getItem("accessToken");
  const username = accessToken && jwt_decode(accessToken).username;
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState(null);

  function hamburgerClick() {
    const navMenu = document.querySelector(".nav-menu");
    const hamburger = document.querySelector("#hamburger");
    navMenu.classList.toggle("lg:hidden");
    hamburger.classList.toggle("hamburger-active");
  }
  const getAvatar = async (username, accessToken) =>
    await axiosInstance.get("http://localhost:3001/getProfile", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        username,
      },
    });

  useEffect(() => {
    if (username && accessToken) {
      getAvatar(username, accessToken).then((result) => {
        setAvatar(result.data[0].image);
      });
    }
  }, [username, accessToken]);

  function searchInput() {
    const formSearch = document.querySelector(".form-search");
    formSearch.classList.toggle("hidden");
  }
  function handleSearchClick() {
    navigate(`/search?q=${dataSearch.current.value}`);
  }

  return (
    <section className="absolute z-10 flex w-full items-center bg-transparent text-white">
      <div className="container py-7">
        <div className="relative flex items-center justify-between">
          <NavLink to="/" className="flex grow items-center">
            <img src={Vector} className="inline-block h-10 w-10" alt="brand" />
            <h3 className="inline font-frenchCanon text-3xl">Bajakmovie</h3>
          </NavLink>

          <div className="hidden items-center px-4 lg:flex">
            <button
              id="hamburger"
              type="button"
              className="block"
              onClick={hamburgerClick}
            >
              <span className="hamburger-line origin-top-left"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line origin-bottom-left"></span>
            </button>
          </div>

          {/* Yang bawah ini disembunyikan terlebih dahulu */}

          <nav className="nav-menu z-10 flex grow items-center lg:absolute lg:right-4 lg:top-20 lg:hidden lg:w-2/3 lg:max-w-lg lg:flex-col lg:items-start lg:rounded-lg lg:bg-dark lg:py-8 lg:pl-8">
            <NavLink
              to="/" className={({ isActive }) =>
                `nav-link border-r border-gray  ${isActive ? "text-primary" : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                `nav-link border-r border-gray ${isActive ? "text-primary" : ""}`
              }
            >
              Movies
            </NavLink>
            <NavLink
              to="/tv-shows"
              className={({ isActive }) =>
                `nav-link ${isActive ? "text-primary" : ""}`
              }
            >
              Tv Show
            </NavLink>

            <button
              className="ms-auto cursor-pointer border-r border-gray px-9 lg:border-none"
              id="search"
              onClick={searchInput}
            >
              <Search />
            </button>

            {/* Span search */}
            <div className="form-search absolute right-5 top-14 hidden rounded-md bg-dark p-4 font-imprima shadow-lg lg:top-64">
              <input
                className="w-72 border-2 border-secondary bg-dark px-4 py-2 uppercase tracking-[2px]"
                ref={dataSearch}
                placeholder="Cari film kamu"
              />
              <button
                className="ms-4 bg-primary px-4 py-2 font-bold uppercase tracking-[2px] text-black"
                onClick={handleSearchClick}
              >
                cari
              </button>
            </div>
            <div>
              {username ? (
                <Link
                  to="/dashboard"
                  className="ms-6 inline-block h-[37px] w-[37px] rounded-full outline outline-1 outline-secondary hover:outline-2 focus:outline-2 lg:ms-0"
                >
                  <img
                    src={`http://localhost:3001/images/${avatar ?? `user.png`}`}
                    alt={avatar}
                    className="h-full w-full rounded-full object-cover"
                  />
                </Link>
              ) : (
                <NavLink
                  to="/login"
                  className="mx-auto ms-6 block w-24 cursor-pointer rounded-full border-2 border-secondary p-2 text-center font-imprima uppercase transition duration-300 ease-in-out hover:bg-secondary hover:text-black focus:bg-secondary lg:mt-3"
                >
                  sign in
                </NavLink>
              )}
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};
export default Navbar;
