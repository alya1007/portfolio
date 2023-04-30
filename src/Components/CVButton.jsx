import React from "react";
import { BsDownload } from "react-icons/bs";
import "../styles/MainSection.css";
import myCV from "../cv/AlexandraKonjevicCV.pdf";

function CVButton() {
	const handleDownload = () => {
		const url = URL.createObjectURL(
			new Blob([myCV], { type: "application/pdf" })
		);
		const link = document.createElement("a");
		link.href = url;
		link.download = "AlexandraKonjevicCV.pdf";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};
	return (
		<button className="cv-button" onClick={handleDownload}>
			<div className="cv-button__content">
				<p>Download CV</p>
				<BsDownload className="cv-button__icon" />
			</div>
		</button>
	);
}

export default CVButton;
