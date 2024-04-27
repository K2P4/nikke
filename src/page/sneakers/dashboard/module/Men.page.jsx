/** @format */

import React from "react";
import {
	CollectionLoadingComponent,
	ProductsComponent,
} from "../../../../components";
import useFetch from "../../../../hook/useFetch";
import { MenSneakerService } from "../../../../service/men.service";

const MenPage = () => {
	const { data, loading } = useFetch(MenSneakerService, "men");
	const menProduct = Array.from({ length: 6 }, (_, index) => index);

	return (
		<div className=" ">
			{loading ? (
				<div className="flex mx-auto w-[90%]  flex-wrap justify-center items-center align-middle gap-8  my-3">
					{menProduct.map((item) => (
						<CollectionLoadingComponent key={item} />
					))}
				</div>
			) : (
				<div className="flex flex-wrap w-full mx-auto gap-10 text-center justify-center my-3">
					{data.map((item) => (
						<ProductsComponent item={item} key={item.id} />
					))}
				</div>
			)}
		</div>
	);
};

export default MenPage;
