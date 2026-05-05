import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Fun from './Components/Fun';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Home />
      <Projects />
      <Skills />
      <Fun />
      <Contact />
      
      <footer className="text-center py-4">
        <p>© 2026 Carlrich Dela Cruz | APC Midterms</p>
      </footer>
    </div>
  );
}

export default App;