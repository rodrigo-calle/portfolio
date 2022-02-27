import { BrowserRouter } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Banner from './components/banner/Banner';
import Education from "./components/education/Education";
import Knowledge from "./components/knowledge/Knowledge";

function App() {
  return (
  <>
  <BrowserRouter>

      <header>
        <Banner />
      </header>
      <About />
      <Education />
      <Knowledge />
    
  </BrowserRouter>

    
  </>
  );
}

export default App;
