/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SliderImage3Component = () => {
		const [showAnimation, setShowAnimation] = useState(false);

	const nav = useNavigate();
	const handleShop = () => {
		nav("/collections");
	};

	useEffect(() => {
		const handleScroll = () => {
			const serviceComponent = document.getElementById("slide3");
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
			id="slide3"
			className={`flex items-center flex-col sm:flex-row  sm:flex-wrap my-20  ${
				showAnimation &&
				"animate__animated  animate__slideInRight  duration-1000"
			} w-full h-auto sm:h-screen relative justify-center sm:mb-20 `}>
			<div className="sm:w-[50%] p-5 w-full h-[300px] sm:px-10 sm:py-10 sm:rounded-e-none  sm:rounded-lg border border-black sm:h-[50%]">
				<h1 className=" text-3xl sm:text-4xl mb-1 font-semibold ">QUALITY</h1>
				<h1 className="font-medium text-md sm:text-lg">AND AUTHENTICITY</h1>

				<p className="sm:text-md text-sm my-4 tracking-wide text-gray-800">
					We emphasize the importance of selling genuine ,high-quality sneakers
					.
				</p>
				<button className="border hover:bg-black hover:text-white duration-700 border-black rounded-md px-4 py-2">
					LEARN MORE
				</button>
			</div>

			<div className="sm:w-[50%]  w-full relative h-[300px]  overflow-hidden sm:rounded-s-none sm:rounded-lg border border-black sm:h-[50%]">
				<img
					className="w-full absolute object-contain sm:top-0 left-12  top-16 sm:left-36 "
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHaEYh_KsuJa39QTjDCbdNjnzGelZglnJeUQ&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO6lfnGG-KLEE-QSGuOCnSuOamTBKUHWIQMEJ66_iI4tQemkubkYLKzSUv3ef9L_c6SjE&usqp=CAU"
				/>
			</div>

			<div className="sm:w-[50%] relative  w-full h-[300px] hidden sm:block  overflow-hidden rounded-e-none rounded-lg border border-black sm:h-[50%]">
				<img
					className="w-full absolute  object-contain top-16 right-12 sm:top-0 sm:right-36 "
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Un5damdbmWaRtYFrrjBkxzF2mvGMzraD6g&s"
				/>
			</div>

			<div className="sm:w-[50%] p-5 w-full sm:px-10 sm:py-10 sm:rounded-s-none  sm:rounded-lg border border-black h-[50%]">
				<h1 className=" text-3xl sm:text-4xl mb-1 font-semibold ">EXCLUSIVE RELEASES</h1>
				<h1 className="font-medium  text-md sm:text-lg">AND COLLABORATIONS</h1>

				<p className="sm:text-md text-sm my-4 tracking-wide text-gray-800">
					We Collaborate with popular artists , celebrities or other brands to
					launch limited -edition sneakers exclusive releases.
				</p>
				<button className="border hover:bg-black hover:text-white duration-700 border-black rounded-md px-4 py-2">
					LEARN MORE
				</button>
			</div>

			<div className="sm:w-[50%] relative  w-full h-[300px] block sm:hidden  overflow-hidden rounded-e-none rounded-lg border border-black sm:h-[50%]">
				<img
					className="w-full absolute  object-contain top-16 right-12 sm:top-0 sm:right-36 "
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Un5damdbmWaRtYFrrjBkxzF2mvGMzraD6g&s"
				/>
			</div>
		</div>
	);
};

export default SliderImage3Component;
