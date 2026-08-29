import Img from "../../ui/images/Img"
import Labor from '../../../assets/img/labor.webp.png'
import Calendar from '../../../assets/img/calendar.webp.png'
import Price from '../../../assets/img/best-price.webp.png'
import Eco from '../../../assets/img/eco-friendly.webp.png'

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

                </div>
            </div>
        </section>
    )
}

export default Survey