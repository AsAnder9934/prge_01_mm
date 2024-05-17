import "./App.css";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Map from "./components/map/Map";
import { Dashboard } from "@mui/icons-material";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/services/map",
    element: <Map />,
  },
  {
    path: "/services/dashboard",
    element: <Dashboard />,
  },
]);

function App() {
  const imie = "tomasz";

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
