type PortfolioSystem = {
	slug: string;
	title: string;
	subtitle: string;
	organization: string;
	/** Who the software serves, e.g. "state-government" or "any". Never shown; used only to filter. */
	sector?: string[];
	/** How the work came about: "client-work", "in-house", "saas-product" or "personal". Never shown; used only to filter. */
	engagement?: string;
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