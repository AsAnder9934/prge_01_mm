import React from "react";
import MediaCard from "./Card";

function Dashboard() {
  const input_list = [
    {
      name: "Janek",
      surname: "kowalski",
      content: "jakiś opis",
      image:
        "https://marcinbiodrowski.com/wp-content/uploads/2018/03/dlaczego-warto-miec-dobre-zdjecie-w-CV.jpg",
    },

    {
      name: "maciek",
      surname: "Malinowski",
      content: "jakiś opis",
      image:
        "https://marcinbiodrowski.com/wp-content/uploads/2018/03/dlaczego-warto-miec-dobre-zdjecie-w-CV.jpg",
    },
  ];
  return (
    <div>
      {input_list.map((item) => {
        return (
          <MediaCard
            name={item.name}
            surname={item.surname}
            image={item.image}
          />
        );
      })}
      <MediaCard />
    </div>
  );
}

export default Dashboard;
