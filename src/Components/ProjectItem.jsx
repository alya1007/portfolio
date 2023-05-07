import React from "react";
import ProjectButton from "./ProjectButton";
import { VscGithubAlt, VscLinkExternal } from "react-icons/vsc";

function ProjectItem({ thumbnail, title, description, githubLink, liveLink }) {
	return (
		<div className="project-item">
			<img src={thumbnail} alt="" className="project-item__thumbnail" />
			<div className="project-item__text">
				<h3 className="project-item__title">{title}</h3>
				<p className="project-item__description">{description}</p>
				<div className="project-item__links">
					<ProjectButton
						link={githubLink}
						icon={<VscGithubAlt />}
						text="GitHub"
					/>
					<ProjectButton
						link={liveLink}
						icon={<VscLinkExternal />}
						text="Demo"
					/>
				</div>
			</div>
		</div>
	);
}

export default ProjectItem;
