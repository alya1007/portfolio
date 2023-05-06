import React from "react";
import "../styles/SkillSection.css";
import Carousel from "./Carousel";
import {
	TbBrandJavascript,
	TbBrandHtml5,
	TbBrandCss3,
	TbBrandReact,
	TbBrandTailwind,
	TbBrandRedux,
	TbBrandBootstrap,
} from "react-icons/tb";
import { SiAntdesign, SiJquery, SiTypescript } from "react-icons/si";

function SkillSection() {
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
			itemIcon: <SiTypescript className="carousel-item__icon" />,
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
		<section className="skill-section">
			<div className="skill-section__content">
				<h1 className="skill-section__title">Skills</h1>
				<p className="skill-section__description">
					As a frontend developer, I have extensive experience with JavaScript,
					HTML/CSS, ReactJS and Redux, allowing me to create beautiful and
					responsive user interfaces that deliver exceptional user experiences.
				</p>
				<Carousel items={items} />
			</div>
		</section>
	);
}

export default SkillSection;
