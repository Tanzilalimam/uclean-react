import Img from "../../ui/images/Img";
import Vid from '../../../assets/img/vid.png'

const VideoTour = function () {

    return (
        <section className="w-full bg-[#4881fb]">
            <div className="flex items-center gap-15">
                <div className="w-[50%] relative">
                    <Img src={Vid} alt='img'></Img>
                    <div className="size-30 bg-[#fee74a] flex justify-center items-center rounded-xl absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-2">

                    </div>
                </div>
                <div className="flex flex-col items-start gap-4.5">
                    <button className='py-1 px-3 bg-[#d6e1f850] text-white text-[12px] border-0 rounded-[30px] font-semibold leading-4.5 uppercase'>reliable clean</button>
                    <h2 className="w-[502.21px] text-white text-5xl font-semibold leading-14.5 tracking-[-1.2px] capitalize">shine brighter with our touch</h2>
                    <p className="w-[577.83px] text-white text-[16px] leading-7.25">
                        We are a team of passionate cleaning experts who take pride in delivering the
                        highest standard of service. With years of experience in the industry, we’ve
                        perfected our cleaning methods to ensure every job is done right.
                    </p>
                    <button className='py-1.75 px-6.25 bg-[#d8e3fa50] hover:text-[#869fd4] hover:bg-white text-[13px] border-0 rounded-[30px] font-bold capitalize transition-all ease-linear duration-300 cursor-pointer'>book cleaning service now</button>
                </div>
            </div>
        </section>
    )
}

export default VideoTour