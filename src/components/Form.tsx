import { useState } from "react";




interface FormProps{
  onNewSub: (newSub: Sub) => void
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


const Form = ({onNewSub} : FormProps) => {
  const [inputValues, setInputValues] = useState<FormState["inputValues"]>({
    nick: "",
    subMonths: 0,
    avatar: "",
    description: "",
  });

  
  useEffect(() => {
    setSubs(INITIAL_STATE);
  }, []);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onNewSub(inputValues)
    clearForm()
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.type === 'textarea' ? e.target.value : e.target.value });
  }

  const clearForm = () => {
    setInputValues({nick: "",
    subMonths: 0,
    avatar: "",
    description: "",})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={inputValues.nick} type='text' name='nick' placeholder='nick'></input>
        <input onChange={handleChange} value={inputValues.subMonths} type='number' name='subMonths' placeholder='subMonths'></input>
        <input onChange={handleChange} value={inputValues.avatar} type='text' name='avatar' placeholder='avatar'></input>
        <textarea onChange={handleChange} value={inputValues.description} name='description' placeholder='description'></textarea>
        <button>Save new sub!!</button>
      </form>
    </div>
  );
  }
export default Form;
