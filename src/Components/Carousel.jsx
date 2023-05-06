import React, { useState } from "react";
import CarouselItem from "./CarouselItem";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

function Carousel({ items }) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrevClick = () => {
		setTimeout(() => {
			setCurrentIndex((prevIndex) =>
				prevIndex === 0 ? items.length - 1 : prevIndex - 1
			);
		}, 200);
		const carouselItems = document.querySelector(".carousel-items");
		carouselItems.style.transform = `translateX(${100 / 70}%)`;
		setTimeout(() => {
			carouselItems.style.transform = "";
		}, 200);
	};

	const handleNextClick = () => {
		setTimeout(() => {
			setCurrentIndex((prevIndex) =>
				prevIndex === items.length - 1 ? 0 : prevIndex + 1
			);
		}, 200);
		const carouselItems = document.querySelector(".carousel-items");
		carouselItems.style.transform = `translateX(-${100 / 70}%)`;
		setTimeout(() => {
			carouselItems.style.transform = "";
		}, 200);
	};

	const visibleItems = [];
	for (let i = 0; i < 3; i++) {
		const itemIndex = (currentIndex + i) % items.length;
		visibleItems.push(items[itemIndex]);
	}

	return (
		<div className="carousel">
			<button onClick={handlePrevClick} className="carousel-button">
				<MdNavigateBefore />
			</button>
			<div className="carousel-items">
				{visibleItems.map((item) => (
					<CarouselItem
						key={item.title}
						itemIcon={item.itemIcon}
						title={item.title}
					/>
				))}
			</div>
			<button onClick={handleNextClick} className="carousel-button">
				<MdNavigateNext />
			</button>
		</div>
	);
}

export default Carousel;
