/** @format */

import React, { useContext } from "react";
import { SneakerContext } from "../service/store/SneakerContextProvider";
import useFetch from "../hook/useFetch";
import { LatestService } from "../service/popular.service";

const FavouritlistComponent = () => {
	const { fav, toggleFav } = useContext(SneakerContext);
	const { data, loading } = useFetch(LatestService, "Latest");

	
	const filterDyanmicFav = fav?.filter((item) => item.id == data?.id);

	console.log(filterDyanmicFav);

	return (
		<div className=" mt-4">
			{fav?.map((item) => (
				<div
					key={item.id}
					className=" border mb-2 shadow-md hover:shadow-slate-500 duration-300   group px-4 relative rounded-sm sm:rounded-md bg-slate-200 ">
					<img
						className=" group-hover:scale-105 group-hover:pb-2 duration-700  mx-auto text-center  object-cover "
						src={item.image}
						alt=""
					/>

					<p className="bg-white bottom-0 left-0 sm:w-[25%] w-[45%] text-black p-2 absolute">
						$ {item.price}
					</p>

					<div className="flex flex-col items-center gap-2 absolute top-1 right-0 sm:top-2 sm:right-2">
						<button className=" ">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className=" w-8 h-8 sm:w-9 border active:scale-95 border-slate-400 p-1  duration-700 animate__zoomIn   animate__animated  text-gray-900 rounded-sm     sm:h-9">
								<path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
							</svg>
						</button>

						<button onClick={() => toggleFav(item.id)} className=" ">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="sm:w-9  w-8 h-8 border active:scale-95 border-slate-400 p-1  duration-700 animate__zoomIn   animate__animated  text-gray-900 rounded-sm     sm:h-9">
								<path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
								<path
									fillRule="evenodd"
									d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.133 2.845a.75.75 0 0 1 1.06 0l1.72 1.72 1.72-1.72a.75.75 0 1 1 1.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 1 1-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 1 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Z"
									clipRule="evenodd"
								/>
							</svg>
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default FavouritlistComponent;
