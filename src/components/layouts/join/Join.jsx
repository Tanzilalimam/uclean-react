import Img from "../../ui/images/Img";
import Model from '../../../assets/img/2.webp.png'

const Join = function () {

    return (
        <section className="mt-6">
            <div className="container">
                <div className="flex justify-around items-center">
                    <div className="flex flex-col items-start gap-7.5">
                        <button className='py-1 px-3 bg-[#4881fb50] text-[#4881fb] text-[12px] border-0 rounded-[30px] font-semibold leading-4.5 uppercase'>reliable clean</button>
                        <h2 className="w-[491.18px] text-[#161c2d] text-5xl font-semibold leading-14.75 tracking-[-1.2px] capitalize">Join Our Team of
                            Professionals Cleaners</h2>
                        <p className="w-151.5 text-[#707070] text-[16px] font-semibold leading-7.25">Join our team and be part of a dynamic, professional, and supportive
                            environment! Enjoy flexible schedules, competitive pay, and growth opportunities
                            while helping create spotless, welcoming spaces for our valued clients.</p>
                        <button className='py-1.75 px-6.25 bg-[#4881fb50] hover:bg-[#4881fb] hover:text-white text-[13px] border-0 rounded-[30px] font-bold capitalize transition-all ease-linear duration-300 cursor-pointer'>join now</button>
                    </div>
                    <div>
                        <Img src={Model} alt='img'></Img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Join