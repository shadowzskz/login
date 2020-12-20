import React from 'react';
import { useState, useEffect, useRef  } from 'react';

import Login from '../login/Login';
import Register from '../Register/Register';
import RightSwitcher from './RightSwitcher';

import "./Switch.scss";

function Switch() {
    
    const [isLogginActive, setIsLogginActive] = useState();
    const refRender = useRef();

    useEffect(() => {
        setIsLogginActive(true);
    }, [])

    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";

    const changeState = () => {
        setIsLogginActive(!isLogginActive);
    }
    
    return (
        <div className='switcher'>
            <div className="login">
                <div className="container">
                    {isLogginActive && (
                    <Login containerRef={ref => (refRender.current = ref)}/>
                            )}
                    {!isLogginActive && (
                    <Register containerRef={ref => (refRender.current = ref)}/>
                            )}
                </div>
                <div className="wrapper">
                    <RightSwitcher
                        current={current}
                        currentActive={currentActive}   
                        onClick={changeState}
                        isLogginActive={isLogginActive}
                        />
                </div>
            </div>
        </div>
    )
}                 


export default Switch;
