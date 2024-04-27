import React, { useEffect, useState } from 'react'

const ServiceComponent = () => {
		const [showAnimation, setShowAnimation] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const serviceComponent = document.getElementById("service");
			if (serviceComponent) {
				const serviceComponentOffset = serviceComponent.offsetTop;
				const scrollPosition = window.scrollY + window.innerHeight;

				if (scrollPosition >= serviceComponentOffset) {
					setShowAnimation(true);
				} else {
					setShowAnimation(false);
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
  return (
		<div
			id="service"
			className={`w-full sm:h-[500px] h-screen  justify-between  flex flex-col  gap-7  my-20 sm:my-0 sm:mt-16  sm:gap-16 ${
				showAnimation &&
				"animate__animated  animate__slideInLeft  duration-1000"
			} `}>
			<h1 className=" text-gray-800 bodyFont sm:ms-5 mt-10 border-b-orange-300 border-b sm:w-[20%]  text-3xl header font-bold tracking-wide ">
				Our Services
			</h1>
			<div className=" w-full  h-full  m-auto flex flex-col sm:flex-row gap-5 sm:gap-10 justify-center">
				<div className="sm:w-[35%] group px-4 h-[60%] hover:bg-[#FF8911] hover:shadow-xl hover:opacity-95 hover:shadow-orange-600 duration-700 transition-transform  bg-[#FF9800] rounded-lg flex items-center gap-5  ">
					<div className="sm:w-[70%] w-[70%] mt-1">
						<h1 className="sm:text-xl  tracking-tighter sm:tracking-normal text-md font-bold">
							Fast Free Shipping
						</h1>
						<p className="sm:text-sm  text-justify sm:text-left text-sm tracking-tighter sm:tracking-tight  my-2 text-gray-800 group-hover:text-black   ">
							Order over $75 ship for free. Or singn up for a sneaker account
							and get free shopping on every order.{" "}
						</p>
					</div>
					<div className="w-[30%]">
						<img
							className=" sm:w-full object-contain "
							src="https://cdn-icons-png.flaticon.com/512/5952/5952766.png"
							alt=""
						/>
					</div>
				</div>

				<div className="sm:w-[35%] group px-4 h-[60%] hover:bg-[#FF8911] hover:shadow-xl hover:opacity-95 hover:shadow-orange-600 duration-700 transition-transform  bg-[#FF9800] rounded-lg flex items-center gap-5  ">
					<div className="sm:w-[70%] w-[70%] ">
						<h1 className="sm:text-xl  tracking-tight sm:tracking-normal text-md font-bold">
							Sneaker Gift Card
						</h1>
						<p className="sm:text-sm  sm:text-pretty text-sm  my-2 text-gray-800 group-hover:text-black   ">
							Give them exactly what they want with a Sneaker Gift Card .
						</p>
					</div>
					<div className="w-[30%]">
						<img
							className=" w-full object-contain "
							src="https://cdn-icons-png.flaticon.com/128/2169/2169884.png"
							alt=""
						/>
					</div>
				</div>

				<div className="sm:w-[35%] group px-4 hover:bg-[#FF8911] hover:shadow-xl hover:opacity-95 hover:shadow-orange-600 duration-700 transition-transform  bg-[#FF9800] rounded-lg flex items-center gap-5  h-[60%]">
					<div className="sm:w-[70%] w-[70%] ">
						<h1 className="sm:text-xl  tracking-tighter sm:tracking-normal text-md font-bold">
							Worry Free Returns
						</h1>
						<p className="sm:text-sm  text-justify  sm:text-pretty text-sm  my-2 text-gray-800 group-hover:text-black   ">
							Not happy? Return or exchange your purchase for free within 30
							days .
						</p>
					</div>
					<div className="w-[30%]">
						<img
							className=" w-full object-contain "
							src="https://cdn-icons-png.flaticon.com/128/11153/11153363.png"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ServiceComponent
