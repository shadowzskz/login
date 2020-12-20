import React, { useState } from "react";
import loginImg from "../../img/log.svg";
import CustomButton from "../customButton/CustomButton";
import FormInput from "../formInput/FormInput";

import auth from "../../firebase";
import { useAuth } from '../../contexts/AuthContext';

import "./Login.scss"

function Login() {
    
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();

    
    const login = e => {
        e.preventDefault();        
        
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {

        })
        .catch(e => alert(e.message));
    }

    return (
        <div className="base-container">
            <div className="header"><h4>Login</h4></div>
                <div className="content">
                <div className="image">
                    <img src={loginImg} />
                </div>
                <div className="form">
                    <div className="form-group">
                        <FormInput 
                            type="email" 
                            name="email" 
                            handleChange={e => e.target.value}
                            value={email} 
                            label="Email"
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <FormInput 
                                type="password" 
                                name="passoword" 
                                handleChange={e => e.target.value}
                                value={password} 
                                label="Password"
                                required 
                            />
                    </div>
                    <div className="footer">
                        <div className="btn">
                            <CustomButton onClick={login}>Login</CustomButton>
                            {/** <CustomButton 
                                onClick={signInWithGoogle} isGoogleSignIn> 
                                SignIn with Google
                            </CustomButton>*/}
                        </div>
                    </div>
                </div>
            </div>
                
        </div>
    )
}

export default Login
