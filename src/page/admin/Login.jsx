/** @format */

import React, { useContext, useEffect, useState } from "react";
import { SneakerContext } from "../../service/store/SneakerContextProvider";
import { useNavigate } from "react-router-dom";
import FormComponent from "../../components/Form.component";
import { ButtonComponent, ErrorComponent } from "../../components";
import * as yup from "yup";
import { toast } from "sonner";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSigninQuery } from "../../service/endpoints/AuthEndpoints";
import AuthGuard from "../../components/guard/AuthGuard";

const AdminPage = () => {
	const {data} = useSigninQuery();
	const [check, setCheck] = useState();
	const nav = useNavigate();
	

	const initailValue = {
		email: "",
		password: "",
	};

	const validationSchema = yup.object({
		email: yup
			.string()
			.required("email is required")
			.email("invalid email format"),
		password: yup
			.string()
			.required("password is required")
			.min(8, "password shold be 8 letters"),
	});

	useEffect(() => {
		if (localStorage.getItem("token")) {
			nav("/dashboard");
			
		}
	}, [data]);

	const handleSubmit = async (value, action) => {
		console.log(value,data);

		const filterData = data?.filter((item) => item?.email == value.email);
		console.log(filterData,data);

		if (filterData[0].password == value.password) {
				localStorage.setItem("token", JSON.stringify(value));
				nav("/dashboard");
				toast.success("Login Successfully")
		
		} else {
			toast.success("Password Incorrect Try Again !")
		}

		action.reset();
		



		

		
		
	};

	return (
		<div className="">
			<AuthGuard check={data?.data?.success} token={data?.data?.token}>
				<Formik
					validateOnChange={false}
					validateOnBlur={false}
					validationSchema={validationSchema}
					initialValues={initailValue}
					onSubmit={handleSubmit}>
					{({ isSubmitting, handleChange, handleBlur, values }) => (
						<Form>
							<div className=" Mobile m-auto md:Center ">
								<div className="   sm:p-6 p-5 rounded-lg border">
									<h1 className=" sm:text-2xl  tex-xl  text-orange-400 font-bold ">
										Log In Your Account
									</h1>

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

									<ButtonComponent
										disabled={isSubmitting}
										type={"submit"}
										name={"login"}
										label={"LOG IN"}
									/>

									<p className="  mt-5 font-medium text-gray-700 sm:text-sm  text-xs">
										You Don't Have Account Register{" "}
										<span
											onClick={() => nav("/register")}
											className=" active:scale-75  select-none underline text-orange-400 ">
											Register
										</span>
									</p>
								</div>
							</div>
						</Form>
					)}
				</Formik>
			</AuthGuard>
		</div>
	);
};

export default AdminPage;

// <div className=" flex justify-center      bg-slate-200 h-screen ">
// 		<div className=" bg-slate-100 my-auto  flex justify-center  py-3 border mx-auto  h-[70%] w-[40%] ">
// 			<form
// 				onSubmit={formSubmit}
// 				action=""
// 				className=" my-auto flex flex-col  gap-5  ">
// 				<svg
// 					xmlns="http://www.w3.org/2000/svg"
// 					fill="none"
// 					viewBox="0 0 24 24"
// 					strokeWidth={1.5}
// 					stroke="currentColor"
// 					className="w-14 h-14  text-center mx-auto ">
// 					<path
// 						strokeLinecap="round"
// 						strokeLinejoin="round"
// 						d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
// 					/>
// 				</svg>

// 				<div className=" select-none  w-full flex  mt-auto   items-center gap-11">
// 					<label className=" text-xl   text-gray-700    " htmlFor="email">
// 						Email
// 					</label>
// 					<div
// 						className="flex border items-center bg-transparent gap-1
// 					 rounded-sm px-2 py-1 ">
// 						<svg
// 							xmlns="http://www.w3.org/2000/svg"
// 							fill="none"
// 							viewBox="0 0 24 24"
// 							strokeWidth={1.5}
// 							stroke="currentColor"
// 							className="me-1 w-6 h-6">
// 							<path
// 								strokeLinecap="round"
// 								strokeLinejoin="round"
// 								d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
// 							/>
// 						</svg>

// 						<input
// 							required
// 							className=" bg-transparent  border-0 focus:ring-0  text-md  "
// 							placeholder="@gmail.com"
// 							type="email"
// 							name="email"
// 							value={formData.email}
// 							onChange={(e) =>
// 								setFormData((pre) => ({ ...pre, email: e.target.value }))
// 							}
// 						/>
// 					</div>
// 				</div>

// 				<div className=" w-full flex    items-center gap-2">
// 					<label className=" text-xl   text-gray-700  " htmlFor="email">
// 						Password
// 					</label>
// 					<div className="flex items-center gap-1 border rounded-sm px-2 py-1 ">
// 						<svg
// 							xmlns="http://www.w3.org/2000/svg"
// 							fill="none"
// 							viewBox="0 0 24 24"
// 							strokeWidth={1.5}
// 							stroke="currentColor"
// 							className="w-5 me-1 h-5">
// 							<path
// 								strokeLinecap="round"
// 								strokeLinejoin="round"
// 								d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
// 							/>
// 						</svg>

// 						<input
// 							required
// 							value={formData.password}
// 							className="  bg-transparent  border-0 focus:ring-0  text-md "
// 							onChange={(e) =>
// 								setFormData((pre) => ({ ...pre, password: e.target.value }))
// 							}
// 							placeholder="* * * * * *"
// 							type="password"
// 							name="password"
// 						/>
// 					</div>
// 				</div>

// 				<div className="flex justify-between items-center">
// 					<div className="flex  items-center gap-1">
// 						<input
// 							required
// 							className={` active:scale-75 rounded-sm  focus:ring-0      h-4 w-4   text-red-500  bg-transparent   transition duration-150 ease-in-out`}
// 							name="login"
// 							type="checkbox"
// 							checked={isChecked}
// 							onChange={handleCheckBox}
// 						/>
// 						<label
// 							className="text-sm select-none font-medium "
// 							htmlFor="login">
// 							Remember me
// 						</label>
// 					</div>

// 					<label
// 						htmlFor=""
// 						className="text-sm border-b border-red-200 font-medium text-red-500">
// 						Forgot password
// 					</label>
// 				</div>
// 				<button
// 					type="submit"
// 					className="py-1 font-medium text-lg mt-3  text-slate-50  active:scale-90 w-full bg-red-600 rounded-lg  ">
// 					Log In
// 				</button>

// 				<div className="flex gap-4 items-center justify-between ">
// 					<p className="text-md text-gray-700 ">Don't Have an account? </p>
// 					<p className=" text-md text-red-600 font-medium  ">Sign up </p>
// 				</div>
// 			</form>
// 		</div>

// 		{disabled && (
// 			<div
// 				className="flex  fixed top-7  end-10 items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
// 				role="alert">
// 				<svg
// 					className="flex-shrink-0 inline w-4 h-4 me-3"
// 					aria-hidden="true"
// 					xmlns="http://www.w3.org/2000/svg"
// 					fill="currentColor"
// 					viewBox="0 0 20 20">
// 					<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
// 				</svg>
// 				<span className="sr-only">Info</span>
// 				<div>
// 					<span className="font-medium">Danger alert!</span> Password
// 					Incorrect
// 				</div>
// 			</div>
// 		)}
// 	</div>
