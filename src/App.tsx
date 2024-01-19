import { useEffect, useState, useRef } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
import { Sub } from "./types";

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
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0);
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSubs(INITIAL_STATE);
  }, []);

  const handleNewSub = (newSub: Sub): void => {
    setSubs([...subs, newSub]);
  }

  return (
    <div className="App" ref={divRef}>
      <h1>Lista de suscriptores</h1>
      <List subs={subs} />
      <Form onNewSub={handleNewSub}/>
    </div>
  );
}

export default App;
