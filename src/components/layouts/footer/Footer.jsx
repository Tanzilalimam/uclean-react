import Img from "../../ui/images/Img";
import Logo2 from '../../../assets/img/logo2.png'

const Footer = function () {

    return (
        <section className="pt-25 pb-15 bg-[#161c2d]">
            <div className="container">
                <div className="flex items-start gap-12">
                    <div className="flex flex-col items-start gap-5.5">
                        <Img src={Logo2} alt='logo'></Img>
                        <p className="w-95 text-white text-[16px] leading-7.25">We are a team of passionate cleaning experts who take pride in delivering the highest standard of service. With years of experience in the industry, we’ve perfected our cleaning methods to ensure every job is done right.
                        </p>
                    </div>
                    <ul className='flex flex-col items-start gap-2.5'>
                    <h4 className="text-white text-[16px] font-semibold leading-7.25 capitalize">company</h4>
                    <li className='list-none'><a href="#" className='text-white text-[16px] leading-7.25 no-underline capitalize transition-all ease-linear duration-300 hover:text-blue-700'>home</a></li>
                    <li className='list-none'><a href="#" className='text-white text-[16px] leading-7.25 no-underline capitalize transition-all ease-linear duration-300 hover:text-blue-700'>our services</a></li>
                    <li className='list-none'><a href="#" className='text-white text-[16px] leading-7.25 no-underline capitalize transition-all ease-linear duration-300 hover:text-blue-700'>projects</a></li>
                    <li className='list-none'><a href="#" className='text-white text-[16px] leading-7.25 no-underline capitalize transition-all ease-linear duration-300 hover:text-blue-700'>about us</a></li>
                    <li className='list-none'><a href="#" className='text-white text-[16px] leading-7.25 no-underline capitalize transition-all ease-linear duration-300 hover:text-blue-700'>blogs</a></li>
                    <li className='list-none'><a href="#" className='text-white text-[16px] leading-7.25 no-underline capitalize transition-all ease-linear duration-300 hover:text-blue-700'>contact</a></li>
                    </ul>
                    <ul className='flex flex-col items-start gap-2.5'>
                    <h4 className="text-white text-[16px] font-semibold leading-7.25 capitalize">our services</h4>
                    <li className='list-none'><a href="#" className='text-white text-[16px] leading-7.25 no-underline capitalize transition-all ease-linear duration-300 hover:text-blue-700'>residential cleaning</a></li>
                    <li className='list-none'><a href="#" className='text-white text-[16px] leading-7.25 no-underline capitalize transition-all ease-linear duration-300 hover:text-blue-700'>commercial cleaning</a></li>
                    <li className='list-none'><a href="#" className='text-white text-[16px] leading-7.25 no-underline capitalize transition-all ease-linear duration-300 hover:text-blue-700'>deep cleaning</a></li>
                    <li className='list-none'><a href="#" className='text-white text-[16px] leading-7.25 no-underline capitalize transition-all ease-linear duration-300 hover:text-blue-700'>move-in/move-out cleaning</a></li>
                    <li className='list-none'><a href="#" className='text-white text-[16px] leading-7.25 no-underline capitalize transition-all ease-linear duration-300 hover:text-blue-700'>post construction cleaning</a></li>
                    <li className='list-none'><a href="#" className='text-white text-[16px] leading-7.25 no-underline capitalize transition-all ease-linear duration-300 hover:text-blue-700'>carpet and upholstery cleaning</a></li>
                    </ul>
                    <ul className='flex flex-col items-start gap-2.5'>
                    <h4 className="text-white text-[16px] font-bold leading-7.25 capitalize">we are open</h4>
                    <li className='list-none'><p className='text-white text-[16px] leading-7.25 capitalize'>monday - saturday 08.00 - 18.00</p></li>
                    <h4 className="text-white text-[16px] font-bold leading-7.25 capitalize">office location</h4>
                    <li className='list-none'><p className='text-white text-[16px] leading-7.25 no-underline capitalize'>100 s main st, new york, NY</p></li>
                    <h4 className="text-white text-[16px] font-bold leading-7.25 capitalize">send a message</h4>
                    <li className='list-none'><p className='text-white text-[16px] leading-7.25 no-underline lowercase'>contact@uclean.com</p></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Footer