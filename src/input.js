import React from 'react';

function Input(props) {
    return (
        <div>
            <label>{props.error}</label><input type="text" onBlur={props.blur} onChange={props.click} /><label>{props.data}</label>
        </div>
    );
}

export default Input;