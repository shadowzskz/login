import React from 'react';
import './CustomButton.scss';

const CustomButton = ({ children,disable_val ,isGoogleSignIn, ...otherProps }) => (
    <button disabled={disable_val} className={`${isGoogleSignIn ? 'google_signIn' : '' } custon_button`} {...otherProps} >
        {children}
        {console.log({disable_val})}
    </button>
);

export default CustomButton;