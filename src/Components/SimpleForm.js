import React from 'react'
// import { useState } from 'react';
import useInput from '../hooks/useInput';

const SimpleForm = () => {

    //name
    const {
        value: userName,
        hasError: nameHasError,
        isValid: userNameIsValid,
        valueChangeHandler: usernameChangeHandler,
        valueBlurHandler: usernameBlurHandler,
        rest: nameReset,

    } = useInput((value)=> value.trim() !== "");

    //email
    const {
        value: userEmail,
        hasError: emailHasError,
        isValid: userEmailIsValid,
        valueChangeHandler: useremailChangeHandler,
        valueBlurHandler: useremailBlurHandler,
        rest: emailReset,

    } = useInput((value)=> value.includes("@"));

    // const [enteredName, setEnteredName] = useState("");
    // const [nameIsValid, setNameIsValid] = useState(false);
    // const [formIsValid, setFormIsValid] = useState(false); //form validation
    // const [nameIsVisited, setNameIsVisited] = useState(false);
    // const [success, setSuccess] = useState(false);

    // const [enteredEmail, setEnteredEmail] = useState('')
    // const [emailIsVisited, setEmailIsVisited] = useState(false);

    // const nameIsValid = enteredName.trim() !== ""; //Derived Hooks
    // const emailIsValid = enteredEmail.includes('@');

    let formIsValid = false;
    if (userNameIsValid && userEmailIsValid){
        formIsValid = true;
    }

    // useEffect(() => {
    //   if (nameIsValid){
    //     setFormIsValid(true)
    //   } else {
    //     setFormIsValid(false);
    //   }
    // }, [nameIsValid])
    

    // const nameChangeHandler = (event)=>{
    //     setEnteredName(event.target.value);
        // if (event.target.value === ''){
        //     setNameIsValid(true);
        // }; 
    // };
    // const emailChangeHandler = (event)=>{
    //     setEnteredEmail(event.target.value);
        // if (event.target.value === ''){
        //     setNameIsValid(true);
        // }; 
    // };

    // const nameBlurHandler = () =>{
    //     setNameIsVisited(true);
        // if (enteredName.trim() === ''){
        //     setNameIsValid(false);
        // }
    // }
    // const emailBlurHandler = () =>{
    //     setEmailIsVisited(true);
        // if (enteredName.trim() === ''){
        //     setNameIsValid(false);
        // }
    // }
    

    const formSubmitHandler = (event) =>{
        event.preventDefault();
        // setNameIsVisited(true);
        // setEmailIsVisited(true);
        if (!userNameIsValid && userEmailIsValid){
            // setNameIsValid(false);
            return;
        }
        console.log(userName, userEmail);
        // setEnteredName("");
        // setEnteredEmail("")
        // setNameIsValid(true);
        // setNameIsVisited(false);
        nameReset();
        emailReset();

        // setEmailIsVisited(false);

    };
    return (
    <form onSubmit={formSubmitHandler}>

        <div className={` form-control ${nameHasError ? 'invalid' : ''}`}
        >
            <label htmlFor="name">Your Name</label>
            <input 
            type="text"  
            id="name" 
            onChange={usernameChangeHandler} 
            value={userName} 
            onBlur={usernameBlurHandler} 
        />
        {nameHasError && (
            <p className='error-text'>Name Cannot be blank</p>
        )}
        </div>

        

        <div 
            className={` form-control 
            ${emailHasError ? 'invalid' : ''}`}
            >
            <label htmlFor="email">Your Email</label>
            <input 
                type="email"  
                id="email" 
                onChange={useremailChangeHandler} 
                value={userEmail} 
                onBlur={useremailBlurHandler} 
            />
            {emailHasError && (
            <p className='error-text'>Email format e.g best@mail.com</p>
        )}
        </div>

        

        {/* {!nameHasError && !emailHasError && (<p className='success-text'>Thanks... your form is submitted!</p>)} */}

        <div className="form-actions">
            <button type="submit" disabled={!formIsValid}>Submit</button>
        </div>
    </form>
  );
};

export default SimpleForm;