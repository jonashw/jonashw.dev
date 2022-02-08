import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import React from 'react';

export default () => (
	<div className="container has-text-centered">
		<img src="/jw-512x512.png" style={{width:'128px', borderRadius:'50%'}} alt="Portrait of Jon Ash Wilson" />
		<div className="mt-3 mb-5">
			<div className="is-size-4">
				Jon Ash Wilson
			</div>
			<div>
				Software Developer and Artist
			</div>
		</div>
		<div className="is-size-2 social-icons">
			<a href="https://www.linkedin.com/in/jonashw/" className="icon has-text-black mx-4">
				<FontAwesomeIcon icon={faLinkedin} />
			</a>
			<a href="https://github.com/jonashw" className="icon has-text-black mx-4">
				<FontAwesomeIcon icon={faGithub} />
			</a>
			<a href="https://instagram.com/wilsonjonash" className="icon has-text-black mx-4">
				<FontAwesomeIcon icon={faInstagram} />
			</a>
		</div>
	</div>
);