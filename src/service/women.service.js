/** @format */

import { sneakerApi } from "./baseUrl";

export const WomenSneakerService = async (arg) => {
	try {
		const { data } = await sneakerApi.get(arg);

		return data;
	} catch (e) {
		throw new Error(e.message);
	}
};
