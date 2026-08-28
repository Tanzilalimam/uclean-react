import Logo from '../../../assets/img/logo.png'
import Img from '../../ui/images/Img'

const Nav = function(){

    return(
        <nav className='bg-[#ffffff66]'>
            <div className="container py-3.5 flex justify-between items-center">
                <div>
                    <Img src={Logo} alt='logo'></Img>
                </div>
                <ul className='flex gap-7.5'>
                    <li className='list-none'><a href="#" className='text-[#161c2d] text-[18px] font-semibold no-underline capitalize transition-all ease-linear duration-300 hover:text-blue-700'>home</a></li>
                    <li className='list-none'><a href="#" className='text-[#161c2d] text-[18px] font-semibold no-underline capitalize transition-all ease-linear duration-300 hover:text-blue-700'>services</a></li>
                    <li className='list-none'><a href="#" className='text-[#161c2d] text-[18px] font-semibold no-underline capitalize transition-all ease-linear duration-300 hover:text-blue-700'>how it works</a></li>
                    <li className='list-none'><a href="#" className='text-[#161c2d] text-[18px] font-semibold no-underline capitalize transition-all ease-linear duration-300 hover:text-blue-700'>about</a></li>
                    <li className='list-none'><a href="#" className='text-[#161c2d] text-[18px] font-semibold no-underline capitalize transition-all ease-linear duration-300 hover:text-blue-700'>projects</a></li>
                    <li className='list-none'><a href="#" className='text-[#161c2d] text-[18px] font-semibold no-underline capitalize transition-all ease-linear duration-300 hover:text-blue-700'>blogs</a></li>
                    <li className='list-none'><a href="#" className='text-[#161c2d] text-[18px] font-semibold no-underline capitalize transition-all ease-linear duration-300 hover:text-blue-700'>contact</a></li>
                </ul>
                <div className='flex items-center gap-5'>
                <div className='flex flex-col items-center gap-2.5'>
                    <p className='text-[#707070] text-[12.5px] font-medium leading-5 capitalize'>need help?</p>
                    <p className='text-[#161c2d] text-[18px] font-semibold capitalize'>+1 5000 6000</p>
                </div>
                <button className='py-1.75 px-6.25 bg-[#4881fb50] hover:bg-[#4881fb] hover:text-white text-[13px] border-0 rounded-[30px] font-bold capitalize transition-all ease-linear duration-300 cursor-pointer'>book service now</button>
                </div>
            </div>
        </nav>
    )
}

export default Nav