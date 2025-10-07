import Home from "../pages/Home";
import Login from "../pages/Login";
import Notas from "../pages/Notas";
import Perfil from "../pages/Perfil";
import ProtegerRutas from "../components/ProtegerRuta";

export const routerApp = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <ProtegerRutas proteger={<Home />} />,
  },
  {
    path: "/perfil",
    element: <ProtegerRutas proteger={<Perfil />} />,
  },
  {
    path: "/notas",
    element: <ProtegerRutas proteger={<Notas />} />,
  },
];
