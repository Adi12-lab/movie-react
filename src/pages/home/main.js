import Card from '../../components/card'
import Test2 from "../../assets/test2.jpg"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Test3 from "../../assets/test3.png"
import '@splidejs/react-splide/css';
function Main() {
    const splideOptions = {
        type: 'loop',
        perPage: 6,
        arrows: false,
        perMove: 1,
        focus: 'center',
        padding: {
            right: '16%', // Atur padding kanan sesuai kebutuhan
          },
        gap: '1rem',
    };
    return (
        <main>
            <section className="bg-no-repeat h-[1100px] bg-cover bg-left-top pt-24 text-white" style={{
            backgroundImage: `url('/img/mainBackground1.jpg')`,
        }}>
                <div className="container h-60">
                    <div className="flex flex-wrap">
                        <h6 className="uppercase text-primary">online streaming</h6>
                    </div>
                    <div className="flex flex-wrap items-center mt-9">
                        <h3 className="font-homenaje text-4xl block">Upcoming Movies</h3>
                        <ul className="flex h-max ms-auto gap-x-3">
                            <li className="bg-dark px-6 py-2 rounded-full">Film</li>
                            <li className="bg-dark px-6 py-2 rounded-full">Acara TV</li>
                            <li className="bg-dark px-6 py-2 rounded-full">Anime</li>
                        </ul>
                    </div>
                    <div className='mt-16 cursor-grabbing'>
                    <Splide options={{
                        fixedWidth: '300px',
                        arrows: false,
                        pagination: false,
                        perMove: 1,
                        gap: '3rem',
                    }}>
                        <SplideSlide>
                            <Card />
                        </SplideSlide>
                        <SplideSlide>
                            <Card />
                        </SplideSlide>
                        <SplideSlide>
                            <Card />
                        </SplideSlide>
                        <SplideSlide>
                            <Card />
                        </SplideSlide>
                        <SplideSlide>
                            <Card />
                        </SplideSlide>
                        <SplideSlide>
                            <Card />
                        </SplideSlide>
                    </Splide>
                    
                    </div>
                    <div className='mt-14 cursor-grabbing'>
                        <Splide options={{
                            type: 'loop',
                            fixedWidth: '207px',
                            arrows: false,
                            perMove: 1,
                            gap: '.5rem',
                        }}>
                            <SplideSlide>
                                <img src={Test2} />
                            </SplideSlide>
                            <SplideSlide>
                                <img src={Test2} />
                            </SplideSlide>
                            <SplideSlide>
                                <img src={Test2} />
                            </SplideSlide>
                            <SplideSlide>
                                <img src={Test2} />
                            </SplideSlide>
                            <SplideSlide>
                                <img src={Test2} />
                            </SplideSlide>
                            <SplideSlide>
                                <img src={Test2} />
                            </SplideSlide>
                        </Splide>
                    </div>

                </div>
            </section>

            <section className='bg-[#1E1E1E] pt-16'>
                <div className='container'>
                    <div className='flex flex-wrap justify-evenly'>
                        <img src={Test3} />
                        <img src={Test3} />
                        <img src={Test3} />
                        <img src={Test3} />
                    </div>

                    <div className='mt-14 cursor-grabbing'>
                    <Splide options={{
                            type: 'loop',
                            fixedWidth: '207px',
                            arrows: false,
                            perMove: 1,
                            gap: '.5rem',
                        }}>
                            <SplideSlide>
                                <img src={Test2} />
                            </SplideSlide>
                            <SplideSlide>
                                <img src={Test2} />
                            </SplideSlide>
                            <SplideSlide>
                                <img src={Test2} />
                            </SplideSlide>
                            <SplideSlide>
                                <img src={Test2} />
                            </SplideSlide>
                            <SplideSlide>
                                <img src={Test2} />
                            </SplideSlide>
                            <SplideSlide>
                                <img src={Test2} />
                            </SplideSlide>
                        </Splide>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default Main