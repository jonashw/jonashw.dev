type PortfolioSystem = {
	Title: string;
	Subtitle: string;
	Organization: string;
	Role: string[];
	URL: string | undefined;
	Description: string;
	Status: string;
	Database: string[] | undefined;
	Framework: string[];
	Platforms: string[];
	Languages: string[];
	"Integrated Systems": string[] | undefined;
	Screenshots: {
		url: string;
		title: string;
	}[];
};

export {
	PortfolioSystem
};