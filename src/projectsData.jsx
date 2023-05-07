const thumbnailContext = require.context(
	"./assets/images/thumbnails/",
	false,
	/\.png$/
);

const thumbnailImages = thumbnailContext.keys().map(thumbnailContext);

const projectsData = [
	{
		id: 1,
		title: "Project 1",
		description: "Lorem ipsum dolor sit amet consectetur.",
		thumbnail: thumbnailImages[0],
		githubLink: "#",
		liveLink: "#",
	},
	{
		id: 2,
		title: "Project 2",
		description: "Lorem ipsum dolor sit amet consectetur.",
		thumbnail: thumbnailImages[1],
		githubLink: "#",
		liveLink: "#",
	},
	{
		id: 3,
		title: "Project 3",
		description: "Lorem ipsum dolor sit amet consectetur.",
		thumbnail: thumbnailImages[2],
		githubLink: "#",
		liveLink: "#",
	},
	{
		id: 4,
		title: "Project 4",
		description: "Lorem ipsum dolor sit amet consectetur.",
		thumbnail: thumbnailImages[3],
		githubLink: "#",
		liveLink: "#",
	},
	{
		id: 5,
		title: "Project 5",
		description: "Lorem ipsum dolor sit amet consectetur.",
		thumbnail: thumbnailImages[4],
		githubLink: "#",
		liveLink: "#",
	},
	{
		id: 6,
		title: "Project 6",
		description: "Lorem ipsum dolor sit amet consectetur.",
		thumbnail: thumbnailImages[5],
		githubLink: "#",
		liveLink: "#",
	},
];

export default projectsData;
