/** @format */

import { Apiservice } from "../ApiService";

const authEndpoints = Apiservice.injectEndpoints({
	endpoints: (builder) => ({

		Signin: builder.query({
			query: () => ({
				url: "/user",
				method: "GET",
			}),
		}),


		Signup: builder.mutation({
			query: (arg) => ({
				url: "/user",
				method: "POST",
				body: arg,
			}),
		}),

		getProfile: builder.query({
			query: () => ({
				url: "/user",
				method: "GET",
			}),
		}),

		logout: builder.mutation({
			query: () => ({
				url: "/user",
				method: "POST",
			}),
			invalidatesTags: ["auth"],
		}),
	}),
});

export const { useSigninQuery, useSignupMutation, useGetProfileQuery,useLogoutMutation } =
	authEndpoints;
