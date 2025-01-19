/** @format */

import { ContactService } from "../ApiService";

export const ContactApi = ContactService.injectEndpoints({
	endpoints: (builder) => ({
		create: builder.mutation({
			query: (arg) => ({
				url: "/contact",
				method: "POST",
				body: arg,
			}),
			invalidatesTags: ["contact"],
		}),
	}),
});

export const { useCreateMutation } = ContactApi;