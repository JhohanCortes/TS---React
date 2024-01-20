import { useEffect, useState, useRef } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
import { Sub } from "./types";


interface AppState {
  subs: Sub[];
  newSubsNumber: number;
}

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0);
  const divRef = useRef<HTMLDivElement>(null)

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
