import { Icon } from "@iconify/react";
import PlayButton from "../../components/playButton";
function Header() {
  return (
    <header
      className="bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url('/img/LANDING bg.png')`,
      }}
    >
      <div className="container flex h-screen items-center pt-28 lg:px-4">
        <div className="flex flex-wrap items-center">
          <div className="mb-10 w-full px-4">
            <h3 className="font-frenchCanon text-3xl tracking-widest text-secondary">
              Bajakmovie
            </h3>
            <h1 className="mt-4 font-homenaje text-6xl lg:text-5xl">
              Hiburan <span className="text-secondary">Tanpa Batas</span> <br />
            </h1>
            <h1 className="mt-4 font-homenaje text-6xl lg:text-5xl">
              Film, Acara TV, & Sebagainya
            </h1>
            <ul className="mt-4 flex gap-x-6 font-imprima text-white">
              <li className="bg-white px-1 text-black">Movie</li>
              <li className="border px-1">HD</li>
              <li>Action, Drama</li>
              <li className="flex items-center">
                <Icon icon="clarity:date-line" className="text-primary" />{" "}
                <span className="ms-4">2023</span>
              </li>
            </ul>
            <PlayButton
              className="mt-9 flex items-center rounded-full border-2 border-primary bg-darkness p-4 uppercase transition hover:bg-primary"
              spanClass="ms-4"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
