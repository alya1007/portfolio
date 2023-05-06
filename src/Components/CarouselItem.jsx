import React from "react";

function CarouselItem({ itemIcon, title }) {
	return (
		<div className="carousel-item">
			{itemIcon}
			<h3 className="carousel-item__title">{title}</h3>
		</div>
	);
}

export default CarouselItem;
