/** @format */

import React, { useContext } from "react";
import { SneakerContext } from "../service/store/SneakerContextProvider";

const CartListItemComponent = ({
	item: { id, title, quantity, price, discount, name, image },
}) => {
	const { toggleDelete, toggleAddRemove, toggleRemove } =
		useContext(SneakerContext);

	const removeCart = () => {
		toggleDelete(id);
	};

	return (
		<div className="mt-8 flex items-start justify-between gap-1 ">
			<div className="flex  gap-2 sm:gap-3 group align-middle  items-start   ">
				<img
					className="w-[110px] select-none rounded-md  h-[110px] object-cover "
					src={image}
					alt=""
				/>
				<div className="sm:w-[200px] w-[180px] ">
					<h4 className="text-sm mt-1 text-orange-500 font-semibold sm:line-clamp-1 ">
						{name}
					</h4>

					<p className=" text-sm mt-2 font-medium text-gray-700 ">
						{discount ? `$  ${discount.toFixed(2)}` : `$ ${price.toFixed(2)}`}
					</p>

					<svg
						onClick={removeCart}
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="w-5 mt-4 text-orange-500  h-5">
						<path
							fillRule="evenodd"
							d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
			</div>
			<div className="flex  select-none flex-col items-center align-middle gap-4">
				<svg
					onClick={() => toggleAddRemove(id, 1)}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					className="w-5 active:scale-90 text-orange-500 h-5">
					<path
						fillRule="evenodd"
						d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
						clipRule="evenodd"
					/>
				</svg>
				<p className="font-medium select-none text-gray-700 text-sm">
					{quantity}
				</p>

				<svg
					onClick={() => quantity > 1 && toggleRemove(id, 1)}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					className="w-5 text-orange-500 h-5">
					<path
						fillRule="evenodd"
						d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
						clipRule="evenodd"
					/>
				</svg>
			</div>
		</div>
	);
};

export default CartListItemComponent;
