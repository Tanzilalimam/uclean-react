import Img from "../../ui/images/Img"
import Three from '../../../assets/img/3.webp.png'
import Eleven from '../../../assets/img/11.webp.png'
import Ten from '../../../assets/img/10.webp.png'
import Eight from '../../../assets/img/8.webp.png'

const Abt1 = function () {

    return (
        <section className="w-full bg-[#0a3f87]">
            <div className="container">
                <div className="py-25 flex justify-around items-center">
                    <div className="flex flex-col items-start gap-8.25">
                        <button className='py-1 px-3 bg-[#ffffff26] text-white text-[12px] border-0 rounded-[30px] font-semibold leading-4.5 uppercase'>about uclean</button>
                        <h2 className="w-133.25 text-white text-5xl font-semibold leading-14.5 tracking-[-1.2px]">Bringing Clean, Comfort and Care Together</h2>
                        <p className="w-144.5 text-white text-[16px] leading-7.25">We are a team of passionate cleaning experts who take pride in delivering the highest standard of service. With years of experience in the industry, we’ve perfected our cleaning methods to ensure every job is done right.
                        </p>
                        <button className='py-1.75 px-6.25 bg-[#fee74b50] hover:bg-[#fee74a] text-[#212529] text-[13px] border-0 rounded-[30px] font-bold capitalize transition-all ease-linear duration-300 cursor-pointer'>book service now</button>
                    </div>
                    <div className="flex gap-5">
                        <div className="flex flex-col items-end gap-6">
                        <Img src={Eleven} alt='11' className='w-52 object-contain'></Img>
                        <Img src={Three} alt='3' className='w-full object-contain'></Img>
                        </div>
                        <div className="flex flex-col items-start gap-6 translate-y-7.5">
                        <Img src={Ten} alt='10'></Img>
                        <Img src={Eight} alt='8' className='w-52 object-contain'></Img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Abt1