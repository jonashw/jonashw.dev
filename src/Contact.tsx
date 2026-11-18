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
				Software Architect
			</div>
			<div className="text-muted mt-2 mx-auto" style={{maxWidth:'34em'}}>
				I help mission-driven organizations make sound technology decisions, then build what's worth building. Lately, that includes deciding where AI really earns its place.
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