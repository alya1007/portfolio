import "./App.css";
import AboutSection from "./Components/AboutSection";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";
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
			<Footer />
		</div>
	);
}

export default App;
