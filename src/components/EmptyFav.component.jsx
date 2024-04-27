import React from 'react'

const EmptyFavComponent = () => {
  return (
		<div className="flex flex-col  items-center">
			<img
				className="text-center  object-center h-[400px] sm:object-none sm:h-full sm:w-full mx-auto my-5"
				src="https://cdn3d.iconscout.com/3d/premium/thumb/shopping-wishlist-5462014-4551940.png?f=webp"
				alt=""
			/>

			<h1 className="mx-auto font-medium sm:text-base  text-center">
				No Favourite List Here ...
			</h1>
			
		</div>
	);
}

export default EmptyFavComponent
