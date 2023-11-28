import "./register.css"

export default function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">pandaSocial</h3>
                <span className="loginDesc">Connect with friends and the world around you on pandaSocial</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input type="Email" className="loginInput" placeholder="Username"/>
                    <input type="Email" className="loginInput" placeholder="Email"/>
                    <input type="Password" className="loginInput" placeholder="Password"/>
                    <input type="Email" className="loginInput" placeholder="Confirm password"/>
                    <button className="loginButton">Sign Up</button>
                    <button className="loginRegisterButton">
                        Log into Account
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
