import { Icon } from '@iconify/react';
const MainTv = ({ episode, seasons }) => {


    const baseImgUrl = process.env.REACT_APP_BASEIMGURL;
    return (
        <main className="bg-darkness py-8 text-white">
            <div className="container">
                <div className="flex flex-wrap">
                    <h3 className="font-homenaje text-3xl border-l-4 border-secondary pl-6 inline-block">Episode terbaru</h3>
                </div>
                <div className="flex flex-wrap items-center mt-12 gap-10">
                    <div className="relative overflow-hidden rounded-2xl w-[450px]">

                        <img src={`${baseImgUrl}/${episode.still_path}`} alt={episode.id} className='w-full' />
                        <div className="absolute bottom-0 px-7 py-2 bg-grad w-full">
                            <h5 className="font-imprima text-[18px]">Epsiode {episode.episode_number}</h5>
                            <p className="text-[#78828A] text-[15px]">{episode.name}</p>
                        </div>
                    </div>
                    <div className="w-[500px]">
                        <p className="font-imprima text-lg">
                            {episode.overview}
                        </p>
                    </div>
                </div>

                <h3 className="font-homenaje text-3xl border-l-4 border-secondary pl-6 inline-block mt-12">Daftar Season</h3>
                <div className="flex flex-wrap mt-4">
                    {
                        seasons && seasons.map((item, i) => {
                            if (item.poster_path !== null) {
                                return <div className="flex flex-wrap gap-10 mt-8 bg-dark p-4 border border-secondary">
                                    <div className="w-64"><img src={`${baseImgUrl}${item.poster_path}`} alt={item.name} /></div>
                                    <div className='w-[840px]'>
                                        <h4 className="font-frenchCanon text-[35px] tracking-[5px] uppercase text-primary">{item.name}</h4>

                                        {item.air_date &&

                                            <p className='flex items-center gap-x-4'>
                                                <Icon icon="clarity:date-line" className="text-primary text-[18px]" />
                                                <span className='font-imprima'>{item.air_date}</span>
                                            </p>

                                        }
                                        {
                                            item.episode_count &&
                                            <p className='flex items-center gap-x-4 mt-4'>
                                                <Icon icon="mdi:film-outline" className='text-[18px] text-primary' />
                                                <span className='uppercase font-imprima'>
                                                    {item.episode_count} episode</span>
                                            </p>
                                        }
                                        <p className='mt-4 font-imprima'>{item.overview}</p>
                                    </div>
                                </div>
                            }
                            return ''
                        })
                    }
                </div>
            </div>
        </main>
    )
}
export default MainTv


