import logo from './logo.svg';
import './App.css';
import Movies from './Movies';
import Title from './Titile'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://www.stchristophersplace.com/wp-content/uploads/2019/11/Selfridges-Cinema-Header-Image.png" width="1000px" alt="logo" />
      </header>
      <Title name="something between art and life"/>
     <Movies/>
    </div>
  );
}



export default App;
