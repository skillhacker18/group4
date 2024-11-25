import "../../assets/css/auth.signup.css"

import { Link } from "react-router";
import { BiLockAlt, BiEnvelope, BiUser } from "react-icons/bi"



export function Signup() {
    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const data = Array.from(formData.entries())
        console.log(data);
    }

    return (
        <form className="form signup" onSubmit={handleSubmit}>
            <div className="heading">
                <span className="small-text">Have an account? <Link to="/auth/signin">Sign in</Link></span>
                <h2>Sign up</h2>
            </div>
            <div className="display-flex">
                <div>
                    <label htmlFor="firstname">First name</label>
                    <div className="input-group">
                        <BiUser className="icon" />
                        <input type="text" id="firstname" name="firstname" className="input-field" />
                    </div>
                </div>
                <div>
                    <label htmlFor="lastname">Last name</label>
                    <div className="input-group">
                        <BiUser className="icon" />
                        <input type="text" id="lastname" name="lastname" className="input-field" />
                    </div>
                </div>
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
                <button type="submit" className="button button-primary">Sign up</button>
            </div>
        </form>
    )
}