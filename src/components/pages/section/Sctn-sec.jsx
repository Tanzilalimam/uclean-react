import Img from "../../ui/images/Img"
import Link from '../../../assets/img/Link.png'
import Link1 from '../../../assets/img/Link (1).png'
import Link2 from '../../../assets/img/Link (2).png'
import Link3 from '../../../assets/img/Link (3).png'
import Link4 from '../../../assets/img/Link (4).png'
import Link5 from '../../../assets/img/Link (5).png'

const Sctn1 = function () {

    return (
        <section>
            <div className="container">
                <div className="pb-25 flex flex-col items-center gap-4">
                    <button className='py-1 px-3 bg-[#ffffff26] text-white text-[12px] border-0 rounded-[30px] font-semibold leading-4.5 uppercase'>our services</button>
                    <h2 className="text-white text-5xl font-semibold leading-14.5 tracking-[-1.2px capitalize]">our cleaning services</h2>
                    <p className="w-148.75 text-white text-[17px] text-center leading-8 tracking-[-.2px]">
                        Whether it's a quick refresh or a deep clean transformation, our expert touch leaves your home or office shining.
                    </p>
                    <div className="my-5 flex justify-start items-start gap-5 flex-wrap">
                        <div className="flex flex-col items-start gap-2">
                            <Img src={Link} alt='no pic' className='-my-4 -mx-6 w-102.5'></Img>
                            <h3 className="mx-1 text-[#161c2d] text-[20.5px] font-semibold leading-8.5 capitalize">residential cleaning</h3>
                            <p className="mx-1 w-[391.36px] text-[#707070] text-[16px] leading-7.25">
                                A thorough cleaning of the entire property, including
                                hard-to-reach areas, appliances, baseboards, and
                                grout lines.
                            </p>
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <Img src={Link1} alt='no pic' className='-my-4 -mx-6 w-102.5'></Img>
                            <h3 className="mx-1 text-[#161c2d] text-[20.5px] font-semibold leading-8.5 capitalize">commercial cleaning</h3>
                            <p className="mx-1 w-[391.36px] text-[#707070] text-[16px] leading-7.25">
                                A thorough cleaning of the entire property, including
                                hard-to-reach areas, appliances, baseboards, and
                                grout lines.
                            </p>
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <Img src={Link2} alt='no pic' className='-my-4 -mx-6 w-102.5'></Img>
                            <h3 className="mx-1 text-[#161c2d] text-[20.5px] font-semibold leading-8.5 capitalize">deep cleaning</h3>
                            <p className="mx-1 w-[391.36px] text-[#707070] text-[16px] leading-7.25">
                                A thorough cleaning of the entire property, including
                                hard-to-reach areas, appliances, baseboards, and
                                grout lines.
                            </p>
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <Img src={Link3} alt='no pic' className='-my-4 -mx-6 w-102.5'></Img>
                            <h3 className="mx-1 text-[#161c2d] text-[20.5px] font-semibold leading-8.5 capitalize">move-in/move-out cleaning</h3>
                            <p className="mx-1 w-[391.36px] text-[#707070] text-[16px] leading-7.25">
                                A thorough cleaning of the entire property, including
                                hard-to-reach areas, appliances, baseboards, and
                                grout lines.
                            </p>
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <Img src={Link4} alt='no pic' className='-my-4 -mx-6 w-102.5'></Img>
                            <h3 className="mx-1 text-[#161c2d] text-[20.5px] font-semibold leading-8.5 capitalize">post-construction cleaning</h3>
                            <p className="mx-1 w-[391.36px] text-[#707070] text-[16px] leading-7.25">
                                A thorough cleaning of the entire property, including
                                hard-to-reach areas, appliances, baseboards, and
                                grout lines.
                            </p>
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <Img src={Link5} alt='no pic' className='-my-4 -mx-6 w-102.5'></Img>
                            <h3 className="mx-1 text-[#161c2d] text-[20.5px] font-semibold leading-8.5 capitalize">carpet and upholstery cleaning</h3>
                            <p className="mx-1 w-[391.36px] text-[#707070] text-[16px] leading-7.25">
                                A thorough cleaning of the entire property, including
                                hard-to-reach areas, appliances, baseboards, and
                                grout lines.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sctn1