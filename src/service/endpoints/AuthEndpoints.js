/** @format */

import { Apiservice } from "../ApiService";

const authEndpoints = Apiservice.injectEndpoints({
	endpoints: (builder) => ({
		Signin: builder.mutation({
			query: (arg) => ({
				url: "/user",
				method: "GET",
				body: arg,
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

export const { useSigninMutation, useSignupMutation, useGetProfileQuery,useLogoutMutation } =
	authEndpoints;
