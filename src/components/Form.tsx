import { useState } from "react";

const Form = () => {
  const [inputValues, setInputValues] = useState({
    nick: "",
    subMonths: 0,
    avatar: "",
    description: "",
  });

  const handleChange = () => {};

  const handleSumbit = () => {};

  return (
    <div>
      <form onSubmit={handleSumbit}>
        <input value={inputValues.nick} type='text' name='nick' placeholder='nick'></input>
        <input value={inputValues.subMonths} type='number' name='subMonths' placeholder='subMonths'></input>
        <input value={inputValues.avatar} type='text' name='avatar' placeholder='avatar'></input>
        <input value={inputValues.description} type='text' name='description' placeholder='description'></input>
        <button>Save new sub!!</button>
      </form>
    </div>
  );
};

export default Form;
