/** @format */

import React, { useEffect, useState } from "react";

const useFetch = (setFunction, arg) => {
	const [apiData, setData] = useState({
		data: null,
		loading: true,
		error: null,
	});

	// const apiFunction = async (formData) => {
	// 	setData((pre) => ({ ...pre, loading: true }));
	// 	const res = await setFunction(formData);
	// 	console.log(res);


	// 	if (res.error) {
	// 		setData((pre) => ({ ...pre, loading: false, error: res.msg }));
	// 	} else {
	// 		setData((pre) => ({ ...pre, loading: false, data: res.data }));
	// 	}
	// };

	useEffect(() => {
		(async () => {
			try {
				const data = await setFunction(arg);
				setTimeout(() => {
					setData((pre) => {
						return {
							error: null,
							loading: false,
							data: data,
						};
					});
				}, 2000);
			} catch (e) {
				setData((pre) => {
					return {
						error: e.message,
						loading: false,
						data: null,
					};
				});
			}
		})();
	}, []);

	

	return apiData;
};

export default useFetch;
