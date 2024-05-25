
import React, { useState } from 'react';
import axios from 'axios'
const Register = () => {
    // const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // 
        const configuration=
        {
            method:"post",
            url:" http://localhost:3001/register",
            data:{email,password}
        }
        axios(configuration)
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />  */}
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
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
