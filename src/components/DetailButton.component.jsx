// /** @format */

// import React, { useContext } from "react";
// import { SneakerContext } from "../service/store/SneakerContextProvider";

// const DetailButtonComponent = () => {
// 	const { number, added, setAdded, addCartSneaker, cart } =
// 		useContext(SneakerContext);

	



// 	return (
// 		<div className="">
// 			<button
// 				disabled={added}
// 				onClick={toggleCart}
// 				className=" bg-orange-500  hover:bg-orange-600 active:scale-90 duration-500 transition-transform  py-2 px-11 rounded-lg  ">
// 				<div className="flex items-center  mx-auto  font-semibold  gap-2 text-white ">
// 					<svg
// 						xmlns="http://www.w3.org/2000/svg"
// 						fill="none"
// 						viewBox="0 0 24 24"
// 						strokeWidth={1.5}
// 						stroke="currentColor"
// 						className="w-5 h-5">
// 						<path
// 							strokeLinecap="round"
// 							strokeLinejoin="round"
// 							d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
// 						/>
// 					</svg>
// 					<p className="tracking-wide duration-500 transition-transform ">
// 						Add To Cart
// 					</p>
// 				</div>
// 			</button>
// 		</div>
// 	);
// };

// export default DetailButtonComponent;
