import "./App.css";
import AboutSection from "./Components/AboutSection";
import Contacts from "./Components/Contacts";
import MainSection from "./Components/MainSection";
import ProjectsSection from "./Components/ProjectsSection";
import SkillSection from "./Components/SkillSection";

function App() {
	return (
		<div className="App">
			<Contacts />
			<MainSection />
			<SkillSection />
			<AboutSection />
			<ProjectsSection />
		</div>
	);
}

export default App;
