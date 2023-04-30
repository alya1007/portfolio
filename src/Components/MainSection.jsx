import React from "react";
import Pfp from "../assets/images/pfp.jpg";
import "../styles/MainSection.css";

function MainSection() {
	return (
		<div className="main-section">
			<div className="main-section__image">
				<img src={Pfp} alt="" />
			</div>
			<div className="main-section__text">
				<h4 className="main-section__text__title">
					Hi, I'm <span className="main-section__text__title__name">Alea</span>
				</h4>
				<p className="main-section__text__description">
					I'm a{" "}
					<span className="main-section__text__description__highlight">
						Frontend Developer
					</span>{" "}
					from Moldova.
				</p>
			</div>
		</div>
	);
}

export default MainSection;
