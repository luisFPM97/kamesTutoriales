import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { Spinner } from 'react-bootstrap';
import axios from 'axios';



const VerificateEmail = () => {

    const url ='http://localhost:8080/users/verify/'
    const { email_code: emailCode } = useParams();
    const [ verifiedStatus, setVerifiedStatus ] = useState('loading'); // 'loading' | 'verified' | 'notVerified'

    useEffect(() => {
        axios.get(`${url}${emailCode}`)
            .then(() => setVerifiedStatus('verified'))
            .catch(() => {
                setVerifiedStatus('notVerified')
            })
    }, [ emailCode ]);

    if(verifiedStatus === 'loading') {
        return <Spinner className='mx-auto' />
    }

    if(verifiedStatus === 'verified') {
        return (
            
            <div className='text-center '>
                
            <div className="icon icon-success mb-5">
                <i className="fa-solid fa-check"></i>
            </div>
            <h1 className='mb-3'>User verified!</h1>
            <p>
                <Link to="/">Login</Link> {" "}
                with your credentials to enter the app
            </p>
        </div>
        )
    }

    else {
        
        return (
            <div className='text-center '>
                
                <div className="icon icon-error mb-5">
                    <i className="fa-solid fa-times"></i>
                </div>
                <h1 className='mb-3'>There was an error</h1>
                <p>
                    <Link to="/">Login</Link> 
                </p>
            </div>
        )
    }

}

export default VerificateEmail