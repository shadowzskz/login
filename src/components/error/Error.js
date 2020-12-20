import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

function Error({error}) {

    const notify = (err) => {
        toast.error(err, 
        {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 5000
        }
        )
    }
    
    const err = {error}

    return (
        <div className='toast' >

            {notify(err.error)}
            
        </div>
    )
}

export default Error
