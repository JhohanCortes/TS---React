import { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";

interface Sub {
  nick: string;
  subMonths: number;
  avatar: string;
  description?: string;
}

const INITIAL_STATE = [
  {
    nick: "anderson",
    subMonths: 12,
    avatar: `https://i.pravatar.cc/150?u=anderson`,
    description: "Hola soy anderson lopezz",
  },
  {
    nick: "JoséMiguel",
    subMonths: 12,
    avatar: `https://i.pravatar.cc/150?u=JoséMiguel`,
    description: "Hola soy JoséMiguel",
  },
];

interface AppState {
  subs: Sub[];
  newSubsNumber: number;
}

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubsNumber, setNewSubsNumber] =
    useState<AppState["newSubsNumber"]>();

  useEffect(() => {
    setSubs(INITIAL_STATE);
  }, []);

  return (
    <div className="App">
      <h1>Lista de suscriptores</h1>
      <List subs={subs} />
      <Form/>
    </div>
  );
}

export default App;
