type PortfolioSystem = {
	Title: string;
	Subtitle: string;
	Organization: string;
	Role: string[];
	URL: string | undefined;
	Description: string;
	Status: string;
	Database: string[];
	Framework: string[];
	Platforms: string[];
	Languages: string[];
	"Integrated Systems": string[];
	Screenshots: {
		url: string;
		title: string;
	}[];
};

export {
	PortfolioSystem
};