interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'ProDevOpsGuy', // Site author
	title: 'Free DevOps/Cloud World', // Site title.
	description:
		'ProDevOpsGuy is a DevOps/Cloud world which gives the best output and learning, exploring things on DevOps, Cloud Technologies', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
