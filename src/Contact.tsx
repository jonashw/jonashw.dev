import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
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
				Software Architect who builds with AI
			</div>
			<div className="text-muted mt-1">
				18 years designing and shipping data-heavy systems for state agencies, universities, and SaaS products
			</div>
		</div>
		<div className="h1 social-icons mt-3">
			<a href="https://www.linkedin.com/in/jonashw/" className="icon mx-2" aria-label="LinkedIn">
				<FontAwesomeIcon icon={faLinkedin} />
			</a>
			<a href="https://github.com/jonashw" className="icon mx-2" aria-label="GitHub">
				<FontAwesomeIcon icon={faGithub} />
			</a>
		</div>
	</div>
);

export default Contact;