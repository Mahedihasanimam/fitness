import React from 'react';

const Membership = () => {
    return (
        <div id='membership'>
            <section className="py-6 bg-gray-800 text-gray-100">
	<div className="container p-4 mx-auto sm:p-10">
        {/* PRICING TITLE --------------------------- */}
		<div className="mb-12 space-y-4 max-w-2xl text-[#FFFFFF80] ">
        <h2 className="lg:text-6xl md:text-4xl text-3xl font-black  text-[#E6533C]  uppercase">
        Pricing tables
          </h2>
			<p className="">They endure obligations and matters that are justified by law, arising from work, without ever being unjust, using a different name to explain things, while avoiding wrongdoing, possessing something</p>
			<div>
				<button className="px-4 py-1 font-semibold border rounded-l-lg bg-[#E6533C] border-[#E6533C] text-white">Monthly</button>
				<button className="px-4 py-1 border rounded-r-lg border-[#E6533C]">Annually</button>
			</div>
		</div>
		<div className="grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:grid-cols-3 md:grid-cols-2 w-full lg:max-w-full">

            {/* PRICING ONE ---------------------- */}
			<div className="flex flex-col overflow-hidden border-2 rounded-md border-gray-700 hover:border-[#E6533C] transition-all duration-500 ease-out ">
				<div className="flex flex-col items-center justify-center px-2 py-8 space-y-4 bg-gray-800">
					<p className="text-lg font-medium uppercase">Basic</p>
					<p className="text-5xl font-bold">$60
						<span className="text-xl text-gray-400">/mo</span>
					</p>
				</div>
				<div className="flex flex-col items-center justify-center px-2 py-8 bg-gray-900 hover:cursor-pointer">
					<ul className="self-stretch w-fit mx-auto flex-1 space-y-2">
						<li className="flex justify-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-[#E6533C]">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
							</svg>
							<span>Access to all gym equipment</span>
						</li>
						<li className="flex justify-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-[#E6533C]">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
							</svg>
							<span>EOne group fitness class per week</span>
						</li>
						<li className="flex justify-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-[#E6533C]">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
							</svg>
							<span>Locker room access</span>
						</li>
					</ul>
					<button className="px-8 py-3 mt-6 text-lg font-semibold rounded sm:mt-12 bg-[#E6533C] text-white">Sign up</button>
				</div>
			</div>

            {/* PRICING tow ---------------------- */}
			<div className="flex flex-col overflow-hidden border-2 rounded-md border-[#E6533C] hover:cursor-pointer"data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
				<div className="flex flex-col items-center justify-center px-2 py-8 space-y-4 bg-gray-800">
					<p className="text-lg font-medium">Professional</p>
					<p className="text-5xl font-bold">$120
						<span className="text-xl text-gray-400">/mo</span>
					</p>
				</div>
				<div className="flex flex-col items-center justify-center px-2 py-8 bg-gray-900">
					<ul className="self-stretch w-fit mx-auto flex-1 space-y-2">
						<li className="flex justify-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-[#E6533C]">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
							</svg>
							<span>All Basic features included</span>
						</li>
						<li className="flex justify-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-[#E6533C]">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
							</svg>
							<span>Unlimited group fitness classes</span>
						</li>
						<li className="flex justify-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-[#E6533C]">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
							</svg>
							<span>Personal trainer (1 session per month)</span>
						</li>
					</ul>
					<button className="px-8 py-3 mt-6 text-lg font-semibold rounded sm:mt-12 bg-[#E6533C] text-white">Sign up</button>
				</div>
			</div>

            {/* PRICING three ---------------------- */}
			<div className="flex flex-col overflow-hidden border-2 rounded-md  border-gray-700 hover:border-[#E6533C] transition-all duration-500 ease-in-out hover:cursor-pointer">
				<div className="flex flex-col items-center justify-center px-2 py-8 space-y-4 bg-gray-800">
					<p className="text-lg font-medium">Enterprise</p>
					<p className="text-5xl font-bold">$200
						<span className="text-xl text-gray-400">/mo</span>
					</p>
				</div>
				<div className="flex flex-col items-center justify-center px-2 py-8 bg-gray-900">
					<ul className="self-stretch w-fit mx-auto text items-start space-y-2">
						<li className="flex justify-start text-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-[#E6533C]">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
							</svg>
							<span>All Professional features included</span>
						</li>
						<li className="flex justify-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-[#E6533C]">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
							</svg>
							<span>Unlimited personal trainer sessions</span>
						</li>
						<li className="flex justify-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-[#E6533C]">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
							</svg>
							<span>VIP locker room and towel service</span>
						</li>
					</ul>
					<button className="px-8 py-3 mt-6 text-lg font-semibold rounded sm:mt-12 bg-[#E6533C] text-white">Sign up</button>
				</div>
			</div>
		</div>
	</div>
</section>
        </div>
    );
};

export default Membership;