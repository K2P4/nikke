/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SliderImage2Component = () => {
	const nav = useNavigate();
		const [showAnimation, setShowAnimation] = useState(false);

	const handleWomen = () => {
		nav("/women");
	};

	const handleMen = () => {
		nav("/men");
	};

	const handleUnisex = () => {
		nav("/collections");
	};

	useEffect(() => {
		const handleScroll = () => {
			const serviceComponent = document.getElementById("slide2");
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
			id="slide2"
			className={`flex justify-between  ${
				showAnimation &&
				"animate__animated  animate__slideInRight my-20  sm:my-24  duration-1000"
			} flex-col`}>
			<h1 className=" text-gray-800 bodyFont ms-5   border-b-orange-300 border-b sm:w-[20%]  text-3xl header font-bold tracking-wide ">
				Shop By Category
			</h1>
			<div className="w-full flex  flex-col sm:flex-row items-center   mt-8 h-full">
				<div className="sm:w-[35%]  hover:opacity-90 duration-500 relative  ">
					<img
						className=" w-full h-[550px] object-cover "
						src="https://i.pinimg.com/564x/4f/c8/da/4fc8da507ecf8b13733c9a1d218a937f.jpg"
						alt=""
					/>

					<button
						onClick={handleWomen}
						className="flex items-center duration-300 gap-1 absolute bottom-5 left-5 active:scale-95 text-lg  font-semibold text-white">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
							/>
						</svg>
						SHOP WOMEN
					</button>
				</div>
				<div className="sm:w-[35%] hover:opacity-90 duration-500 relative  ">
					<img
						className=" w-full h-[550px] object-cover "
						src="https://i.pinimg.com/564x/43/14/4e/43144ec2c25770bb8bf766c7f547f62c.jpg"
						alt=""
					/>

					<button
						onClick={handleMen}
						className="flex items-center duration-300 gap-1 absolute bottom-5 left-5 active:scale-95 text-lg  font-semibold text-white">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
							/>
						</svg>
						SHOP MEN
					</button>
				</div>

				<div className="sm:w-[35%]  hover:opacity-90 duration-500 relative  ">
					<img
						className=" w-full h-[550px] object-cover "
						src="https://i.pinimg.com/564x/5b/8a/ad/5b8aad7abf708afa4f602d168a234e69.jpg"
						alt=""
					/>

					<button
						onClick={handleUnisex}
						className="flex items-center duration-300 gap-1 absolute bottom-5 left-5 active:scale-95 text-lg  font-semibold text-white">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
							/>
						</svg>
						SHOP UNISEX
					</button>
				</div>
			</div>
		</div>
	);
};

export default SliderImage2Component;
