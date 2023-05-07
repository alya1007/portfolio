import React from "react";
import "../styles/ProjectsSection.css";
import ProjectItem from "./ProjectItem";
import projectsData from "../projectsData";

function ProjectsSection() {
	return (
		<section className="projects-section">
			<div className="projects-section__content">
				<h5 className="projects-section__title">Portfolio</h5>
				<h4 className="projects-section__description">
					Explore a selection of my recent frontend projects showcasing my
					skills in web development, user interface design, and problem-solving.
				</h4>
				<div className="projects-section__projects">
					{projectsData.map((project) => (
						<ProjectItem
							key={project.id}
							thumbnail={project.thumbnail}
							title={project.title}
							description={project.description}
							detailedDescription={project.detailedDescription}
							githubLink={project.githubLink}
							liveLink={project.liveLink}
							stack={project.stack}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default ProjectsSection;
