import React from "react";
import Pfp from "../assets/images/pfp.jpg";
import "../styles/MainSection.css";
import CVButton from "./CVButton";

function MainSection() {
	return (
		<div className="main-section">
			<div className="main-section__image">
				<img src={Pfp} alt="" />
			</div>
			<div className="main-section__text">
				<h4 className="main-section__text__title">
					Hi, I'm Alexandra,
					<br /> a Frontend Developer.
				</h4>
			</div>
			<CVButton />
		</div>
	);
}

export default MainSection;
