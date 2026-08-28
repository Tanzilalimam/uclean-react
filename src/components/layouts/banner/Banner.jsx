import Img from "../../ui/images/Img"
import Poster from '../../../assets/img/1.webp.png'

const Banner = function () {

    return (
        <section className="relative" >
            <div className="h-full w-1/2 bg-linear-[45deg,#5becfca1_20%,white_65%] absolute top-0 left-0 -z-10"></div>
            <div className="h-full w-1/2 bg-linear-[-45deg,#5bc4fc99_20%,white_65%] absolute top-0 right-0 -z-10"></div>
            <div className="container">
                <div className="flex flex-col items-center gap-15">
                    <button className='py-1 px-3 bg-[#4881fb50] text-[#4881fb] text-[12px] border-0 rounded-[30px] font-semibold leading-4.5 uppercase'>reliable clean</button>
                    <h1 className="text-[#161c2d] text-8xl font-semibold leading-27.5 tracking-[-5px] uppercase">sparkling spaces</h1>
                    <p className="w-125.5 text-[#707070] text-[17px] text-center leading-8 ">Enjoy a spotless space with our expert cleaning team. Affordable,
                    eco-friendly, and tailored to your needs!
                    </p>
                    <button className='py-1.75 px-6.25 bg-[#4881fb50] hover:bg-[#4881fb] hover:text-white text-[13px] border-0 rounded-[30px] font-bold capitalize transition-all ease-linear duration-300 cursor-pointer'>book cleaning service now</button>
                    <div className="">
                        <Img src={Poster} alt='posterimg'></Img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner