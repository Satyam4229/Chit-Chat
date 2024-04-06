import { useState } from 'react';
import axios from 'axios';
import image from '../images/CHIT.png'

const projectID = "b1e00215-94c7-466a-a6f6-1a1084dafd8e"

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [ error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const authObject = { 'Porject-ID': projectID, 'User-Name': username, 'User-Secret': password };

        try {
            axios.get('https://api.chatengine.io/chats', { headers: authObject });

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
            setError("");
        } catch (error) {
            setError('Oops, incorrect credentials.');
        }
    }

    return (
        <div className='wrapper'>
            <div className='form'>
                <div className='logo-div'>
                <img src={image} alt="Logo" width={150} height={150} className='logo'/>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className='input' placeholder='Username' required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder='password' required />
                    <div align="center">
                        <button type='submit' className='button'>
                            <span>Start Chatting</span>
                        </button>
                    </div>
                </form>
                <h2 className='error'>{error}</h2>
            </div>
        </div>
    )
    
}

export default LoginForm;