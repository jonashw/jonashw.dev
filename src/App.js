import './App.css';
import 'bulma/css/bulma.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div style={{
      background:'#ebeef1',
      position:'absolute',
      top:'0',
      bottom:'0',
      left:0,
      right: 0,
      padding:'3em'
    }}>
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
    </div>
  );
}

export default App;
