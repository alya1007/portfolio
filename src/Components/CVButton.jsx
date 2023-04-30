import React from "react";
import { BsDownload } from "react-icons/bs";
import "../styles/MainSection.css";
import myCV from "../cv/AlexandraKonjevicCV.pdf";

function CVButton() {
	const handleDownload = () => {
		const xhr = new XMLHttpRequest();
		xhr.open("GET", myCV, true);
		xhr.responseType = "blob";
		xhr.onload = function () {
			if (this.status === 200) {
				const blob = new Blob([this.response], { type: "application/pdf" });
				const url = URL.createObjectURL(blob);
				const link = document.createElement("a");
				link.href = url;
				link.download = "mycv.pdf";
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
			}
		};
		xhr.send();
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
