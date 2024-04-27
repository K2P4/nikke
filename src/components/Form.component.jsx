/** @format */

import React from "react";

const FormComponent = ({ name, type, label, placeholder = "", onChange }) => {
	return (
		<div className="flex  flex-col   space-y-2 mb-2 ">
			<label className="mt-4 font-medium  tracking-wide " htmlFor={name}>
				{label}
			</label>
			<input
				className="border-orange-400   text-gray-800   focus:ring-orange-500 border p-2 rounded-md   focus:border-0  "
				type={type}
				required
				onChange={onChange}
				id={name}
				name={name}
				placeholder={placeholder}
			/>
		</div>
	);
};

export default FormComponent;
