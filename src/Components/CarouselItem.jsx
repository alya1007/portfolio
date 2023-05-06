import React from "react";

function CarouselItem({ itemIcon, title }) {
	return (
		<div className="carousel-item">
			{itemIcon}
			<div className="carousel-item__title">{title}</div>
		</div>
	);
}

export default CarouselItem;
