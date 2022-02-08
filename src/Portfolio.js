import React from 'react';

const chunk = (array, chunkSize) => {
	let chunkCount = Math.ceil(array.length / chunkSize);
	return Array(chunkCount).fill(undefined)
		.map((_, index) => index * chunkSize)
		.map(begin => array.slice(begin, begin + chunkSize));
}

function Portfolio() {
  const [portfolioSystems,setPortfolioSystems] = React.useState([]);

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
				<h2 className="is-size-4">Software Portfolio</h2>
				<p>I've had the privilege to work on the following software systems.</p>
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
  );
}

export default Portfolio;