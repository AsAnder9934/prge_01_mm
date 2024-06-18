import React, { useState } from "react";
import { Circle, Marker, Popup, useMapEvent } from "react-leaflet";
import { hospitalIcon } from "./Icon";

function MarkerPlacement() {
  const [position, setPosition] = useState(null);
  const [mass, setMass] = useState(1000);
  const map = useMapEvent({
    click: (e) => {
      console.log(e.latlng);
      setPosition(e.latlng);
    },
  });

  const promien = (mass) => {
    // console.log(Math.pow(mass, 1 / 3) / Math.pow(80 / 980, 1 / 1.89));
    return Math.pow(mass, 1 / 3) / Math.pow(80 / 980, 1 / 1.89);
  };
  const promien_1 = (mass) => {
    // console.log(Math.pow(mass, 1 / 3) / Math.pow(80 / 980, 1 / 1.89));
    return Math.pow(mass, 1 / 3) / Math.pow(30 / 980, 1 / 1.89);
  };
  const promien_2 = (mass) => {
    // console.log(Math.pow(mass, 1 / 3) / Math.pow(80 / 980, 1 / 1.89));
    return Math.pow(mass, 1 / 3) / Math.pow(15 / 980, 1 / 1.89);
  };

  return (
    <div>
      {position ? (
        <>
          {" "}
          <Marker icon={hospitalIcon} position={position}>
            <Popup>
              Podaj masę ładunku wybuchowego w kg
              <input
                type="range"
                min="0"
                max="750000000"
                defaultValue="0"
                onChange={(e) => {
                  setMass(e.target.value);
                }}
              ></input>
              {mass}
            </Popup>
          </Marker>
          <Circle
            center={position}
            radius={promien_2(mass)}
            pathOptions={{ color: "green" }}
          ></Circle>
          <Circle
            center={position}
            radius={promien_1(mass)}
            pathOptions={{ color: "orange" }}
          ></Circle>
          <Circle
            center={position}
            radius={promien(mass)}
            pathOptions={{ color: "red" }}
          ></Circle>
        </>
      ) : (
        "d"
      )}
    </div>
  );
}

export default MarkerPlacement;
