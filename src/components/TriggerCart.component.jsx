/** @format */

import React, { useContext, useEffect, useRef, useState } from "react";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { SneakerContext } from "../service/store/SneakerContextProvider";
import AddtoCartPage from "../page/sneakers/dashboard/module/AddtoCart.page";

const TriggerCartComponent = () => {
	const { cart } = useContext(SneakerContext);

	return (
		<Sheet className="">
			<SheetTrigger>
				<div className="relative flex items-center select-none gap-3 sm:gap-0 duration-500 ">
					<button type="button" className="">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className=" w-7 select-none active:scale-90 h-7">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
							/>
						</svg>
					</button>
					<span className="w-4 absolute top-0 -end-1  h-4  select-none  text-center mx-auto text-xs font-semibold text-white bg-orange-500 rounded-full ">
						{cart?.length}
					</span>
				</div>
			</SheetTrigger>

			<SheetContent className="overflow-scroll">
				<SheetHeader>
					<SheetTitle className="sm:text-base text-md text-left ">
						<div className="border-b-gray-300   border-b pb-3 ">
							<div className="flex gap-1   items-center  ">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 text-orange-500 h-6">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
									/>
								</svg>
								<h2 className=" text-xs font-semibold sm:text-1xl sm:tracking-normal ">
									{" "}
									List Of Added Sneaker
								</h2>
							</div>
						</div>
					</SheetTitle>

					<AddtoCartPage />
				</SheetHeader>
			</SheetContent>
		</Sheet>
	);
};

export default TriggerCartComponent;
