import "../../assets/css/auth.signin.css"

import { Link, useNavigate } from "react-router";
import { BiLockAlt, BiEnvelope } from "react-icons/bi"
import { signin } from "../../services/user";
import { useContext } from "react";
import { TokenContext } from "../../contexts/TokenContext";



function validate(data) {
    const errors = {};
    const { email, password } = data;

    if (password.length === 0) {
        errors.password = "password cannot be empty"
    }

    if (email.length === 0) {
        errors.email = "email cannot be empty"
    }

    return { ok: Object.keys(errors).length === 0, errors };
}

export function Signin() {
    const { setToken } = useContext(TokenContext);
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const email = formData.get("email")
        const password = formData.get("password")
        const rememberme = formData.get("rememberme") === "on";

        const data = { email, password, rememberme };

        const result = validate(data)
        if (!result.ok) {
            console.error(result.errors);
            window.alert("Email or password is incorrect");
            return;
        }

        const response = await signin(data);
        if (typeof response === "string") {
            setToken(response, rememberme);
            navigate("/");
        }
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
                <Link to="/upload" className="button button-primary">View order history</Link>
            </div>
        </form>
    )
}