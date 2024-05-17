import React from "react"
import { useNavigate } from "react-router-dom";
import styles from '../components_light.module.css';

const Home = (props) => {
    const { loggedIn, email } = props
    const navigate = useNavigate();
    
    const onButtonClick = () => {
        if (loggedIn) {
            localStorage.removeItem("user")
            props.setLoggedIn(false)
        } else {
            navigate("/login")
        }
    }


    return <div className="mainContainer">
        <div className={"titleContainer"}>
            <div className={styles.title}>Welcome!</div>
        </div>
        <div className={styles.body}>
            This is the home page.
        </div>
        <div className={"buttonContainer"}>
            <input
                className={styles.button}
                type="button"
                onClick={onButtonClick}
                value={loggedIn ? "Log out" : "Log in"} />
            {(loggedIn ? <div>
                Your email address is {email}
            </div> : <div/>)}
        </div>


    </div>
}

export default Home