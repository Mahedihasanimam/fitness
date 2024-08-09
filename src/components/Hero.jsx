import React from 'react';
import hero from "../../public/image/heroimg.png"
import Image from 'next/image';
const Hero = () => {
    return (
        <div>
            <section className="bg-gray-800  text-gray-100 ">
	<div className="container flex flex-col justify-center  mx-auto pt-20 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-lg xl:max-w-xl lg:text-left">
			<h1 className="text-6xl font-bold leading-none sm:text-[78px]">Get body in <span className='italic'>shape</span> & stay healthy
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12 text-[#FFFFFF80]">A huge selection of health and fitness content, healthy recipes and transformation stories to help you get fit and stay fit!
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold  bg-[#E6533C] text-white rounded-full">Join Club Now!</a>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border  border-gray-100 rounded-full">Download App</a>
			</div>
		</div>
		<div className="flex items-start justify-start  mr-20 lg:mt-0 ">
			<Image height={0} width={0} src={hero} alt="" className="object-contain h-full" />
		</div>
	</div>
</section>
        </div>
    );
};

export default Hero;