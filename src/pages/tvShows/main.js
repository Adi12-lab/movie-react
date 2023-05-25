import Navbar from "../../components/navbar"
import Card from "../../components/card"
import { Splide, SplideSlide } from "@splidejs/react-splide"
const Main = () => {
    return (
        <main className="text-white bg-cover bg-no-repeat pb-14" style={{
            backgroundImage: `url('/img/mainBackground1.jpg')`,
        }}>
            <Navbar />
            <div className="container">
                <div className="flex flex-wrap mt-16">
                    <h3 className="font-homenaje text-3xl border-l-4 border-secondary pl-6 inline-block">Episode terbaru</h3>
                </div>
                <div className="mt-14 cursor-grabbing">
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
                <div className="flex flex-wrap mt-16">
                    <h3 className="font-homenaje text-3xl border-l-4 border-secondary pl-6 inline-block">Acara TV terpopuler</h3>
                </div>
                <div className="mt-14 cursor-grabbing">
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
            </div>
        </main>
    )
}
export default Main