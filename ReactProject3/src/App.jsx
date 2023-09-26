import Car from "./JSON/car.json";
import CarDetail from "./components/cardetail";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="navbar">
        <h1>Refurbished Car</h1>
      </div>
      <CarDetail Car={Car} />
    </div>
  );
}

export default App;
