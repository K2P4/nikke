/** @format */

import React, { useContext, useEffect, useState } from "react";

import { motion } from "framer-motion";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";

import { SneakerContext } from "../service/store/SneakerContextProvider";

const Home2Component = ({ item: { id, image, name, price } }) => {
	const [added, setAdded] = useState(false);
	const stars = Array.from({ length: 5 }, (_, index) => index);

	const { addFav } = useContext(SneakerContext);

	

	const toggleFavourite = () => {
		const newFav = {
			id: id,

			name: name,
			image: image,
			price: price,
		};
		addFav(newFav);
		setAdded(!added);
	};
	return (
		<section key={id} className="sm:w-[30%] w-full flex flex-row ">
			<motion.div
				key={id}
				whileInView={{ opacity: 1 }}
				initial={false}
				whileHover={{
					opacity: 1,
					scale: 1.04,
					boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.9)",
				}}
				className="   sm:block  hidden w-full group  relative shadow-lg  h-auto py-2 px-4 bg-slate-200 rounded-lg hover:shadow-gray-500  duration-200">
				<div className="flex flex-col items-center align-middle ">
					<img
						className=" w-full h-[90px] sm:-rotate-45 sm:h-[200px] rounded-md object-contain "
						src={image}
						alt=""
					/>

					<button
						className=" active:scale-95 absolute left-5"
						onClick={toggleFavourite}
						disabled={added}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className={`sm:w-12  w-7 h-7 ${
								added ? "flex" : "hidden"
							}  group-hover:flex duration-700  hover:border-0   animate__animated  animate__zoomIn text-orange-500 rounded-sm p-2    sm:h-12`}>
							<path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
						</svg>
					</button>

					<h1 className="sm:text-lg  text-xs  sm:h-16 text-center font-semibold">
						{name}
					</h1>
					<p className="sm:text-md  text-xs mt-2 sm:mt-0 font-medium text-gray-700 ">
						$ {price}
					</p>
					<div className="flex items-center gap-1">
						{stars.map((star) => (
							<svg
								key={star}
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="sm:w-6 w-5 h-5 text-orange-400 my-2 sm:h-6">
								<path
									fillRule="evenodd"
									d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
									clipRule="evenodd"
								/>
							</svg>
						))}
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default Home2Component;
