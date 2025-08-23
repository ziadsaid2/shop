import './login.css'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { login } from '../../store/slice/userslice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const usernameRef = useRef();
    const passwordRef = useRef();
    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        }
        dispatch(login(data));
        toast.success('Login successful');
        navigate('/');
    }
    
    return (
        <>
            <form className="form-flex x" onSubmit={submitHandler}>
                <div className='box-flex'>
                    <div className="form-group">
                        <label htmlFor="username">Username</label><br />
                        <input type="text" placeholder="Username" className="input" name="username" ref={usernameRef} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label><br />
                        <input type="password" placeholder="Password" className="input" name="password" ref={passwordRef} required />
                    </div>
                    <button type="submit" className="btn">Login</button>
                </div>
            </form>
        </>
    );
}
export default Login;