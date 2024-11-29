import "../assets/css/contact.css";

import { BiLockAlt, BiEnvelope, BiUser } from "react-icons/bi"


export function Contact() {
	return (
		<div className="contactpage">
			<h1 className="h1">Contact us</h1>
			<form className="form">
				<div>
					<label htmlFor="name">Full name</label>
					<div className="input-group">
						<BiUser className="icon" />
						<input type="text" id="name" name="name" className="input-field" />
					</div>
				</div>


				<div>
					<label htmlFor="email">Email address</label>
					<div className="input-group">
						<BiUser className="icon" />
						<input type="email" id="email" name="email" className="input-field" required />
					</div>
				</div>



				<div>
					<label htmlFor="phone">Phone number</label>
					<div className="input-group">
						<BiUser className="icon" />
						<input type="tel" id="phone" name="phone" className="input-field" />
					</div>
				</div>



				<div>
					<label htmlFor="subject">Subject</label>
					<div className="input-group">
						<BiUser className="icon" />
						<input type="text" id="subject" name="subject" className="input-field" required />
					</div>
				</div>


				<div>
					<label htmlFor="message">Message</label>
					<div className="input-group">
						<BiUser className="icon" />
						<textarea id="message" name="message" rows="10" className="input-field" required/>
					</div>
				</div>

				<div>
                <button type="submit" className="button button-primary">Send message</button>
            </div>
			</form>
		</div>
	)
}