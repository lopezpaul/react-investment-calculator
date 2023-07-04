import React, { forwardRef } from "react";
import classes from './InputField.module.css';

const InputField = forwardRef((props, inputRef) => {
    return (
        <p>
            <label className={classes.label} htmlFor={props.id}>{props.label}</label>
            <input className={classes.input}
                ref={inputRef}
                type={props.type}
                id={props.id}
                defaultValue={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </p>
    );
});

export default InputField;