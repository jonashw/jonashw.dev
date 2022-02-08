import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import React from 'react';
import './Contact.css';

const Contact = () => (
	<div className="container text-center">
		<img src="/jw-512x512.png" style={{width:'128px', borderRadius:'50%'}} alt="Portrait of Jon Ash Wilson" />
		<div className="mt-3">
			<div className="h4">
				Jon Ash Wilson
			</div>
			<div>
				Software Developer and Artist
			</div>
		</div>
		<div className="h1 social-icons mt-3">
			<a href="https://www.linkedin.com/in/jonashw/" className="icon mx-2">
				<FontAwesomeIcon icon={faLinkedin} />
			</a>
			<a href="https://github.com/jonashw" className="icon mx-2">
				<FontAwesomeIcon icon={faGithub} />
			</a>
			<a href="https://instagram.com/wilsonjonash" className="icon mx-2">
				<FontAwesomeIcon icon={faInstagram} />
			</a>
		</div>
	</div>
);

export default Contact;