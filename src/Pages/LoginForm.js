import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === 'admin' && password === 'admin') {
          
            navigate('/admin');
        } else {
            setErrorMessage('Invalid username or password');
        }
    };

    return (
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <div className="input-box">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="input-box">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="remember-forgot">
                    <label>
                        <input type="checkbox" />
                        Remember me
                    </label>
                 
                </div>
                <button type='submit'>Login</button>
                
            </form>
        </div>
    );
};

export default LoginForm;
