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
      "https://jonashwdev.blob.core.windows.net/jonashw-dev-public-website-data/portfolio-systems.json?now=" +
        now
    )
      .then((r) => r.json())
      .then((records) => {
        console.log({records});
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
                s.screenshots || [
                  { url: "https://bulma.io/images/placeholders/1280x960.png" },
                ]
              )
                .slice(0, 1)
                .map((ss, i) => (
                  <img
                    src={ss.url}
                    alt={"Screenshot of " + s.title}
                    className="card-img-top"
                    key={i}
                  />
                ))}
              <div className="card-body">
                <h5 className="card-title">{s.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{s.subtitle}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
