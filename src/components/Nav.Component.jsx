/** @format */

import React, { useContext, useEffect, useRef, useState } from "react";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import {
	useNavigate,
	useLocation,
	Link,
	NavLink,
	Outlet,
} from "react-router-dom";
import { toast } from "sonner";
import { SneakerContext } from "../service/store/SneakerContextProvider";
import { useLogoutMutation } from "../service/endpoints/AuthEndpoints";
import FavouriteComponent from "./Favourite.component";
import { FaTruckMedical } from "react-icons/fa6";
import AddtoCartPage from "../page/sneakers/dashboard/module/AddtoCart.page";
import TriggerCartComponent from "./TriggerCart.component";


const NavComponent = () => {
	const [RemoveFun, RemoveData] = useLogoutMutation();
	const [DrawerToggle, setDrawerToggle] = useState(false);
	const MenuRef = useRef();

	const {
		data,
		cart,
		hiddenIcon,
		filterCart,
		setFilterCart,
		setToggle,
		SetHiddenIcon,
		aboutToggle,
		cartToggle,
		setCartToggle,
		setaboutToggle,
		setContactToggle,
		contactToggle,
	} = useContext(SneakerContext);

	const [favToggle, setFavToggle] = useState(false);
	const [toggle, settoggle] = useState(false);
	const [isFixed, setIsFixed] = useState(false);

	const { fav } = useContext(SneakerContext);

	const handleAbout = () => {
		setaboutToggle(!aboutToggle);
	};

	const handleCart = () => {
		setCartToggle(true);
	};

	const handleContact = () => {
		setContactToggle(!contactToggle);
	};

	const nav = useNavigate();

	const [search, setSearch] = useState("");

	const handleDrawer = () => {
		setDrawerToggle(!DrawerToggle);
	};

	const handleFav = () => {
		setFavToggle(true);
	};

	const handleDashboard = () => {
		nav("/dashboard");
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const filtered = data?.filter((product) =>
			product.name.toLowerCase().includes(search.toLowerCase())
		);

		setFilterCart(filtered);

		nav(`/dashboard/search/${search}`);
	};

	const handleLogout = async () => {
		await RemoveFun();
		localStorage.removeItem("token");
		nav("/");
		toast.success("Logout Successfully");
	};

	const handleAddToCart = () => {
		SetHiddenIcon(true);
		nav("/addtocart");
	};

	const handleSection = (route) => {
		nav(`/dashboard/${route}`);
		setDrawerToggle(false);
	};

	const handelCloseMenu = () => {
		nav("/");
		setDrawerToggle(!DrawerToggle);
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 500) {
				setIsFixed(true);
			} else {
				setIsFixed(false);
			}
		};

		const handleMouse = (e) => {
			if (!MenuRef.current.contains(e.target)) {
				setDrawerToggle(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		window.addEventListener("mousedown", handleMouse);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.addEventListener("mousedown", handleMouse);
		};
	}, []);

	const scrollToSection = (id, route) => {
		const element = document.getElementById(id);
		nav(route);

		if (element) {
			setDrawerToggle(false);
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div>
			<div className=" w-[95%]   sm:w-[85%]    mx-auto  ">
				<Sheet>
					{favToggle && (
						<SheetContent>
							<SheetHeader>
								<SheetTitle className="sm:text-base text-md text-left ">
									Favourite List{" "}
									<span className="text-orange-500 font-medium ">
										{fav?.length}
									</span>{" "}
									Item
								</SheetTitle>
								<SheetDescription className="sm:text-base text-sm text-left sm:w-full w-[85%]">
									You can add wishlist more sneaker
								</SheetDescription>
								<FavouriteComponent />
							</SheetHeader>
						</SheetContent>
					)}

					{/* cart toggle */}
					{/* <div
						id="drawer-right-example"
						className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white   w-64 sm:w-96 duration-700 dark:bg-gray-800"
						tabIndex="-1"
						aria-labelledby="drawer-right-label">
						
					</div> */}

					<div
						className={` border-b  border-b-gray-300  py-4 sm:pt-4 sm:pb-0  flex justify-between items-center   ${
							isFixed &&
							"fixed top-0 left-0   w-full    pe-6   ps-7  sm:pe-28 sm:px-28  mx-auto   bg-gray-50  duration-500        z-10 "
						} `}>
						{/* toggle menu */}
						{DrawerToggle && (
							<div
								ref={MenuRef}
								className={`fixed  duration-700  bg-white animate__animated  animate__bounceInLeft  top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform w-64 dark:bg-gray-800`}>
								<h5 className="text-xl mt-3 tracking-wide font-semibold  text-gray-800 uppercase dark:text-gray-400">
									Menu
								</h5>
								<button
									type="button"
									className="text-gray-400 bg-transparent  hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white">
									<svg
										className="w-5 mt-7 text-gray-700 h-5"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										onClick={handelCloseMenu}
										viewBox="0 0 14 14">
										<path
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
										/>
									</svg>
								</button>

								<div className="py-4 ">
									<ul className="space-y-2 flex flex-col items-start gap-2 font-medium">
										<li
											onClick={() => handleSection("collections")}
											className="flex items-center w-full  select-none ">
											<a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="currentColor"
													className="flex-shrink-0  w-7 h-7 me-2 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
													<path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
													<path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
												</svg>

												<span className="ms-3">Home</span>
											</a>
										</li>

										<li
											onClick={() => handleSection("collections")}
											className="flex items-center  w-full ">
											<a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
												<svg
													className="flex-shrink-0  w-7 h-7 me-2 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
													aria-hidden="true"
													xmlns="http://www.w3.org/2000/svg"
													fill="currentColor"
													viewBox="0 0 18 20">
													<path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
												</svg>
												<span className="flex-1 ms-3 whitespace-nowrap">
													Products
												</span>
											</a>
										</li>

										<li
											onClick={() => handleSection("men")}
											className="flex items-center w-full  select-none  ">
											<a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="currentColor"
													className="flex-shrink-0  w-7 h-7 me-2 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
													<path
														fillRule="evenodd"
														d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
														clipRule="evenodd"
													/>
												</svg>
												<span className="flex-1 ms-3 whitespace-nowrap">
													Men
												</span>
											</a>
										</li>

										<li
											onClick={() => handleSection("women")}
											className="flex items-center w-full  select-none  ">
											<a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="currentColor"
													className="flex-shrink-0  w-7 h-7 me-2 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
													<path
														fillRule="evenodd"
														d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
														clipRule="evenodd"
													/>
												</svg>
												<span className="flex-1 ms-3 whitespace-nowrap">
													Women
												</span>
											</a>
										</li>

										<li
											onClick={() => scrollToSection("about", "/dashboard")}
											className="flex items-center w-full  select-none ">
											<a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="currentColor"
													className="flex-shrink-0 w-7 h-7 me-2 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
													<path
														fillRule="evenodd"
														d="M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z"
														clipRule="evenodd"
													/>
												</svg>

												<span className="flex-1 ms-3 whitespace-nowrap">
													About
												</span>
											</a>
										</li>

										<li
											onClick={() => scrollToSection("contact", "/dashboard")}
											className="flex items-center w-full  select-none ">
											<a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="currentColor"
													className="flex-shrink-0 w-7 h-7 me-2 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
													<path d="M16.881 4.345A23.112 23.112 0 0 1 8.25 6H7.5a5.25 5.25 0 0 0-.88 10.427 21.593 21.593 0 0 0 1.378 3.94c.464 1.004 1.674 1.32 2.582.796l.657-.379c.88-.508 1.165-1.593.772-2.468a17.116 17.116 0 0 1-.628-1.607c1.918.258 3.76.75 5.5 1.446A21.727 21.727 0 0 0 18 11.25c0-2.414-.393-4.735-1.119-6.905ZM18.26 3.74a23.22 23.22 0 0 1 1.24 7.51 23.22 23.22 0 0 1-1.41 7.992.75.75 0 1 0 1.409.516 24.555 24.555 0 0 0 1.415-6.43 2.992 2.992 0 0 0 .836-2.078c0-.807-.319-1.54-.836-2.078a24.65 24.65 0 0 0-1.415-6.43.75.75 0 1 0-1.409.516c.059.16.116.321.17.483Z" />
												</svg>

												<span className="flex-1 ms-3 whitespace-nowrap">
													Contact
												</span>
											</a>
										</li>

										<li
											onClick={handleLogout}
											className="flex items-center w-full  select-none ">
											<a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
												<svg
													class="flex-shrink-0  w-7 h-7 me-2 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
													aria-hidden="true"
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 18 16">
													<path
														stroke="currentColor"
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
													/>
												</svg>
												<span className="flex-1 ms-3 whitespace-nowrap">
													Sign Out
												</span>
											</a>
										</li>
									</ul>
								</div>
							</div>
						)}

						{/* drawer mobile */}

						{/* Nav Bar */}
						<ul className=" sm:flex   hidden   items-center gap-6 align-middle">
							<li
								id="logo"
								className="text-xl   select-none tracking-wide  font-bold  text-orange-500">
								<Link to="/dashboard">
									<img
										className="   w-16 h-16"
										src="https://i.ibb.co/4RmmXvg/logo.png"
										alt=""
									/>
								</Link>
							</li>

							<li className="text-gray-500 tracking-wide select-none active:text-orange-600 hover:text-orange-500 hover:font-medium   active:border-b-2 transition-transform duration-200  active:border-b-orange-500   active:font-bold  ">
								<NavLink to="/dashboard/collections">Collections</NavLink>
							</li>

							<li className="text-gray-500 tracking-wide select-none hover:text-orange-500 hover:font-medium active:border-b-2 transition-transform duration-200  active:border-b-orange-500  active:text-gray-900 active:font-bold  ">
								<NavLink to="/dashboard/men">Men</NavLink>
							</li>

							<li className="text-gray-500 tracking-wide select-none hover:text-orange-500 hover:font-medium active:border-b-2 transition-transform duration-200  active:border-b-orange-500  active:text-gray-900 active:font-bold  ">
								<NavLink to="/dashboard/women">Women</NavLink>
							</li>

							<li className="text-gray-500 tracking-wide select-none hover:text-orange-500 hover:font-medium active:border-b-2 transition-transform duration-200  active:border-b-orange-500  active:text-gray-900 active:font-bold  ">
								<a
									className=" duration-1000 "
									onClick={() => scrollToSection("about", "/dashboard")}>
									About
								</a>
							</li>

							<li
								onClick={() => scrollToAbout("contact")}
								className="text-gray-500 tracking-wide select-none active:border-b-2   hover:text-orange-500 hover:font-medium transition-transform duration-200  active:border-b-orange-500  active:text-gray-900 active:font-bold  ">
								<a
									onClick={() => scrollToSection("contact", "/dashboard")}
									className=" duration-1000 ">
									Contact
								</a>
							</li>
						</ul>

						{/* logo*/}
						<div className=" flex sm:hidden ">
							<h2
								onClick={() => nav("/dashboard")}
								className="flex items-center  gap-1 text-orange-500 text-xl font-bold">
								NIKEE
								<img
									className="w-9"
									src="https://cdn-icons-png.flaticon.com/128/1785/1785348.png"
									alt=""
								/>
							</h2>
						</div>

						<div className=" flex   sm:gap-4 select-none items-center ">
							{/*Favourite wishlist*/}
							<div className="flex items-center gap-3 sm:gap-2">
								<SheetTrigger>
									<svg
										onClick={handleFav}
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										className="w-7 sm:me-5 text-orange-500 active:scale-90 h-7">
										<path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
									</svg>
								</SheetTrigger>

								{/*Add to cart*/}
								<TriggerCartComponent/>
								{/* <div className="relative flex items-center select-none gap-3 sm:gap-0 duration-500 ">
									<button
										type="button"
										className="">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className=" w-7 select-none active:scale-90 h-7">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
											/>
										</svg>
									</button>
									<span className="w-4 absolute top-0 -end-1  h-4  select-none  text-center mx-auto text-xs font-semibold text-white bg-orange-500 rounded-full ">
										{cart.length}
									</span>
								</div> */}

								{/*Menu */}
								<div className="flex sm:hidden z-10   text-center">
									<button
										className=" text-xl  flex   tracking-wide items-center "
										type="button"
										data-drawer-target="drawer-navigation"
										data-drawer-show="drawer-navigation"
										aria-controls="drawer-navigation">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											onClick={handleDrawer}
											className="w-7 h-7">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
											/>
										</svg>
									</button>
								</div>
							</div>

							{/* user icon */}
							<button
								id="dropdownInformationButton"
								data-dropdown-toggle="dropdownInformation"
								className=" hidden  focus:outline-none font-medium rounded-md text-sm px-4  py-2 text-center sm:inline-flex items-center "
								type="button">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="sm:w-7 sm:h-7  w-7 h-7 me-2">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
									/>
								</svg>
							</button>

							{/* user session */}
							<div
								id="dropdownInformation"
								className="z-10 hidden  divide-y divide-gray-200  font-medium  rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
								<div className="px-4 py-3 text-sm text-gray-900 dark:text-white"></div>
								<ul
									className="py-2 text-sm text-gray-700 dark:text-gray-200"
									aria-labelledby="dropdownInformationButton">
									<li
										onClick={handleDashboard}
										className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
										Dashboard
									</li>
									<li>
										<a
											href="#"
											className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
											Settings
										</a>
									</li>
								</ul>

								<div
									onClick={handleLogout}
									className="py-2  hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center justify-between">
									<a className="block px-4 py-2 text-sm text-gray-700  dark:text-gray-200 dark:hover:text-white">
										Sign out
									</a>

									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-6 h-6 me-2 active:scale-95 ">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
										/>
									</svg>
								</div>
							</div>
						</div>
					</div>

					<div>
						<Outlet />
					</div>
				</Sheet>
			</div>
		</div>
	);
};

export default NavComponent;
