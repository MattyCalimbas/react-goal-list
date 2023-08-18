// import styled from 'styled-components';
import React from 'react';

// how to import css file if using CSS modules
import styles from './Button.module.css';

// tagged template literal; Button is a method on styled object that is being imported from styled-components
// styled components create a unique id so styling doesn't affect other components
// media queries are placed into styled components like normal
// const Button = styled.button`
//   width:100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width:768px) {
//     width:auto
//   }

// &:focus { 
//   outline: none;
// }

// &:hover,
// &:active {
//   background: #ac0e77;
//   border-color: #ac0e77;
//   box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
// }
// `;


const Button = props => {
  return (
    // when using CSS Modules, css is now within styles object created above
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
