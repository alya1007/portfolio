import React from "react";
import CarouselItem from "./CarouselItem";
import { TbBrandJavascript, TbBrandHtml5, TbBrandCss3 } from "react-icons/tb";

function Carousel() {
	return (
		<div className="carousel">
			<CarouselItem
				itemIcon={<TbBrandJavascript className="carousel-item__icon" />}
			/>
			<CarouselItem
				itemIcon={<TbBrandHtml5 className="carousel-item__icon" />}
			/>
			<CarouselItem
				itemIcon={<TbBrandCss3 className="carousel-item__icon" />}
			/>
		</div>
	);
}

export default Carousel;
