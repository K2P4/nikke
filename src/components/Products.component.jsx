/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ProductsComponent = ({ item }) => {
	const [hoveredBox, setHoveredBox] = useState(null);
	const nav = useNavigate();

	const handleHover = (boxIndex) => {
		setHoveredBox(boxIndex);
	};


	const handleDetail = () => {
		nav(`/dashboard/detail/${item.id}`, { state: { item } });
	};

	return (
		<div className=" ">
			<div key={item.id} className="    ">
				<motion.div
					whileInView={{ opacity: 1 }}
					initial={false}
					whileHover={{
						opacity: 1,
						scale: 1.03,
					}}
					className="group relative">
					<img
						className=" group-hover:shadow-gray-500 shadow-lg      bg-gray-100   group-hover:opacity-85 group-hover:rotate-2    p-1    hover:transition-transform hover:duration-700    group-hover:object-center animate__animated animate__zoomIn  duration-500 transition-shadow  rounded-lg  w-[250px] object-cover  h-[250px] "
						src={item?.images.image1}
						alt=""
					/>

					<button
						onClick={handleDetail}
						className=" bg-slate-100 hidden  duration-700 group-hover:flex rounded-full  absolute left-28  top-24  animate__animated  animate__zoomIn z-20 active:scale-95   ">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-12  p-2 text-orange-500 mx-auto text-center h-12  ">
							<path
								fillRule="evenodd"
								d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
				</motion.div>
				<div className="flex text-sm mt-1 items-center justify-between font-medium text-gray-500 ">
					<p className="  tracking-wide leading-tight  text-wrap  ">
						{item?.name}
					</p>

					<p>${item?.price}</p>
				</div>
			</div>
		</div>
	);
};

export default ProductsComponent;
