import { BrowserRouter } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Banner from './components/banner/Banner';

function App() {
  return (
  <>
  <BrowserRouter>

      <header>
        <Banner />
      </header>
      <About />
    
  </BrowserRouter>

    
  </>
  );
}

export default App;
