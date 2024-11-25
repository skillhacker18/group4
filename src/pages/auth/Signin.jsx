import "../../assets/css/auth.signin.css"

import { Link } from "react-router";
import { BiLockAlt, BiEnvelope } from "react-icons/bi"



export function Signin() {
    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const data = Array.from(formData.entries())
        console.log(data);
    }

    return (
        <form className="form signin" onSubmit={handleSubmit}>
            <div className="heading">
                <span className="small-text">Don't have an account? <Link to="/auth/signup">Sign up</Link></span>
                <h2>Sign in</h2>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <div className="input-group">
                    <BiEnvelope className="icon" />
                    <input type="email" id="email" name="email" className="input-field" required />
                </div>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <div className="input-group">
                    <BiLockAlt className="icon" />
                    <input type="password" id="password" name="password" className="input-field" required />
                </div>
            </div>
            <div>
                <button type="submit" className="button button-primary">Sign in</button>
            </div>
            <div className="display-flex">
                <div className="form-group">
                    <input type="checkbox" id="rememberme" name="rememberme" />
                    <label htmlFor="rememberme">Remember me</label>
                </div>
                <Link>Forgot password?</Link>
            </div>
        </form>
    )
}