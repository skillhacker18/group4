import "../../assets/css/auth.signup.css"

import { Link, useNavigate } from "react-router";
import { BiLockAlt, BiEnvelope, BiUser } from "react-icons/bi"
import { signup } from "../../services/user";



function validate(data) {
    const errors = {};
    const { firstname, lastname, email, password } = data;

    if (firstname.length > 0 && firstname.length <= 2) {
        errors.firstname = "firstname must be at least 2 characters long"
    }

    if (lastname.length > 0 && lastname.length <= 2) {
        errors.lastname = "lastname must be at least 2 characters long"
    }

    if (password.length <= 2) {
        errors.password = "password must be at least 2 characters long"
    }

    if (!email.includes("@") || !email.includes(".")) {
        errors.email = "email is malformed"
    }

    return { ok: Object.keys(errors).length === 0, errors };
}

export function Signup() {
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const firstname = formData.get("firstname")
        const lastname = formData.get("lastname")
        const email = formData.get("email")
        const password = formData.get("password")

        const data = { firstname, lastname, email, password };

        const result = validate(data)
        if (!result.ok) {
            console.error(result.errors);
            window.alert("Check the console for errors.");
            return;
        }

        const status = await signup(data);
        if (status === 201) {
            navigate("/auth/signin")
        }
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