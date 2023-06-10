
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';
function MainMovie({images}) {
    const baseImgUrl = process.env.REACT_APP_BASEIMGURL;
    return (
        <main>
            <section className="bg-no-repeat bg-cover bg-left-top pt-14 pb-24 text-white bg-darkness">
                <div className="container">
                    <div>
                        <h6 className="uppercase text-primary">Preview</h6>
                        <h3 className="font-homenaje text-4xl block mt-9">Gambar Film</h3>
                    </div>
                    <div className='mt-6 cursor-grabbing'>
                        <Splide options={{
                            fixedWidth: '700px',
                            perMove: 1,
                            gap: '.5rem',
                            pagination: false,
                            arrows: true,
                            type: 'slide',
                            breakpoints: {
                                576: {
                                    fixedWidth: '430px'
                                }
                            } 
                        }}>
                            {
                                images.map((item, i) => <SplideSlide key={i}> <img src={`${baseImgUrl}/${item.file_path}`} alt={item.file_path}/></SplideSlide>)
                            }
                            
                        </Splide>
                    </div>

                </div>
            </section>
           
        </main>
    )
}

export default MainMovie