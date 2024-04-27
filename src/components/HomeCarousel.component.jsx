/** @format */

// /** @format */

import React, { useContext, useEffect, useState } from "react";
import { SneakerContext } from "../service/store/SneakerContextProvider";
import { SwiperSlide, Swiper } from "swiper/react";
import { useNavigate, useParams } from "react-router-dom";
import "../../node_modules/swiper/swiper-bundle.min.css";
import HomeLoadingComponent from "./HomeLoading.component";
import useFetch from "../hook/useFetch";
import { LatestService } from "../service/popular.service";
import { motion } from "framer-motion";
import { AboutPage } from "../page";
import CustomerComponent from "./Customer.component";
import { Pagination } from "swiper/modules";

import Home2Component from "./Home2.component";
import Home3Component from "./Home3.component";

const HomeCarouselComponent = () => {
	const [favourite, setFavourite] = useState(false);
	const [showAnimation, setShowAnimation] = useState(false);
	const { data, loading } = useFetch(LatestService, "Latest");




	useEffect(() => {
		const handleScroll = () => {
			const serviceComponent = document.getElementById("home2");
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
		<div className="">
			<div className="">
				{loading ? (
					<HomeLoadingComponent />
				) : (
					<div
						id="home2"
						className={` ${
							showAnimation &&
							"animate__animated  animate__slideInLeft  duration-1000"
						} w-full sm:h-auto  h-[500px]  my-20 sm:my-16  `}>
						<div className=" text-gray-800   font-bold text-center">
							<h1 className="sm:text-4xl text-3xl  text-orange-500    bodyFont  tracking-wide">
								New Release{" "}
							</h1>

							<h1 className=" text-2xl   font-semibold  text-center mt-1 sm:mt-2 text-gray-700 tracking-wide">
								Latest Products
							</h1>
						</div>

						<Swiper
							pagination={{
								dynamicBullets: true,
							}}
							modules={[Pagination]}
							className="mySwiper sm:hidden  mt-10 ">
							{data?.map((item) => (
								<SwiperSlide className="  ">
									<Home3Component item={item} key={item.id} />
								</SwiperSlide>
							))}
						</Swiper>

						<div className="flex flex-row  items-center justify-center mt-10  flex-wrap gap-10">
							{data?.map((item) => (
								<Home2Component item={item} key={item.id} />
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default HomeCarouselComponent;
