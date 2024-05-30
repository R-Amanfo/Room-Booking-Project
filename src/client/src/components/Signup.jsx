import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { handleRegister } from "../utils/resource";
import styles from '../components_light.module.css';

const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstname, setFname] = useState("");
    const [lastname, setLname] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (username.trim() && password.trim() && email.trim() && firstname.trim() && lastname.trim()) {
            await handleRegister(firstname,lastname,email, username, password, navigate);
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
            <form className={"mainContainer"} style={{gap:20, paddingTop:0}} onSubmit={handleSubmit}>
                <div className={"titleContainer"}>
                    <div className={styles.title}>Create an Account</div>
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.body} htmlFor='firstname'>First Name</label>
                    <input
                        className={styles.inputBox}
                        placeholder="First Name"
                        id='firstname'
                        name='firstname'
                        type='text'
                        required
                        value={firstname}
                        onChange={(e) => setFname(e.target.value)}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.body} htmlFor='lastname'>Last Name</label>
                    <input
                        className={styles.inputBox}
                        placeholder="Last Name"
                        id='lastname'
                        name='lastname'
                        type='text'
                        required
                        value={lastname}
                        onChange={(e) => setLname(e.target.value)}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.body} htmlFor='email'>Email Address</label>
                    <input
                        className={styles.inputBox}
                        placeholder="Email"
                        id='email'
                        name='email'
                        type='email'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.body} htmlFor='username'>Username</label>
                    <input
                        className={styles.inputBox}
                        placeholder="Enter your new username"
                        id='username'
                        name='username'
                        required
                        type='text'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.body} htmlFor='password'>Password</label>
                    <input
                        className={styles.inputBox}
                        placeholder="Enter your new passwrod"
                        id='password'
                        type='password'
                        name='password'
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className={"buttonContainer"}>
                    <button className={styles.button}>REGISTER</button>
                    <p className={styles.bodySmall} style={{ textAlign: "center" }}>
                        Already have an account?{" "}
                        <Link className='link' to='/'>
                            Sign in
                        </Link>
                    </p>
                </div>
            </form>
    );
};

export default Signup;
