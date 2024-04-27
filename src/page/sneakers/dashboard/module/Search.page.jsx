/** @format */

import React, { useContext } from "react";
import { SneakerContext } from "../../../../service/store/SneakerContextProvider";

const SearchComponent = () => {
	const { filterCart } = useContext(SneakerContext     );

	console.log(filterCart);
	return (
		<div className="w-[85%] mt-8 mx-auto ">
			{filterCart?.map((item) => (
				<div
					key={item.id}
					className="flex shadow-md my-7 justify-center gap-5 items-center ">
					<img
						className="w-[50%] rounded-md select-none object-cover h-[280px] "
						src={item.images.image1}
						alt=""
					/>

					<div className="w-[60%] ">
						<div>
							<h3 className="text-3xl font-bold text-orange-500 ">
								{item.name}
							</h3>

							<h4 className=" my-3 text-xl  text-gray-800  font-medium tracking-wide  ">
								{item?.title}
							</h4>
							<p className="tracking-wide  text-justify  text-md font-medium mt-7  text-gray-400 ">
								{item?.description}
							</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default SearchComponent;
