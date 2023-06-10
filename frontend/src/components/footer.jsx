import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] py-16 font-imprima text-white">
      <div className="container">
        <div className="flex flex-wrap">
          <p className="mx-auto w-full text-[19px]/[25px] px-6">
            Di Bajakmovie, kami bangga menjadi tujuan utama bagi para pecinta
            film dan acara TV dari semua kalangan. Dengan kerja sama eksklusif
            dengan studio-studio film ternama seperti Marvel, Disney, Star Wars,
            DC, dan banyak lagi, kami menawarkan pengalaman streaming yang tak
            tertandingi secara GRATIS! <br />
            Apa yang membedakan Bajakmovie dari
            platform lainnya? Nama kami sendiri menggambarkan segalanya - bajak
            movie! Kami tidak hanya menawarkan konten film terbaik, tetapi kami
            juga menyediakan semuanya secara gratis. Tidak ada lagi kekhawatiran
            tentang biaya berlangganan atau pembayaran per tayang. Nikmati akses
            tak terbatas ke ribuan film blockbuster, serial TV seru, dan acara
            eksklusif hanya dengan beberapa klik.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap">
          <nav className="mx-auto">
            <ul className="flex">
              <li>
                <NavLink
                  to="/"
                  className="cursor-pointer border-r border-gray px-9 hover:text-primary"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/movies"
                  className="cursor-pointer border-r border-gray px-9 hover:text-primary"
                >
                  Movie
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/tv-shows"
                  className="cursor-pointer px-9 hover:text-primary"
                >
                  Tv Show
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
