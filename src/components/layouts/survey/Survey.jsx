import Img from "../../ui/images/Img"
import Labor from '../../../assets/img/labor.webp.png'
import Calendar from '../../../assets/img/calendar.webp.png'
import Price from '../../../assets/img/best-price.webp.png'
import Eco from '../../../assets/img/eco-friendly.webp.png'
import Trust from '../../../assets/img/trustpilot.webp.png'
import Google from '../../../assets/img/google.webp.png'

const Survey = function () {

    return (

        <section className="relative">
            <div className="w-full h-120.5 bg-[#f8f9fa] absolute top-0 left-0 -z-10"></div>
            <div className="container">
                <div className="flex flex-col items-center gap-18.25">
                    <div className="mt-25 flex justify-between items-center gap-10">
                        <div className="flex flex-col items-center gap-5">
                            <Img src={Labor} alt='labor'></Img>
                            <h4 className="text-[#161c2d] text-[20.5px] font-semibold leading-8.25 capitalize">professional team</h4>
                            <p className="w-[295.53px] text-[16px] text-[#707070] text-center leading-7.25">
                                Our trained, insured cleaners ensure
                                professional, trusted service and
                                impeccable results.
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-5">
                            <Img src={Calendar} alt='labor'></Img>
                            <h4 className="text-[#161c2d] text-[20.5px] font-semibold leading-8.25 capitalize">on the service</h4>
                            <p className="w-[295.53px] text-[16px] text-[#707070] text-center leading-7.25">
                                Reliable, punctual service that respects
                                your schedule and exceeds
                                expectations.
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-5">
                            <Img src={Price} alt='labor'></Img>
                            <h4 className="text-[#161c2d] text-[20.5px] font-semibold leading-8.25 capitalize">transparent pricing</h4>
                            <p className="w-[295.53px] text-[16px] text-[#707070] text-center leading-7.25">
                                Affordable, upfront rates with no hidden
                                costs — quality cleaning at the right
                                price.
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-5">
                            <Img src={Eco} alt='labor'></Img>
                            <h4 className="text-[#161c2d] text-[20.5px] font-semibold leading-8.25 capitalize">eco friendly</h4>
                            <p className="w-[295.53px] text-[16px] text-[#707070] text-center leading-7.25">
                                We use non-toxic, eco-friendly products
                                for a safe, healthy, and sparkling
                                environment.
                            </p>
                        </div>
                    </div>
                    <div className="p-12 bg-[#fee74a] border-0 rounded-xl flex items-center gap-46">
                        <div className="flex flex-col items-center gap-2.5">
                            <h5 className="text-[#161c2d] text-[40px] font-semibold leading-10 uppercase">65250 +</h5>
                            <p className="text-[#707070] text-[15px] leading-7.25 capitalize">houses cleaned</p>
                        </div>
                        <div className="flex flex-col items-center gap-2.5">
                            <h5 className="text-[#161c2d] text-[40px] font-semibold leading-10 uppercase">23160 +</h5>
                            <p className="text-[#707070] text-[15px] leading-7.25 capitalize">happy customers</p>
                        </div>
                        <div className="flex flex-col items-center gap-2.5">
                            <h5 className="text-[#161c2d] text-[40px] font-semibold leading-10 uppercase">150 +</h5>
                            <p className="text-[#707070] text-[15px] leading-7.25 capitalize">experienced cleaners</p>
                        </div>
                        <div className="flex flex-col items-center gap-2.5">
                            <h5 className="text-[#161c2d] text-[40px] font-semibold leading-10 uppercase">20 +</h5>
                            <p className="text-[#707070] text-[15px] leading-7.25 capitalize">years of experience</p>
                        </div>
                    </div>
                    <div className="m-20 flex items-center gap-55">
                        <div className="flex gap-10">
                            <div className="flex flex-col items-center gap-.5">
                                <p className="text-[#161c2d] text-[20.5px] font-semibold leading-8 capitalize">excellent</p>
                                <p className="text-[#707070] text-[14px] font-bold leading-8 capitalize">based on 180 reviews</p>
                                <Img src={Trust} alt='trust-pilot' className='w-30'></Img>
                            </div>
                            <div className="flex flex-col items-center gap-.5">
                                <p className="text-[#161c2d] text-[20.5px] font-semibold leading-8 capitalize">4.8 out of 5</p>
                                <p className="text-[#707070] text-[14px] font-bold leading-8 capitalize">based on 200 reviews</p>
                                <Img src={Google} alt='trust-pilot' className='w-30'></Img>
                            </div>
                        </div>
                        <h2 className="w-[413.49px] text-[#161c2d] text-5xl font-semibold leading-14.5 tracking-[-1.2px] capitalize">We Are a Trusted Cleaning Company
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Survey