/** @format */

import React, { useContext, useEffect, useRef, useState } from "react";
import { SneakerContext } from "../../../../service/store/SneakerContextProvider";
import { useNavigate, useParams ,useLocation} from "react-router-dom";
import { CartListItemComponent, EmptyComponent } from "../../../../components";

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Loader2 } from "lucide-react";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import * as yup from "yup";
import { toast } from "sonner";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useGetProfileQuery } from "../../../../service/endpoints/AuthEndpoints";
import { useCreateMutation } from "../../../../service/endpoints/Contact";

const AddtoCartPage = () => {
	const { cart, setToggle, setCart, cartToggle, setCartToggle, toggle } = useContext(SneakerContext);
	const [CreateFun, FunLoad] = useCreateMutation();
	const location = useLocation();
	const [success, setSuccess] = useState(false);
	const {data}  = useGetProfileQuery();
	console.log(data);
	const [order, setOrder] = useState(false);
	const MenuRef = useRef();

	const nav = useNavigate();

	const initailValue = {
		address: "",
		payment: "",
	};

	const validationSchema = yup.object({
		address: yup.string().required("address is required"),
		payment: yup.string().required("payment is required"),
	});

	const handleBack = () => {
		setToggle(false);
		nav("/dashboard/collections");
	};

	const toggleOrder = () => {
		setOrder(!order);
	};

	const handleSuccess = () => {
		setSuccess(true);
	};

	const handleSubmit = async (value) => {
		console.log(value);
		setTimeout(() => {
			CreateFun(value);
			toast.success("Order Successfull");
			nav(-1);
			setCart([]);
			setCartToggle(!cartToggle);
		}, 1000);

		
	};

	const costTotal = cart.reduce((total, product) => {
		return total + (product.discount ? product.discount : product.price);
	}, 0);

	return (
		<div className="  ">
			<Sheet>
				<AlertDialog>
					<div className="px-3  mt-5">
						{cart.length == 0 && <EmptyComponent />}

						{cart.length > 0 && (
							<div className=" h-auto  flex justify-between flex-col ">
								<div className="h-full">
									{!order && (
										<>
											{!success && (
												<div className="">
													{cart?.map((item) => (
														<CartListItemComponent key={item.id} item={item} />
													))}
												</div>
											)}
										</>
									)}

									{success && (
										<Formik
											validateOnChange={false}
											validateOnBlur={false}
											validationSchema={validationSchema}
											initialValues={initailValue}
											onSubmit={handleSubmit}>
											{({ isSubmitting, handleChange, handleBlur, values }) => (
												<Form>
													<div className=" flex flex-col gap-8 sm:gap-5 items-start ">
														<div className=" w-full  ">
															<h1 className="  text-left text-md  sm:text-sm font-semibold ">
																Delivery Address
															</h1>

															<input
																className="w-full border text-sm  focus:border-0 focus:ring-0 pb-12 px-3 border-slate-300 sm:h-16 h-16 rounded-md "
																type="address"
																name="address"
																onChange={handleChange}
																onBlur={handleBlur}
																value={values.address}
															/>
															<ErrorMessage
																component={"p"}
																className="text-red-400 text-xs mt-1"
																name="address"
															/>
														</div>

														<div className="w-full">
															<h3 className=" text-left font-semibold text-md sm:text-sm ">
																{" "}
																Personal Detail
															</h3>

															<div className="my-4 flex  items-center gap-3  sm:gap-4 sm:my-2">
																<h3 className="text-sm">{data?.user?.name}</h3>{" "}
																<h3 className="text-sm">{data?.user?.email}</h3>
																
															</div>
														</div>

														<div className="w-full">
															<div className="  w-full  ">
																<h1 className=" sm:text-sm text-md text-left font-semibold ">
																	Payment Method
																</h1>

																<div className="flex flex-col gap-1 items-center  sm:mt-1 mt-2">
																	<label className="flex  items-center w-full text-xs sm:text-sm border font-medium sm:p-2 p-3">
																		<Field
																			type="radio"
																			name="payment"
																			onChange={handleChange}
																			onBlur={handleBlur}
																			value="cash on delivery"
																			className=" me-3  form-radio text-orange-500  "
																		/>
																		<img
																			className=" sm:w-10 sm:h-10  object-cover  w-11 h-11 me-2 "
																			src="data:image/png;base64,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"
																			alt=""
																		/>
																		Cash On Delivery
																	</label>

																	<label className="flex  items-center w-full  text-xs sm:text-sm border font-medium sm:p-2 p-3">
																		<Field
																			type="radio"
																			name="payment"
																			onChange={handleChange}
																			onBlur={handleBlur}
																			value="Wave Pay"
																			className=" me-3 text-sm form-radio text-orange-500 "
																		/>
																		<img
																			className="   sm:w-10 sm:h-10  object-cover  w-11 h-11 me-2  "
																			src="data:image/jpeg;base64,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"
																			alt=""
																		/>
																		Wave Pay
																	</label>

																	<label className="flex  items-center w-full text-xs sm:text-sm border font-medium  sm:p-2 p-3">
																		<Field
																			type="radio"
																			name="payment"
																			onChange={handleChange}
																			onBlur={handleBlur}
																			value="KBZ Pay"
																			className=" me-3 form-radio text-orange-500 "
																		/>
																		<img
																			className="sm:w-10 sm:h-10 object-cover  w-11 h-11 me-2 "
																			src="data:image/png;base64,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"
																			alt=""
																		/>
																		KBZ Pay
																	</label>
																</div>
															</div>

															<ErrorMessage
																component={"p"}
																className="text-red-400 text-xs mt-1"
																name="payment"
															/>
														</div>
														<div className="flex justify-between items-center w-full   pt-2 border-t boder-t-gray-400  ">
															<p className=" font-bold text-gray-700 w-full tracking-wide">
																Total
															</p>
															<p className="font-bold text-gray-700  tracking-wide ">
																{costTotal?.toFixed(2)}
															</p>
														</div>

														<button
															
															disabled={isSubmitting}
															className="w-full select-none active:scale-95 bg-orange-500 py-2 text-white m-auto  font-semibold tracking-wide  rounded-lg text-center">
															{isSubmitting ? (
																"Order Success"
															) : (
																"Place Order"
															)}
														</button>
													</div>
												</Form>
											)}
										</Formik>
									)}
								</div>

								<div className="     mt-20  ">
									{!success && (
										<div className="flex justify-between items-center pt-2 border-t boder-t-gray-400  ">
											<p className=" font-bold text-gray-700  tracking-wide">
												Total
											</p>
											<p className="font-bold text-gray-700 tracking-wide ">
												{costTotal.toFixed(2)}
											</p>
										</div>
									)}

									<AlertDialogContent>
										<AlertDialogHeader>
											<AlertDialogTitle>
												Are you absolutely sure?
											</AlertDialogTitle>
											<AlertDialogDescription>
												You can Pay Order Now
											</AlertDialogDescription>
										</AlertDialogHeader>
										<AlertDialogFooter>
											<AlertDialogCancel>Cancel</AlertDialogCancel>
											<AlertDialogAction onClick={handleSuccess}>
												Continue
											</AlertDialogAction>
										</AlertDialogFooter>
									</AlertDialogContent>

									{!success && (
										<AlertDialogTrigger className="w-full select-none mt-7 active:scale-95 bg-orange-500 py-2 text-white  font-semibold tracking-wide  rounded-lg text-cemter">
											<button
												onClick={toggleOrder}
												disabled={order}
												className=" ">
												Order Now
											</button>
										</AlertDialogTrigger>
									)}
								</div>
							</div>
						)}
					</div>
				</AlertDialog>
			</Sheet>
		</div>
	);
};

export default AddtoCartPage;

// {
// 	cart.map((item) => <CartListItemComponent key={item.id} item={item} />);
// }
