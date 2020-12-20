import React, { useState } from "react";
import loginImg from "../../img/register.svg";
import CustomButton from "../customButton/CustomButton";
import FormInput from "../formInput/FormInput";
import "./Register.scss";

import { useAuth } from "../../contexts/AuthContext";
import auth from "../../firebase";
import Error from "../error/Error"

function Register() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState(); 
    const [confirmPassword, setConfirmPassword] = useState();  
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState();
    

    function signUp(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }
    
    async function reg(e) {
        e.preventDefault();

        if (password !== confirmPassword) {
            return setError('Password do not match');
        }

        try {
            setError('');
            setLoading(true);
            await signUp(email, password)
        } catch {
            setError("Failed to create an account")
        }
        setLoading(false);
    }
    return (
        <div className="base_container">
            <div className="header"><h4>Register</h4></div>
                <div className="content">
                    <div className="image">
                        <img src={loginImg} />
                    </div>
                    { error && <Error error = {error} /> }
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
                        <div className="form-group">
                            <FormInput 
                                    type="password" 
                                    name="passoword" 
                                    handleChange={e => e.target.value}
                                    value={password} 
                                    label="Confirm Password"
                                    required 
                                />
                        </div>
                        <div className="footer">
                            <div className="btn">
                                <CustomButton disable_val={loading} onClick={reg}>Register</CustomButton>
                            </div>
                        </div>
                        </div>
                </div>                
        </div>
    )
}

export default Register
