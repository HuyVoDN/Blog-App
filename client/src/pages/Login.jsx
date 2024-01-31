import React from 'react';
import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import axios from "axios";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "", 
  });

  const [err, setError] = useState(null);
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/api/auth/login", inputs);
      navigate("/");
      //console.log(res);
    } catch (err) {
        setError(err.response.data);
    };
  };
  
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="username" name="username" onChange={handleChange}/>
        <input type="password" placeholder="password" name="password" onChange={handleChange}/>
        <button onClick={handleSubmit}>Login</button>
        <p>This is an error!</p>
        <span>Do you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  )
}

export default Login