import React from "react";
import "./Portfolio.css";
import PortfolioApplicationModal from "./PortfolioApplicationModal";
import { PortfolioSystem } from "./PortfolioSystem";

function Portfolio() {
  const [portfolioSystems, setPortfolioSystems] = React.useState<
    PortfolioSystem[]
  >([]);
  const [activeSystem, setActiveSystem] = React.useState<
    PortfolioSystem | undefined
  >(undefined);

  React.useEffect(() => {
    let d = new Date();
    let now = [d.getFullYear(), d.getMonth(), d.getDay(), d.getHours()].join(
      "-"
    ); //set cache granularity to something less than *forever*.
    fetch(
      "https://storage.googleapis.com/jonashw-dev-personal-website-public-data/portfolio-systems.json?now=" +
        now
    )
      .then((r) => r.json())
      .then((records) => {
        setPortfolioSystems(records);
      });
  }, []);

  return (
    <div className="container">
      <div className="mb-5">
        <h4>Software Application Portfolio</h4>
        <p>
          I've had the privilege to work on the following software applications.
        </p>
      </div>

      <PortfolioApplicationModal
        system={activeSystem}
        setSystem={setActiveSystem}
      />

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {portfolioSystems.map((s, i) => (
          <div key={i}>
            <div
              className="card h-100"
              onClick={() => {
                setActiveSystem(s !== activeSystem ? s : undefined);
              }}
            >
              {(
                s.Screenshots || [
                  { url: "https://bulma.io/images/placeholders/1280x960.png" },
                ]
              )
                .slice(0, 1)
                .map((ss, i) => (
                  <img
                    src={ss.url}
                    alt={"Screenshot of " + s.Title}
                    className="card-img-top"
                    key={i}
                  />
                ))}
              <div className="card-body">
                <h5 className="card-title">{s.Title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{s.Subtitle}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
