import Img from "../../ui/images/Img"
import Container from '../../../assets/img/Container.png'

const Reason = function(){

    return(
        <section className="w-full relative">
            <div className="w-full h-[130vh] bg-[#0a3f87] absolute top-0 left-0 -z-10">
            </div>
            <div className="container">
                <div className="py-25 flex justify-around items-center">
                    <div className="flex flex-col items-start gap-10">
                        <button className='py-1 px-3 bg-[#4881fb50] text-white text-[12px] border-0 rounded-[30px] font-semibold leading-4.5 uppercase'>reliable clean</button>
                        <h2 className="text-white text-5xl font-semibold leading-14.5 tracking-[-1.2px] capitalize">Top Six Reasons to Trust Us</h2>
                        <ul className="flex flex-col items-start gap-2.5">
                            <li className="list-none">
                                <p className="text-[#f8f9fa] text-[16px] leading-6.5">Our experienced staff deliver impeccable results with attention to detail.</p>
                            </li>
                            <li className="list-none">
                                <p className="text-[#f8f9fa] text-[16px] leading-6.5">We tailor our services to meet your unique needs and preferences.</p>
                            </li>
                            <li className="list-none">
                                <p className="text-[#f8f9fa] text-[16px] leading-6.5">Safe and sustainable cleaning solutions for home and environment.</p>
                            </li>
                            <li className="list-none">
                                <p className="text-[#f8f9fa] text-[16px] leading-6.5">Punctual, dependable, and fully vetted professionals you can trust.</p>
                            </li>
                            <li className="list-none">
                                <p className="text-[#f8f9fa] text-[16px] leading-6.5">Transparent pricing that fits your budget, with no surprises.</p>
                            </li>
                            <li className="list-none">
                                <p className="text-[#f8f9fa] text-[16px] leading-6.5">We’re not done until you’re happy — your satisfaction is our priority!</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Img src={Container} alt='container.png'></Img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reason