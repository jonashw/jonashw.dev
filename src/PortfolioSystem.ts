type PortfolioSystem = {
	slug: string;
	title: string;
	subtitle: string;
	organization: string;
	/** Who the entry is meant for, e.g. "professional" or "civic-tech". Never shown; used only to filter. */
	audience?: string[];
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