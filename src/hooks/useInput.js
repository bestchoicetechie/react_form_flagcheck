import { useState } from "react";


const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [fieldIsVisited, setFieldIsVisited] = useState(false);
    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && fieldIsVisited;
    const valueChangeHandler = (event)=> {
        setEnteredValue(event.target.value);
    };
    
    const valueBlurHandler = () => {
        setFieldIsVisited(true);
    };
    
    const reset = () =>{
        setEnteredValue("");
        setFieldIsVisited(true);
    };

    return {
        value: enteredValue,
        hasError: hasError,
        isValid: valueIsValid,
        valueChangeHandler,
        valueBlurHandler,
        reset,
    };
}

export default useInput