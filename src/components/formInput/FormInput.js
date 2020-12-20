import React from 'react';

import './FormInput.scss';

const FormInput  = ({handleChange, label, value, ...otherProps }) => (
    <div className="group">
        <input className="form_input" onChange={handleChange}{...otherProps}/>
        {
            label ?
                    (<label className={`${value ? 'shrink': ''} form_input_label`}>
                        {label}
                    </label>)
            : 
            null
        }
    </div>   
);

export default FormInput;