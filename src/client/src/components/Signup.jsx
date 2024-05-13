import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { handleRegister } from "../utils/resource";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstname, setFname] = useState("");
    const [lastname, setLname] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {

        
        e.preventDefault();
        if (username.trim() && password.trim() && email.trim() && firstname.trim() && lastname.trim()) {
            console.log(email, username, password,firstname,lastname);
            setPassword("");
            setUsername("");
            setEmail("");
            setFname("");
            setLname("");
        }
    };
    // todo
    //get latest user ID from db and +1
    // For userid field
    return (
        <main className='signup'>
            <form className='signup__form' onSubmit={handleSubmit}>
                <h2 className='signup__title'>Create an account</h2>
                <label htmlFor='firstname'>First Name</label>
                <input
                    id='firstname'
                    name='firstname'
                    type='firstname'
                    required
                    value={firstname}
                    onChange={(e) => setFname(e.target.value)}
                />
                <label htmlFor='lastname'>Last Name</label>
                <input
                    id='lastname'
                    name='lastname'
                    type='lastname'
                    required
                    value={lastname}
                    onChange={(e) => setLname(e.target.value)}
                />
                <label htmlFor='email'>Email Address</label>
                <input
                    id='email'
                    name='email'
                    type='email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor='username'>Username</label>
                <input
                    id='username'
                    name='username'
                    required
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor='password'>Password</label>
                <input
                    id='password'
                    type='password'
                    name='password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className='signupButton'>REGISTER</button>
                <p style={{ textAlign: "center", marginTop: "30px" }}>
                    Already have an account?{" "}
                    <Link className='link' to='/'>
                        Sign in
                    </Link>
                </p>
            </form>
        </main>
    );
};

export default Signup;