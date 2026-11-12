type PortfolioSystem = {
	slug: string;
	title: string;
	subtitle: string;
	organization: string;
	role: string[];
	url: string | undefined;
	description: string;
	status: string;
	database: string[] | undefined;
	framework?: string[];
	platforms?: string[];
	languages?: string[];
	library?: string[];
	"integrated Systems": string[] | undefined;
	screenshots: {
		url: string;
	}[];
};

export {
	PortfolioSystem
};