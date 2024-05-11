import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signin } from '../utils/api';
import { socialSignIn } from '../utils/auth'; // You would implement this function in auth.js

const SigninPage = () => {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await signin(usernameOrEmail, password);
            if (response.ok) {
                // Handle successful signin
                history.push('/dashboard');
            } else {
                // Handle error
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleSocialAuth = async (provider) => {
        try {
          const response = await socialSignIn(provider);
          if (response.ok) {
            // Handle successful social signin
            history.push('/dashboard');
          } else {
            // Handle social signin error
          }
        } catch (error) {
          console.error('Error:', error);
        }
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username or Email" value={usernameOrEmail} onChange={(e) => setUsernameOrEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Sign In</button>
        </form>
        <button onClick={() => handleSocialAuth('Google')}>Sign in with Google</button>
        </div>
    );
};

export default SigninPage;