import React from "react";

function ProjectButton({ link, icon, text }) {
	return (
		<a
			href={link}
			target="_blank"
			rel="noreferrer"
			className="project-item__button__link"
		>
			<button className="project-item__button">
				<i className="project-item__button__icon">{icon}</i>
				<h4 className="project-item__button__text">{text}</h4>
			</button>
		</a>
	);
}

export default ProjectButton;
