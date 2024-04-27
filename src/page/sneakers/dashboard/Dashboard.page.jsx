/** @format */

import React, { useContext, useEffect, useState } from "react";

import "../../../../node_modules/swiper/swiper-bundle.min.css";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import useFetch from "../../../hook/useFetch";
import Autoplay from "embla-carousel-autoplay";
import { Swiper, SwiperSlide } from "swiper/react";


import { Link, useNavigate } from "react-router-dom";
import HomeCarouselComponent from "../../../components/HomeCarousel.component";
import AboutPage from "./module/About.page";
import ContactPage from "./module/Contact.page";
import {
	BestSeller,
	DashboardLoadingComponent,
	LoadingComponent,
	SliderImage,
	SliderImage2,
	SliderImage3,
} from "../../../components";
import AuthGuard from "../../../components/guard/AuthGuard";
import { PopularService } from "../../../service/popular.service";
import { motion } from "framer-motion";

import "../../../../node_modules/animate.css/animate.min.css";
import { SneakerContext } from "../../../service/store/SneakerContextProvider";
import CustomerComponent from "../../../components/Customer.component";
import ServiceComponent from "../../../components/Service.component";

const DashboardPage = () => {
	const { data, loading } = useFetch(PopularService, "popular");
	const [showAnimation, setShowAnimation] = useState(false);

	const { toggleAnimation, setoogleAnimation } = useContext(SneakerContext);

	console.log(toggleAnimation);

	const nav = useNavigate();

	const hanldeShop = () => {
		nav("/dashboard/collections");
	};

	useEffect(() => {
		const handleScroll = () => {
			const serviceComponent = document.getElementById("home");
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
		<AuthGuard>
			<div id="home" className="">
				<div
					className={`w-[85%] sm:w-full  h-auto  sm:my-10 mx-auto select-none ${
						showAnimation &&
						"animate__animated  animate__slideInLeft  duration-1000"
					} `}>
					{loading ? (
						<DashboardLoadingComponent />
					) : (
						<Carousel
							plugins={[
								Autoplay({
									delay: 4000,
								}),
							]}>
							<CarouselContent>
								{data?.map((item) => (
									<CarouselItem key={item.id} className="">
										<motion.div
											key={item.id}
											whileInView={{ opacity: 1 }}
											initial={false}
											whileHover={{
												opacity: 1,
												scale: 1.01,
												boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.7)",
											}}>
											<div className=" group   bg-slate-50 h-[630px]  sm:h-[480px] m-auto  items-center align-middle relative    sm:shadow-lg shadow-slate-200 sm:shadow-orange-400   px-5    rounded-md w-full flex-col mt-3 sm:mt-0 flex sm:flex-row  sm:align-middle sm:items-center justify-between ">
												<div className="sm:w-[60%] z-20  w-full animate__slideInLeft duration-1000 transition-shadow animate__animated">
													<h1 className=" hidden sm:block font-bold text-xl   text-orange-400 sm:text-3xl ">
														{item.name}
													</h1>
													<p className=" sm:text-base  text-xs hidden sm:inline-flex  h-[270]px  leading-5 sm:leading-6  my-3 sm:my-6 tracking-wide sm:h-[170px] text-gray-700  text-justify">
														{item.description}
													</p>

													<button
														onClick={hanldeShop}
														className="bg-orange-500 hidden sm:flex hover:bg-orange-600 active:scale-90 duration-300  text-white text-lg  font-semibold px-7 py-2 rounded-lg">
														SHOP NOW
													</button>
												</div>

												<div className=" w-[260px] h-[260px]  sm:w-[400px] sm:h-[400px]  bg-orange-500  border boder-2  top-[10%]   border-orange-500 absolute sm:top-5  z-20 sm:left-[60%] rounded-full"></div>
												<img
													className={`    w-full ${
														toggleAnimation && "  animate-bounce  "
													} animate__slideInRight animate__animated   absolute z-20  transition-transform duration-1000 rounded-full    -top-32   sm:left-80 sm:top-0   text-center mx-auto  h-full  object-contain `}
													src={item.image}
													alt=""
												/>

												<div className="sm:hidden   mb-24 flex flex-col gap-10">
													<h1 className="   text-center  font-bold text-xl    text-orange-400 sm:text-3xl ">
														{item?.name}
													</h1>

													<button
														onClick={hanldeShop}
														className="bg-orange-500   hover:bg-orange-600 active:scale-90 duration-300  text-white text-lg  font-semibold px-7 py-2 rounded-lg">
														SHOP NOW
													</button>
												</div>
											</div>
										</motion.div>
									</CarouselItem>
								))}
							</CarouselContent>
							<CarouselPrevious className="hover:bg-orange-400 hidden sm:flex hover:text-white duration-500" />
							<CarouselNext className="hover:bg-orange-400 hidden sm:flex hover:text-white duration-500" />
						</Carousel>
					)}
					<HomeCarouselComponent />

					<SliderImage />
					<BestSeller />
					<CustomerComponent />

					<SliderImage2 />
					<AboutPage />

					<SliderImage3 />
					<ServiceComponent />
				</div>

				<div
					id="contact"
					className="    w-full    sm:bg-stone-50 px-3 py-5 rounded-lg  ">
					<ContactPage />
				</div>
			</div>
		</AuthGuard>
	);
};

export default DashboardPage;
