/** @format */

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetProfileQuery } from "../../service/endpoints/AuthEndpoints";

const AuthGuard = ({ check, children, token }) => {
	const { data, isError, isLoading } = useGetProfileQuery();

	const nav = useNavigate();

	useEffect(() => {
		if (check) {
			localStorage.setItem("token", JSON.stringify(token));
		} else if (localStorage.getItem("token")) {
			nav("/dashboard");
		} else if (!localStorage.getItem("token")) {
			nav("/");
		}
	}, [check, data, isError]);

	return (
		<div>
			<>{children}</>
		</div>
	);
};

export default AuthGuard;
