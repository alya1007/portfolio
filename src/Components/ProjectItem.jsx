import React from "react";

function ProjectItem({ thumbnail, title, description, githubLink, liveLink }) {
	return (
		<div className="project-item">
			<img src={thumbnail} alt="" className="project-item__thumbnail" />
			<div className="project-item__text">
				<h3 className="project-item__title">{title}</h3>
				<p className="project-item__description">{description}</p>
				<div className="project-item__links">
					<a href="#">link1</a>
					<a href="#">link2</a>
				</div>
			</div>
		</div>
	);
}

export default ProjectItem;
