import '../styles/App.css';
import Welcome from './Welcome';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Welcome />
      <Projects />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App
