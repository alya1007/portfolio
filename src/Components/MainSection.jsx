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
					Hi, I'm Alea, a Frontend Developer from Moldova.
				</h4>
			</div>
		</div>
	);
}

export default MainSection;
