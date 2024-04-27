/** @format */

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { SneakerContext } from "../service/store/SneakerContextProvider";
const EmptyComponent = () => {
	const nav = useNavigate();
	const { setToggle, SetHiddenIcon, setCartToggle, cartToggle } =
		useContext(SneakerContext);

	const handleBack = () => {
		setToggle(false);
		nav("/dashboard/collections");
		setCartToggle(!cartToggle);
	};

	return (
		<div>
			<div className=" mt-20 ">
				<div className="mx-auto    select-none  flex flex-col  gap-2 items-center align-middle">
					<img
						className=" sm:w-full sm:h-full  sm:object-contain object-cover h-[330px]  "
						src="https://ouch-cdn2.icons8.com/3bX0fX3Ny1iN8gWkpKJvKOs7ag94ZyjmBXa-vbPZgSw/rs:fit:368:348/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODIy/LzA0ZTgyOGFjLWQ1/MjEtNDZkMC05ZjVj/LWIzYTM2MzllZmVm/Zi5wbmc.png"
						alt=""
					/>
					<h5 className="   text-xs  tracking-tighter sm:tracking-normal  mt-20 sm:mt-14 sm:text-md mx-auto text-center font-medium text-gray-700  ">
						There Has No Item .{" "}
						<span
							onClick={handleBack}
							className="text-orange-500 select-none   duration-300 active:scale-95 border-b-orange-400 pb-1 border-b  ">
							Buy Something
						</span>
					</h5>
				</div>
			</div>
		</div>
	);
};

export default EmptyComponent;
