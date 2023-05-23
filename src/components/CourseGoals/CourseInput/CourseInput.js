import React, { useState } from "react";
// import styled from "styled-components";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

// const FormControl = styled.div`
//     margin: 0.5rem 0;

//     & label {
//         font-weight: bold;
//         display: block;
//         margin-bottom: 0.5rem;
//     }

//     & input {
//         display: block;
//         width: 100%;
//         border: 1px solid ${(props) => (props.$invalid ? "#ff7f7f" : "#ccc")};
//         background: ${(props) => props.$invalid && "#ffdbdb"};
//         font: inherit;
//         line-height: 1.5rem;
//         padding: 0 0.25rem;
//     }

//     & input:focus {
//         outline: none;
//         background: #b3d7ff;
//         border-color: #007bff;
//     }
// `;

const CourseInput = (props) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isValid, setIsValid] = useState(true);

    const goalInputChangeHandler = (event) => {
        const value = event.target.value;
        if (value.trim().length) {
            setIsValid(true);
        }
        setEnteredValue(value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (enteredValue.trim().length === 0) {
            setIsValid(false);
            return;
        }
        props.onAddGoal(enteredValue);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div
                className={`${styles["form-control"]} ${
                    !isValid ? styles.invalid : ""
                }`}
            >
                <label>Course Goal</label>
                <input
                    type="text"
                    value={enteredValue}
                    onChange={goalInputChangeHandler}
                />
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default CourseInput;
