import './App.css';
import Home from '../src/components/home/home'
import About from '../src/components/about/about'
import Port from '../src/components/portfolio/port'
import Contact from '../src/components/contact/contact'

function App() {
  return (
    <div className="App">
      <Home /> <About /> <Port /> <Contact />
    </div>
  );
}

export default App;
