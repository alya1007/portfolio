import { TbBrandReact, TbBrandTailwind, TbBrandRedux } from "react-icons/tb";
import { SiTypescript, SiVite } from "react-icons/si";

const thumbnailContext = require.context(
	"./assets/images/thumbnails/",
	false,
	/\.png$/
);

const thumbnailImages = thumbnailContext.keys().map(thumbnailContext);

const projectsData = [
	{
		id: 1,
		title: "Oasis",
		description: "Website with the best articles you can find.",
		detailedDescription:
			"This website leverages the power of Vite and React.js to deliver a highly performant and responsive user interface. By utilizing Vite's fast bundling and hot module replacement, the website ensures quick and efficient loading of content, resulting in a seamless browsing experience.",
		thumbnail: thumbnailImages[0],
		stack: [<TbBrandReact />, <SiVite />],
		githubLink: "https://github.com/alya1007/oasis",
		liveLink: "#",
	},
	{
		id: 2,
		title: "Tracker Pro",
		description: "Application for task management.",
		detailedDescription:
			"This website, made with ReactJS, Redux, Vite and TailwindCSS, is a simple task management application that allows users to add, edit, and delete tasks. It also features a dark mode toggle that persists across sessions.",
		thumbnail: thumbnailImages[1],
		stack: [
			<TbBrandReact />,
			<TbBrandRedux />,
			<SiVite />,
			<TbBrandTailwind />,
		],
		githubLink: "https://github.com/alya1007/tracker-pro",
		liveLink: "#",
	},
	{
		id: 3,
		title: "Project 3",
		description: "Lorem ipsum dolor sit amet consectetur.",
		detailedDescription:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		thumbnail: thumbnailImages[2],
		stack: [<TbBrandReact />, <SiTypescript />, <TbBrandTailwind />],
		githubLink: "#",
		liveLink: "#",
	},
	{
		id: 4,
		title: "Project 4",
		description: "Lorem ipsum dolor sit amet consectetur.",
		detailedDescription:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		thumbnail: thumbnailImages[3],
		stack: [<TbBrandReact />, <SiTypescript />, <TbBrandTailwind />],
		githubLink: "#",
		liveLink: "#",
	},
	{
		id: 5,
		title: "Project 5",
		description: "Lorem ipsum dolor sit amet consectetur.",
		detailedDescription:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		thumbnail: thumbnailImages[4],
		stack: [<TbBrandReact />, <SiTypescript />, <TbBrandTailwind />],
		githubLink: "#",
		liveLink: "#",
	},
	{
		id: 6,
		title: "Project 6",
		description: "Lorem ipsum dolor sit amet consectetur.",
		detailedDescription:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		thumbnail: thumbnailImages[5],
		stack: [<TbBrandReact />, <SiTypescript />, <TbBrandTailwind />],
		githubLink: "#",
		liveLink: "#",
	},
];

export default projectsData;
