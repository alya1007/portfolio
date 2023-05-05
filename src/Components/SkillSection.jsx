import React from "react";
import "../styles/SkillSection.css";
import Carousel from "./Carousel";

function SkillSection() {
	return (
		<section className="skill-section">
			<div className="skill-section__content">
				<h1 className="skill-section__title">Skills</h1>
				<p className="skill-section__description">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s.
				</p>
				<Carousel />
			</div>
		</section>
	);
}

export default SkillSection;
