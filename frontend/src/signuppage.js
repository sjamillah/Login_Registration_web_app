import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signup } from '../utils/api'; 

const SignupPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await signup(username, email, password);
            if (response.ok) {
                //handle successful signup
                sendVerificationEmail(email); // Triggers email verification after successful signup
                history.push('/verification'); // Redirects to email verification page
            } else {
                //Handle error
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const sendVerificationEmail = async (emailAddress) => {
        try {
            // Call an API endpoint to send a verification email to the provided email address
            // This endpoint should generate a verification token and include it in the email link
            const response = await fetch('/api/send-verification-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: emailAddress })
            });
            if (!response.ok) {
                // Handle error sending verification email
                console.error('Error sending verification email:', response.status);
            }
        } catch (error) {
            console.error('Error sending verification email:', error);
        }
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Sign Up</button>
        </form>
        </div>
    );
};

export default SignupPage;