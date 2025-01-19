/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormComponent from "../../components/Form.component";
import { ButtonComponent } from "../../components";
import * as yup from "yup";
import { toast } from "sonner";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSignupMutation } from "../../service/endpoints/AuthEndpoints";

const RegisterPage = () => {
	const [fun, data] = useSignupMutation();

	const nav = useNavigate();

	const initialValue = {
		name: "",
		email: "",
		password: "",
		password_confirmation: "",
	};

	const validationSchema = yup.object({
		name: yup
			.string()
			.min(2, "name should be longer than 2")
			.required("name is required"),

		email: yup
			.string()
			.required("email is required")
			.email("invalid email format"),
		password: yup
			.string()
			.min(5, "password must be at least 5 characters")
			.matches(
				/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!#%*?&]/,
				"password must contain at least one letter, one number, and one special character"
			)
			.required("Password is required"),

		password_confirmation: yup
			.string()
			.required("confirm password is required")
			.oneOf(
				[yup.ref("password"), null],

				"password confirm should be match with password"
			),
	});

	const handleSubmit = async (value) => {
      	const response =await fun(value);
		if (response?.data.success) {
			nav("/");
		}else{
			alert('Try again your information is wrong!')
		}

		toast.success("Register Successfully");
	};

	return (
		<div className="">
			<div className=" Mobile  md:Center ">
				<Formik
					validateOnChange={false}
					validateOnBlur={false}
					validationSchema={validationSchema}
					initialValues={initialValue}
					onSubmit={handleSubmit}>
					{({ isSubmitting, handleChange, handleBlur, values }) => (
						<Form>
							<div className=" border  sm:p-5 p-4 rounded-md border-gray-300">
								<div className="flex justify-between items-center ">
									<h1 className=" sm:text-2xl text-xl font-bold text-orange-400 ">
										Register Your Account
									</h1>
									<p className="font-medium text-gray-600 sm:text-sm  text-xs">
										Already have an account?{" "}
										<span
											onClick={() => nav("/")}
											className=" active:scale-75  select-none underline text-orange-400 ">
											Sign in
										</span>
									</p>
								</div>

								<FormComponent
									name={"name"}
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.name}
									type={"text"}
									label={"Enter Your Username "}
								/>
								<ErrorMessage
									component={"p"}
									className="text-red-400 text-xs mt-1"
									name="name"
								/>

								<FormComponent
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.email}
									name={"email"}
									type={"email"}
									label={"Enter Your Email "}
									placeholder="pty@gmail.com"
								/>
								<ErrorMessage
									component={"p"}
									className="text-red-400 text-xs mt-1"
									name="email"
								/>

								<FormComponent
									name={"password"}
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.password}
									type={"password"}
									label={"Enter Your password "}
								/>
								<ErrorMessage
									component={"p"}
									className="text-red-400 text-xs mt-1"
									name="password"
								/>

								<FormComponent
									name={"password_confirmation"}
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.password_confirmation}
									type={"password"}
									label={"Confirm Password "}
								/>
								<ErrorMessage
									component={"p"}
									className="text-red-400 text-xs mt-1"
									name="password_confirmation"
								/>

								<ButtonComponent
									disabled={isSubmitting}
									type={"submit"}
									name={"Register"}
									label={"Register"}
								/>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};

export default RegisterPage;
