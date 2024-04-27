/** @format */

import axios from "axios";
import { sneaker_url } from "../lib/constant";

export const sneakerApi = axios.create({
	baseURL: sneaker_url,
	// headers: {
	//
	// },
});

