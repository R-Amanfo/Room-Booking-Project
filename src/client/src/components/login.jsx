import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from '../components_light.module.css';

const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    
    const navigate = useNavigate();
        
    const onButtonClick = () => {

        // Set initial error values to empty
        setEmailError("")
        setPasswordError("")

        // Check if the user has entered both fields correctly
        if ("" === email) {
            setEmailError("Please enter your email")
            return
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
          setEmailError("Please enter a valid email")
          return
      }

        if ("" === password) {
            setPasswordError("Please enter a password")
            return
        }

        if (password.length < 7) {
            setPasswordError("The password must be 8 characters or longer")
            return
        }

        // Check if email has an account associated with it
        checkAccountExists(accountExists => {
            // If yes, log in 
            if (accountExists)
                logIn()
            else
            // Else, ask user if they want to create a new account and if yes, then log in
                if (window.confirm("An account does not exist with this email address: " + email + ". Do you want to create a new account?")) {
                    logIn()
                }
        })        
  

    }

    // Call the server API to check if the given email ID already exists
    const checkAccountExists = (callback) => {
        fetch('http://localhost:3001/check-account', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({email})
        })
        .then(r => r.json())
        .then(r => {
            callback(r?.userExists)
        })
    }

    // Log in a user using email and password
    const logIn = () => {
        fetch('http://localhost:3001/auth', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({email, password})
        })
        .then(r => r.json())
        .then(r => {
            if ('success' === r.message) {
                localStorage.setItem("user", JSON.stringify({email, token: r.token}))
                props.setLoggedIn(true)
                props.setEmail(email)
                navigate("/Dashboard")
                console.log("login working")
             
            } else {
              window.alert("Wrong email or password")
              let ror = r.message
              console.log(ror);
             
            }
        })
    }

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div className={styles.title}>Login</div>
        </div>
        <div className={styles.inputContainer}>
            <input
                value={email}
                placeholder="Enter your email here"
                onChange={ev => setEmail(ev.target.value)}
                className={styles.inputBox} />
            <label className={styles.errorLabel}>{emailError}</label>
        </div>
        <div className={styles.inputContainer}>
            <input
                value={password}
                placeholder="Enter your password here"
                onChange={ev => setPassword(ev.target.value)}
                className={styles.inputBox} />
            <label className={styles.errorLabel}>{passwordError}</label>
        </div>
        <div className={"buttonContainer"}>
            <input
                className={styles.button}
                type="button"
                onClick={onButtonClick}
                value={"Log in"} />

                <p className={styles.bodySmall} style={{ textAlign: "center" }}>
                    Don't have an account?{" "}
                    <Link className='link' to='/Signup'>
                        Create one
                    </Link>
                </p>
        </div>
    </div>
}

export default Login