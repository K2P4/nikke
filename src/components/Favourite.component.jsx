/** @format */

import React, { useContext } from "react";

import { SneakerContext } from "../service/store/SneakerContextProvider";
import EmptyFavComponent from "./EmptyFav.component";
import FavouritlistComponent from "./Favouritlist.component";

const FavouriteComponent = () => {
	const { fav } = useContext(SneakerContext);
	
	return (
		<div>
			{fav?.length == 0 && <EmptyFavComponent />}

			{fav?.length > 0 && <FavouritlistComponent />}
		</div>
	);
};

export default FavouriteComponent;
