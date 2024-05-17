import React from "react";
import MediaCard from "./Card";

function Dashboard() {
  const input_list = [
    { name: "Janek", surname: "kowalski", content: "jakiś opis" },
    { name: "maciek", surname: "Malinowski", content: "jakiś opis" },
  ];
  return (
    <div>
      {input_list.map((item) => {
        return <MediaCard name={item.name} surname={item.surname} />;
      })}
      <MediaCard />
    </div>
  );
}

export default Dashboard;
