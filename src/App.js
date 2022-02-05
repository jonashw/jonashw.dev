import './App.css';
import 'bulma/css/bulma.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import React from 'react';

const chunk = (array, chunkSize) => {
	let chunkCount = Math.ceil(array.length / chunkSize);
	return Array(chunkCount).fill(undefined)
		.map((_, index) => index * chunkSize)
		.map(begin => array.slice(begin, begin + chunkSize));
}

function App() {
  const [portfolioSystems,setPortfolioSystems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://storage.googleapis.com/jonashw-dev-personal-website-public-data/portfolio-systems.json')
    .then(r => r.json())
    .then(records => {
      setPortfolioSystems(records);
    });
  }, []);

  return (
    <div style={{
      background:'#ebeef1',
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
      <div className="container mt-5">
        <div className="mb-5">
          <h2 className="is-size-4">Software Portfolio</h2>
          <p>I've had the privelege to work on the following software systems.</p>
        </div>
        {chunk(portfolioSystems,4).map(c => (
          <div className="columns">
            {c.map((s,i) => (
              <div key={i} className="column is-3">
                <div className="card">
                  <header className="card-header">
                    <p className="card-header-title">
                      {s.Name}
                    </p>
                  </header>
                  {(s.Screenshots || [{url:"https://bulma.io/images/placeholders/1280x960.png"}]).slice(0,1).map(ss => (
                    <div className="card-image">
                      <figure className="image is-4by3">
                        <img src={ss.url} alt={"Screenshot of " + s.Name}/>
                      </figure>
                    </div>
                  ))}
                  <div className="card-content">
                    <div className="content">
                      {s.Description}
                    </div>
                  </div>
                </div>
              </div>
          ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;