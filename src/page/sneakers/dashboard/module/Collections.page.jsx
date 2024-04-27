/** @format */

import React, { useState } from "react";
import { SneakerContext } from "../../../../service/store/SneakerContextProvider";

import { useContext } from "react";
import {
	CollectionLoadingComponent,
	ProductsComponent,
} from "../../../../components";
import { Input } from "@/components/ui/input";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const CollectionsPage = () => {
	const { data, loading } = useContext(SneakerContext);
	const [filteredProducts, setFilteredProducts] = useState(data);
	const [toggleProduct, setToggleProduct] = useState(false);
	const [newProducts, setNewProducts] = useState([]);

	const handleSearch = (query) => {
		const filtered = data?.filter((product) =>
			product.name.toLowerCase().includes(query.toLowerCase())
		);
		setFilteredProducts(filtered);
	};

	const handleFilter = (newStatus) => {
		const filterNew = data?.filter((item) => item?.status == newStatus);
		setNewProducts(filterNew);
		setToggleProduct(true);
	};

	console.log(newProducts);

	

	const collection = Array.from({ length: 18 }, (_, index) => index);

	return (
		<div className=" ">
			{loading ? (
				<div className="flex mx-auto  flex-wrap justify-center items-center align-middle gap-8  my-3">
					{collection?.map((item) => (
						<CollectionLoadingComponent key={item} />
					))}
				</div>
			) : (
				<div className="">
					<div className="my-6 flex justify-between">
					<div className="sm:w-[35%]  w-[45%] relative">
							<Input
								className=" focus:border-0   border-gray-700 px-10   sm:px-14  rounded-full "
								type="email"
								onChange={(e) => handleSearch(e.target.value)}
								placeholder="Search"
							/>

							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6  absolute top-2 left-4  h-6">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
								/>
							</svg>
						</div>

						<DropdownMenu>
							<DropdownMenuTrigger>
								<button className="flex gap-1 border items-center px-4 py-2 border-black  rounded-lg">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-6 h-6">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
										/>
									</svg>
									Filter
								</button>
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<DropdownMenuSeparator />
								<DropdownMenuItem onClick={() => handleFilter("new")}>
									New
								</DropdownMenuItem>
								<DropdownMenuItem onClick={() => handleFilter("discount")}>
									Discount
								</DropdownMenuItem>
								<DropdownMenuItem onClick={() => handleFilter("most")}>
									Most
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>

					<div className="flex my-3 flex-wrap gap-10 text-center justify-center ">
						{toggleProduct ? (
							<>
								{newProducts?.map((item) => (
									<ProductsComponent item={item} key={item.id} />
								))}
							</>
						) : (
							<>
								{filteredProducts?.map((item) => (
									<ProductsComponent item={item} key={item.id} />
								))}
							</>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default CollectionsPage;
