import { useState } from "react";
import "./App.css";
import List from "./components/List";

interface Sub{
  nick: string
  subMonths: number
  avatar: string
  description?:string
}

interface AppState{
  subs:Sub[]
  newSubsNumber: number
}

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>();


  return (
    <div className="App">
      <h1>Lista de suscriptores</h1>
      <List  subs={subs} />
    </div>
  );
}

export default App;
