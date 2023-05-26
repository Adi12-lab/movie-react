import Card from '../../components/card'
import Test2 from "../../assets/test2.jpg"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
function Main() {
  
    return (
        <main>
            <section className="bg-no-repeat bg-cover bg-left-top py-24 text-white" style={{
            backgroundImage: `url('/img/mainBackground1.jpg')`,
        }}>
                <div className="container">
                    <div className="text-center">
                        <h6 className="uppercase text-primary">Acara tv terbaik</h6>
                        <h3 className="font-homenaje text-4xl block mt-9">Acara tv terbaik di dunia</h3>
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