import "./App.css";

const lista_uzytkownikow = [
  { imie: "Wojciech" },
  { imie: "Maciej" },
  { imie: "Marek" },
  { imie: "Piotr" },
];

function App() {
  return (
    <div className="App">
      {lista_uzytkownikow.map((zolnierz) => {
        return <div>{zolnierz.imie}</div>;
      })}
    </div>
  );
}

export default App;
