
import { Sub } from "../types";
import { useReducer } from "react"

interface FormState {
    inputValues: Sub
}

type FormReducerAction = {
    type: "change_value",
    payload: {
        inputName: String,
        inputValue: string
    }
} | {
    type: "clear"
}


const INITIAL_STATE = {
    nick: '',
    subMonths: 0,
    avatar: '',
    description: ''
}

onst formReducer = (state:FormState["inputValues"], action: FormReducerAction) => {
switch (action.type) {
        case "change_value":
      const {inputName, inputValue} = action.payload
          return{
                ...state,
                [inputName]: inputValue
            }
        case "clear":
            return INITIAL_STATE
        
        default:
            return state
    }   
}

const useNewSubForm = () => {
    return useReducer(formReducer, INITIAL_STATE)
}

export default useNewSubForm