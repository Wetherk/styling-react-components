// import styled from "styled-components";

import styles from "./Button.module.css";

// const Button = styled.button`
//     width: 100%;
//     font: inherit;
//     padding: 0.5rem 1.5rem;
//     border: 1px solid #007bff;
//     color: white;
//     background: #007bff;
//     box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//     cursor: pointer;

//     @media (min-width: 768px) {
//         width: auto;
//     }

//     &:focus {
//         outline: none;
//     }

//     &:hover,
//     &:active {
//         background: #3498db;
//         border-color: #3498db;
//         box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//     }
// `;

const Button = (props) => {
    return (
        <button
            type={props.type}
            className={styles.button}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default Button;
