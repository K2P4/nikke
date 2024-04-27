/** @format */

import { sneakerApi } from "./baseUrl";

export const PopularService = async (arg) => {
	try {
		const { data } = await sneakerApi.get(arg);

		return data;
	} catch (e) {
		throw new Error(e.message);
	}
};

export const LatestService = async (arg) => {
	try {
		const { data } = await sneakerApi.get(arg);

		return data;
	} catch (e) {
		throw new Error(e.message);
	}
};



