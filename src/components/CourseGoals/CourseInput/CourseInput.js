import React, { useState } from 'react';
// import styled from 'styled-components';

import Button from '../../UI/Button/Button';
import styles from'./CourseInput.module.css';


// & input is recieving invalid prop from component call within return and running arrow function to dynmically change css value within styled component
// const FormControl = styled.div`
//   margin: 0.5rem 0;


// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   color: ${props => props.invalid ? 'red':'black'}
// }

// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid ${props => props.invalid ? 'red':'#ccc'};
//   background: ${props => props.invalid ? '#ffd7d7':'transparent'};
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }
// `;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true)

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  // Using simple validation to sanitize user input
  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false)
      return;
    }
    props.onAddGoal(enteredValue);
  };

  // using template literal to dynamically change string variable to contain invalid if data input pulls error
  // invalid prop to track true/false value of isValid.  If invalid changes to true (isValid), styled component above has callback functions using invalid prop
  return (
    <form onSubmit={formSubmitHandler}>
      {/* to access property use square brackets to access property names with dashes */}
      {/* using && ternary operation where if first argument is true return what is after &&, this is a way to implement dynamic classes with CSS Modules*/}
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`} invalid={!isValid}>
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
