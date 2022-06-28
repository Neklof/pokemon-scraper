import scraperObjects from './scrapers.js'

async function scraperController(browserInstance, scraperSelected) {
	try {
		const browser = await browserInstance
		await scraperObjects[scraperSelected].scraper(browser)
	} catch (error) {
		console.log('Could not resolve broser instance => ', error)
	}
}

export default scraperController
