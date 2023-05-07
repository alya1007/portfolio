import React, { useState } from "react";
import ProjectButton from "./ProjectButton";
import { VscGithubAlt, VscLinkExternal } from "react-icons/vsc";
import ReactCardFlip from "react-card-flip";

function ProjectItem({
	thumbnail,
	title,
	description,
	detailedDescription,
	githubLink,
	liveLink,
	stack,
}) {
	const [isFlipped, setIsFlipped] = useState(false);

	const handleClick = () => {
		setIsFlipped(!isFlipped);
	};

	return (
		<ReactCardFlip
			// className={`project-item ${isFlipped ? "is-flipped" : ""}`}
			isFlipped={isFlipped}
		>
			<div className="project-item" onClick={handleClick}>
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
			<div className="project-item project-item__back" onClick={handleClick}>
				<p className="project-item__detailed-description">
					{detailedDescription}
				</p>
				<div className="project-item__stack">
					{stack.map((icon) => (
						<i className="project-item__stack__item">{icon}</i>
					))}
				</div>
			</div>
		</ReactCardFlip>
	);
}

export default ProjectItem;
