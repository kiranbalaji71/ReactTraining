import { useState } from "react";
import "./cardetail.css";

function CarDetail({ Car }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="contain">
      {Car.map((object) => (
        <div
          className="card"
          onMouseEnter={() => setHovered(object.title)}
          onMouseLeave={() => setHovered(null)}
          key={object.title}
        >
          <img src={object.image} alt={object.title} />
          {hovered === object.title && (
            <div className="car-details">
              <h4>
                {object.title} ({object.start_production})
              </h4>
              <p>Type : {object.class}</p>
              <p>Fuel : {object.fuel_type}</p>
              <p>Transmission: {object.transmission}</p>
              <button>Buy for {object.price}</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
export default CarDetail;
