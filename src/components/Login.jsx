import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Auth';
import { useLocation } from "react-router-dom";

const Login = () => {
    const [user, setUser] = useState('');
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const redirectPath = location.state?.path || '/'

    const handleLogin = () => {
        auth.login(user)
        navigate(redirectPath, {replace: true});
    }
    return (
        <div className="login">
            <label>
                Username: <input type='text' onChange  = {e => setUser(e.target.value)} />
            </label>
            <button type='button' onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login;