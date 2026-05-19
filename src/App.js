import './App.css';
import Header from './header/Header.js';
import Map from './body/Map.js';
import Footer from './footer/Footer.js';

function App() {
  return (
    <div className='App'>
      <div className='Header'>
        <Header></Header>
      </div>
      <div className='Body'>
        <Map></Map>
      </div>
      <div className='Footer'>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
