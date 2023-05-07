import React from "react";

function ProjectItem({ thumbnail, title, description, link }) {
	return (
		<div className="projects-section__project">
			<img src={thumbnail} alt="" className="projects-section__thumbnail" />
		</div>
	);
}

export default ProjectItem;
