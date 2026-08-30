import Img from "../../ui/images/Img"
import C1 from '../../../assets/img/1.jpg.png'
import C2 from '../../../assets/img/2.jpg.png'
import C3 from '../../../assets/img/3.jpg.png'

const Customer = function () {

    return (
        <section className="my-19">
            <div className="container">
                <div className="flex flex-col items-center gap-10.5">
                    <button className='py-1 px-3 bg-[#4881fb50] text-[#4881fb] text-[12px] border-0 rounded-[30px] font-semibold leading-4.5 uppercase'>testimonials</button>
                    <h2 className="text--[#161c2d] text-5xl font-semibold leading-14.5 tracking-[-1.2px] capitalize">our happy customers</h2>
                    <div className="flex items-start gap-8.25">
                        <div className="flex flex-col items-start gap-4.75">
                            <Img src={C1} alt='c1' className=''></Img>
                            <h6 className="text-[#212529] text-[16px] font-semibold leading-7.25">bryan g.customer</h6>
                            <p className="w-110.75 text-[#707070] text-[16px] leading-7.25">
                                "Absolutely love this service. They’re prompt, thorough, and
                                friendly. I can trust them to clean my home exactly how I
                                want it. Plus, they’re affordable and use safe, green
                                products."
                            </p>
                        </div>
                        <div className="flex flex-col items-start gap-4.75">
                            <Img src={C2} alt='c2' className=''></Img>
                            <h6 className="text-[#212529] text-[16px] font-semibold leading-7.25">bryan g.customer</h6>
                            <p className="w-110.75 text-[#707070] text-[16px] leading-7.25">
                                "Absolutely love this service. They’re prompt, thorough, and
                                friendly. I can trust them to clean my home exactly how I
                                want it. Plus, they’re affordable and use safe, green
                                products."
                            </p>
                        </div>
                        <div className="flex flex-col items-start gap-4.75">
                            <Img src={C3} alt='c3' className=''></Img>
                            <h6 className="text-[#212529] text-[16px] font-semibold leading-7.25">bryan g.customer</h6>
                            <p className="w-110.75 text-[#707070] text-[16px] leading-7.25">
                                "Absolutely love this service. They’re prompt, thorough, and
                                friendly. I can trust them to clean my home exactly how I
                                want it. Plus, they’re affordable and use safe, green
                                products."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Customer