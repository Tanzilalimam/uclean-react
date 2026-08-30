
const Pricing = function () {

    return (
        <section>
            <div className="container">
                <div className="flex flex-col items-center gap-8">
                    <button className='py-1 px-3 bg-[#4881fb50] text-white text-[12px] border-0 rounded-[30px] font-semibold leading-4.5 uppercase'>complete solutions</button>
                    <h2 className="text-white text-5xl font-semibold leading-14.5 tracking-[-1.2px] capitalize">pricing plans</h2>
                    <p className="w-153.75 text-white text-[17px] text-center leading-8 tracking-[-.2px]">
                        Choose from flexible, affordable cleaning plans designed to fit your needs, from
                        one-time deep cleans to regular maintenance services.
                    </p>
                    <div className="flex items-start gap-6">
                        <div className="py-6.5 px-25 bg-[#f8f9fa] rounded-xl flex flex-col items-center gap-10">
                            <p className="text-[#161c2d] text-[16px] font-semibold leading-6.25 capitalize">one time or monthly</p>
                            <div className="flex items-start gap-0">
                            <p className="mt-5.5 text-[#707070] text-[16px] leading-7.25 capitalize">$</p>
                            <h3 className="text-[#212529] text-[64px] font-bold leading-7.25 uppercase">49</h3>
                            <p className="mt-5.5 text-[#707070] text-[16px] leading-7.25 capitalize">/hour/cleaner</p>
                        </div>
                            <button className='py-1.75 px-6.25 bg-[#4881fb50] hover:bg-[#4881fb] hover:text-white text-[13px] border-0 rounded-[30px] font-bold capitalize transition-all ease-linear duration-300 cursor-pointer'>book now</button>
                        </div>
                        <div className="py-6.5 px-25 bg-[#f8f9fa] rounded-xl flex flex-col items-center gap-10">
                            <p className="text-[#161c2d] text-[16px] font-semibold leading-6.25 capitalize">recurring(weekly/biweekly)</p>
                            <div className="flex items-start gap-0">
                            <p className="mt-5.5 text-[#707070] text-[16px] leading-7.25 capitalize">$</p>
                            <h3 className="text-[#212529] text-[64px] font-bold leading-7.25 uppercase">43</h3>
                            <p className="mt-5.5 text-[#707070] text-[16px] leading-7.25 capitalize">/hour/cleaner</p>
                        </div>
                            <button className='py-1.75 px-6.25 bg-[#4881fb50] hover:bg-[#4881fb] hover:text-white text-[13px] border-0 rounded-[30px] font-bold capitalize transition-all ease-linear duration-300 cursor-pointer'>book now</button>
                        </div>
                        <div className="py-6.5 px-25 bg-[#f8f9fa] rounded-xl flex flex-col items-center gap-10">
                            <p className="text-[#161c2d] text-[16px] font-semibold leading-6.25 capitalize">office & commercial</p>
                            <div className="flex items-start gap-0">
                            <p className="mt-5.5 text-[#707070] text-[16px] leading-7.25 capitalize">$</p>
                            <h3 className="text-[#212529] text-[64px] font-bold leading-7.25 uppercase">40</h3>
                            <p className="mt-5.5 text-[#707070] text-[16px] leading-7.25 capitalize">/hour/cleaner</p>
                        </div>
                            <button className='py-1.75 px-6.25 bg-[#4881fb50] hover:bg-[#4881fb] hover:text-white text-[13px] border-0 rounded-[30px] font-bold capitalize transition-all ease-linear duration-300 cursor-pointer'>book now</button>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Pricing