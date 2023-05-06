import React from "react";
import CarouselItem from "./CarouselItem";
import {
	TbBrandJavascript,
	TbBrandHtml5,
	TbBrandCss3,
	TbBrandReact,
	TbBrandTypescript,
	TbBrandTailwind,
	TbBrandRedux,
	TbBrandBootstrap,
} from "react-icons/tb";
import { SiAntdesign, SiJquery } from "react-icons/si";

function Carousel() {
	const items = [
		{
			itemIcon: <TbBrandJavascript className="carousel-item__icon" />,
			title: "JavaScript",
		},
		{
			itemIcon: <TbBrandHtml5 className="carousel-item__icon" />,
			title: "HTML5",
		},
		{
			itemIcon: <TbBrandCss3 className="carousel-item__icon" />,
			title: "CSS3",
		},
		{
			itemIcon: <TbBrandReact className="carousel-item__icon" />,
			title: "React",
		},
		{
			itemIcon: <TbBrandTypescript className="carousel-item__icon" />,
			title: "TypeScript",
		},
		{
			itemIcon: <TbBrandTailwind className="carousel-item__icon" />,
			title: "TailwindCSS",
		},
		{
			itemIcon: <TbBrandRedux className="carousel-item__icon" />,
			title: "Redux",
		},
		{
			itemIcon: <TbBrandBootstrap className="carousel-item__icon" />,
			title: "Bootstrap",
		},
		{
			itemIcon: <SiAntdesign className="carousel-item__icon" />,
			title: "Ant Design",
		},
		{
			itemIcon: <SiJquery className="carousel-item__icon" />,
			title: "jQuery",
		},
	];

	return (
		<div className="carousel">
			{items.map((item, index) => (
				<CarouselItem key={index} itemIcon={item.itemIcon} title={item.title} />
			))}
		</div>
	);
}

export default Carousel;
