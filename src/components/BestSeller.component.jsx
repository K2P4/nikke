/** @format */

import React, { useContext, useEffect, useState } from "react";

import useFetch from "../hook/useFetch";
import { motion } from "framer-motion";
import { LatestService } from "../service/popular.service";
import { MdPadding } from "react-icons/md";
import Slider from "react-slick";
import HomeLoadingComponent from "./HomeLoading.component";
import SellerProductComponent from "./SellerProduct.component";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { SneakerContext } from "../service/store/SneakerContextProvider";




const BestSellerComponent = () => {
	const { data, loading } = useFetch(LatestService, "Latest");
	const [showAnimation, setShowAnimation] = useState(false);

		const { addFav } = useContext(SneakerContext);
		const [added, setAdded] = useState(false);

		const nav = useNavigate();

		const handleDetail = () => {
			nav(`/dashboard/collections`);
		};

		const toggleFavourite = (favId,favName,FavImage,FavPrice) => {
			const newFav = {
				id: favId,

				name: favName,
				image: FavImage,
				price: FavPrice,
			};
			addFav(newFav);
			setAdded(!added);
		};

	

	const CustomPrevArrow = (props) => {
		const { className, onClick } = props;
		return (
			<div
				className={className}
				style={{ ...props.style, color: "red" }} // Change color here
				onClick={onClick}
			/>
		);
	};

	const CustomNextArrow = (props) => {
		const { className, onClick } = props;
		return (
			<div
				className={className}
				style={{ ...props.style, color: "blue" }} // Change color here
				onClick={onClick}
			/>
		);
	};

	const settings = {
		dots: true,
		className: "center w-[350px] hidden sm:block sm:w-full h-[360px] px-5 ",
		centerMode: true,
		infinite: true,
		centerPadding: "60px",
		slidesToShow: 4,
		speed: 500,
		focusOnSelect: true,
		slidesToScroll: 4,


		prevArrow: <CustomPrevArrow className="hidden " />,
		nextArrow: <CustomNextArrow />,
	};

	useEffect(() => {
		const handleScroll = () => {
			const serviceComponent = document.getElementById("bestseller");
			if (serviceComponent) {
				const serviceComponentOffset = serviceComponent.offsetTop;
				const scrollPosition = window.scrollY + window.innerHeight;

				if (scrollPosition >= serviceComponentOffset) {
					setShowAnimation(true);
				} else {
					setShowAnimation(false);
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div
			id="bestseller"
			className={`w-full h-auto my-20 sm:my-0 sm:h-screen ${
				showAnimation &&
				"animate__animated  animate__slideInRight  duration-1000"
			}`}>
			<div className="">
				<h1 className="sm:text-4xl text-3xl    mx-auto text-center text-orange-500  bodyFont  tracking-wide">
					Best Seller
				</h1>

				<h1 className=" text-2xl sm:text-xl   font-semibold  text-center mt-1 sm:mt-1 text-gray-700 tracking-wide">
					Products
				</h1>
			</div>
			<div className="slider-container mt-4 sm:mt-9">
				{loading ? (
					<HomeLoadingComponent />
				) : (
					<div className="">
						<Slider className="   " {...settings}>
							{data?.map((item) => (
								<SellerProductComponent key={item.id} item={item} />
							))}
						</Slider>

						<Swiper
							
							modules={[Pagination]}
							className="mySwiper flex  items-center gap-10 sm:hidden">
							{data?.map((item) => (
								<SwiperSlide key={item.id}>
									<div className=" w-full   hover:shadow-slate-500 hover:opacity-95  h-[320px]  sm:h-[350px] border border-slate-200 rounded-lg group relative flex flex-col items-center shadow-xl mt-8 shadow-slate-400 ">
										<img
											className="mx-auto w-full h-[50%] rounded-sm bg-slate-200  object-contain text-center"
											src={item?.image}
											alt=""
										/>

										<button className=" text-xs duration-700 hover:bg-orange-500 transition-transform rounded-xl px-3 py-1 text-white font-medium  tracking-wide  hidden group-hover:flex bg-orange-400 top-5 left-5 animate__zoomIn  animate__animated absolute">
											NEW
										</button>

										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											onClick={() => toggleFavourite(
												item.id,
												item.name,
												item.image,
												item.price
											)}
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className={`w-6 absolute ${
												added ? "text-orange-500  " : "flex"
											} top-5 duration-500 active:scale-90 right-5 h-6`}>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
											/>
										</svg>

										<h1 className="text-center text-lg sm:h-16 my-2 sm:text-lg text-gray-900 font-bold sm:my-2">
											{item?.name}
										</h1>

										<div className=" flex items-center  sm:gap-16   gap-24 justify-between ">
											<div className="flex flex-col justify-start ">
												<p className="sm:text-md text-md tracking-wide font-medium ">
													Price
												</p>
												<p className="sm:text-md text-md  text-gray-700 tracking-wide  ">
													$ {item?.price}
												</p>
											</div>

											<button className="bg-orange-500 rounded-lg  active:scale-90 ">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													strokeWidth={1.5}
													stroke="currentColor"
													onClick={handleDetail}
													className="  h-10 w-10 sm:w-14 text-white p-2 ">
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
													/>
												</svg>
											</button>
										</div>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				)}
			</div>
		</div>
	);
};

export default BestSellerComponent;
