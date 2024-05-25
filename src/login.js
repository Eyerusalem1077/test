
import React, { useState } from 'react';
import axios from 'axios'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const configuration=
        {
            method:"post",
            url:" http://localhost:3001/login",
            data:{email,password}
        }
        axios(configuration)
        .then((result)=>{console.log(result);})
        .catch((error)=>{console.log(error);})
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
