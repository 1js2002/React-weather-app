import './App.css';
import hotBg from "./assets/hot.jpg";
import coldBg from "./assets/cold.jpg";
function App() {

  return (
    <div className="app" style={{backgroundImage: `url(${coldBg})` }}>
       <div className="overlay">
        <div className="container">
          <div className="section section__inputs">
            <input type="text" name="city" placeholder="enter a city.." />
            <button>°F</button>
          </div>
          <div className="section section__temperature">
            <div className="icon">
              <h3>London</h3>
              <img src="" alt="weatherlogo"></img>
              <h3>cloudy</h3>
            </div>
            <div className="temper">
              <h1>34 °C</h1>
            </div>
          </div>
          {/* bottom description */}
        </div>

       </div>
    </div>
  );
}

export default App;
