import React from 'react';
import './Portfolio.css';

function Portfolio() {
  const [portfolioSystems,setPortfolioSystems] = React.useState([]);

	const [activeSystem, setActiveSystem] = React.useState(undefined);

  React.useEffect(() => {
    fetch('https://storage.googleapis.com/jonashw-dev-personal-website-public-data/portfolio-systems.json')
    .then(r => r.json())
    .then(records => {
      setPortfolioSystems(records);
    });
  }, []);

  return (
		<div className="container">
			<div className="mb-5">
				<h4>Software Portfolio</h4>
				<p>I've had the privilege to work on the following software systems.</p>
			</div>
			<div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
				{portfolioSystems.map((s, i) => (
					<div key={i} style={(activeSystem === s ? {width:'100%', transition:'200ms'} : {})}>
						<div className="card h-100" onClick={() => {
							setActiveSystem(s !== activeSystem ? s : undefined);
						}}>
							{(s.Screenshots || [{ url: "https://bulma.io/images/placeholders/1280x960.png" }]).slice(0, 1).map(ss => (
								<img src={ss.url} alt={"Screenshot of " + s.Name} className="card-img-top" />
							))}
							<div className="card-body">
								<h6 className="card-title">
									{s.Title}
								</h6>
								<h7 className="card-subtitle mb-2 text-muted">
									{s.Subtitle}
								</h7>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
  );
}

export default Portfolio;