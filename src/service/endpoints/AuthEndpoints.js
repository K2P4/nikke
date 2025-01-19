/** @format */

import { Apiservice } from "../ApiService";

const authEndpoints = Apiservice.injectEndpoints({
	endpoints: (builder) => ({

		Signin: builder.mutation({
			query: (arg) => ({
				url: "/login",
				method: "POST",
				body: arg,
			}),
			invalidatesTags: ["auth"],
		}),


		Signup: builder.mutation({
			query: (arg) => ({
				url: "/register",
				method: "POST",
				body: arg,
			}),
			invalidatesTags: ["auth"],
		}),

		getProfile: builder.query({
			query: () => ({
				url: "/user-profile",
				method: "GET",
			}),
		}),

		logout: builder.mutation({
			query: () => ({
				url: "/logout",
				method: "POST",
			}),
			invalidatesTags: ["auth"],
		}),
	}),
});

export const { useSigninMutation, useSignupMutation, useGetProfileQuery,useLogoutMutation } =
	authEndpoints;
