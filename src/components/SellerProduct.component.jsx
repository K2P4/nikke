/** @format */

import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SneakerContext } from "../service/store/SneakerContextProvider";
import { useNavigate } from "react-router-dom";

const SellerProductComponent = ({ item: { id, image, name, price } }) => {
	const { addFav } = useContext(SneakerContext);
	const [added, setAdded] = useState(false);

	const nav = useNavigate();


	
	const handleDetail = () => {
		nav(`/dashboard/collections`);
	};

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
		<div className=" w-full  hover:shadow-slate-500 hover:opacity-95  h-[360px]  sm:h-[350px] border border-slate-200 rounded-lg group relative flex flex-col items-center shadow-xl shadow-slate-400 ">
			<img
				className="mx-auto w-full h-[50%] rounded-sm bg-slate-200  object-contain text-center"
				src={image}
				alt=""
			/>

			<button className=" text-xs duration-700 hover:bg-orange-500 transition-transform rounded-xl px-3 py-1 text-white font-medium  tracking-wide  hidden group-hover:flex bg-orange-400 top-5 left-5 animate__zoomIn  animate__animated absolute">
				NEW
			</button>

			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				onClick={toggleFavourite}
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className={`w-6 absolute ${
					added ? "text-orange-500  " : "flex"
				} top-5 duration-500 active:scale-90 right-5 h-6`}>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
				/>
			</svg>

			<h1 className="text-center text-xs sm:h-16 sm:text-lg text-gray-900 font-bold sm:my-2">
				{name}
			</h1>

			<div className=" flex items-center  sm:gap-16  justify-between ">
				<div className="flex flex-col justify-start ">
					<p className="sm:text-md text-sm tracking-wide font-medium ">Price</p>
					<p className="sm:text-md text-sm  text-gray-700 tracking-wide  ">
						$ {price}
					</p>
				</div>

				<button className="bg-orange-500 rounded-lg  active:scale-90 ">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						onClick={handleDetail}
						className="  w-8 sm:w-14 text-white px-4 py-2 ">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default SellerProductComponent;
