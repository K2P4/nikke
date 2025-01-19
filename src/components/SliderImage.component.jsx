/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SliderImageComponent = () => {
	const nav = useNavigate();
		const [showAnimation, setShowAnimation] = useState(false);


	const handleShop = () => {
		nav("/collections");
	};

	useEffect(() => {
		const handleScroll = () => {
			const serviceComponent = document.getElementById("slide1");
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
		<div>
			<div
				id="slide1"
				className={`w-full  shadow-md ${
					showAnimation &&
					"animate__animated  animate__slideInRight  duration-1000"
				} h-auto sm:h-screen flex justify-center  sm:my-24 flex-wrap  m-auto`}>
				<div className="group sm:w-[50%] flex  relative  h-[320px] sm:h-[50%] ">
					<img
						className="w-full object-cover   group-hover:opacity-85 duration-1000"
						src="https://media.istockphoto.com/id/1478466587/photo/legs-two-male-runners-running-city-marathon-race-athletes-jogging-on-asphalt-road-summer.webp?b=1&s=170667a&w=0&k=20&c=4-CnhoAtXMHXlwoPce8OwRvTc9qtEialWZi9ebFlvMU="
						alt=""
					/>
					<button
						onClick={handleShop}
						className=" hidden sm:text-base text-md animate__zoomIn animate__animated  group-hover:flex  absolute  text-center left-[20%] top-[45%] sm:left-[35%] sm:top-[40%] duration-1000 bg-white font-semibold text-black px-5 py-2 rounded-lg  hover:bg-slate-50 active:scale-90">
						READY TO RUN
					</button>
				</div>
				<div className="group sm:w-[50%] flex  relative h-[320px] sm:h-[50%] ">
					<img
						className="w-full  object-cover   group-hover:opacity-85 duration-1000"
						src="https://media.istockphoto.com/id/1407281632/photo/black-male-shopping.webp?b=1&s=170667a&w=0&k=20&c=OX4NxyVA7bKbWqO2YP3TiUPs-iGASNmk7JsZA8lpvzM="
						alt=""
					/>
					<button
						onClick={handleShop}
						className=" hidden sm:text-base text-md animate__zoomIn animate__animated  group-hover:flex  absolute  text-center left-[20%] top-[45%] sm:left-[35%] sm:top-[40%] duration-1000 bg-white font-semibold text-black px-5 py-2 rounded-lg  hover:bg-slate-50 active:scale-90">
						READY TO SHOP
					</button>
				</div>

				<div className="group sm:w-[50%] flex  relative  h-[320px] sm:h-[50%] ">
					<img
						className="w-full  object-cover   group-hover:opacity-85 duration-1000"
						src="https://media.istockphoto.com/id/1494548189/photo/indonesian-woman-shopping-sport-shoes-in-shoes-store.webp?b=1&s=170667a&w=0&k=20&c=is0nIxQ443YwZr0V2UWOA3Zer_2llke8Vz6tABrKpkA="
						alt=""
					/>
					<button
						onClick={handleShop}
						className="  hidden sm:text-base text-md animate__zoomIn animate__animated  group-hover:flex  absolute  text-center left-[20%] top-[45%] sm:left-[35%] sm:top-[40%] duration-1000 bg-white font-semibold text-black px-5 py-2 rounded-lg  hover:bg-slate-50 active:scale-90">
						READY TO BUY
					</button>
				</div>

				<div className="group sm:w-[50%] flex  relative  h-[320px] sm:h-[50%] ">
					<img
						className="w-full object-cover   group-hover:opacity-85 duration-1000"
						src="https://media.istockphoto.com/id/1516440402/photo/business-travel-concept-man-walking-on-city-street-with-yellow-suitcase-cabin-bag.webp?b=1&s=170667a&w=0&k=20&c=F3gYIVd3eN6zHyc6ZXTEKOJQOmzbX2R1pF_xG6kF-MA="
						alt=""
					/>
					<button
						onClick={handleShop}
						className=" hidden sm:text-base text-md animate__zoomIn animate__animated  group-hover:flex  absolute  text-center left-[20%] top-[45%] sm:left-[35%] sm:top-[40%] duration-1000 bg-white font-semibold text-black px-5 py-2 rounded-lg  hover:bg-slate-50 active:scale-90">
						READY TO SMART
					</button>
				</div>
			</div>
		</div>
	);
};

export default SliderImageComponent;
