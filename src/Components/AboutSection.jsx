import React from "react";
import "../styles/AboutSection.css";
import aboutImg from "../assets/images/about-image.jpg";
import { GrLocation } from "react-icons/gr";

function AboutSection() {
	return (
		<section className="about-section">
			<div className="about-section__content">
				<img src={aboutImg} alt="" className="about-section__image" />
				<div className="about-section__text">
					<h3 className="about-section__title">About me</h3>
					<h2 className="about-section__subtitle">
						A dedicated frontend developer from Moldova{" "}
						<span>
							<GrLocation />
						</span>
					</h2>
					<p className="about-section__description">
						As a hard-working student, I have consistently demonstrated a strong
						commitment and willingness to take on challenging coursework. I have
						a passion for creating responsive and engaging user interfaces that
						not only look great but also deliver a seamless user experience. My
						ability to work efficiently and collaborate effectively with team
						members makes me an ideal candidate for any development project. My
						experience in using React and its ecosystem has allowed me to create
						scalable and maintainable code that is easy to read and understand.{" "}
					</p>
				</div>
			</div>
		</section>
	);
}

export default AboutSection;
