import { Link } from "react-router-dom"
import "./register.css"

export default function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
            <Link to="/" id="homeLink">
                <h3 className="loginLogo">pandaSocial</h3>
            </Link>
                <span className="loginDesc">Connect with friends and the world around you on pandaSocial</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input type="Email" className="loginInput" placeholder="Username"/>
                    <input type="Email" className="loginInput" placeholder="Email"/>
                    <input type="Password" className="loginInput" placeholder="Password"/>
                    <input type="Email" className="loginInput" placeholder="Confirm password"/>
                    <button className="loginButton">Sign Up</button>
                    <p id="alreadyRegistered">Already have an account?</p>
                    <button className="loginRegisterButton">
                        <Link to="/login" id="linkBtn">
                            Log into Account
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
