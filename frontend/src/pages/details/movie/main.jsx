/* eslint-disable react/prop-types */
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";
function MainMovie({ images }) {
  const baseImgUrl = import.meta.env.VITE_REACT_APP_BASEIMGURL;
  return (
    <main>
      <section className="bg-darkness bg-cover bg-left-top bg-no-repeat pb-24 pt-14 text-white">
        <div className="container lg:px-4">
          <div>
            <h6 className="uppercase text-primary">Preview</h6>
            <h3 className="mt-9 block font-homenaje text-4xl">Gambar Film</h3>
          </div>
          <div className="mt-6 cursor-grabbing">
            <Splide
              options={{
                fixedWidth: "700px",
                perMove: 1,
                gap: ".5rem",
                pagination: false,
                arrows: true,
                type: "slide",
                breakpoints: {
                  576: {
                    fixedWidth: "430px",
                  },
                },
              }}
            >
              {images.map((item, i) => (
                <SplideSlide key={i}>
                  {" "}
                  <img
                    src={`${baseImgUrl}/${item.file_path}`}
                    alt={item.file_path}
                  />
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MainMovie;
