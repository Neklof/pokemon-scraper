import Puppeteer from 'puppeteer'

const startBrowser = async () => {
	let browser
	try {
		console.log('Opening browser...')
		browser = await Puppeteer.launch({
			headless: false,
			args: ['--disable-setuid-sandbox'],
			ignoreHTTPSErrors: true,
		})
	} catch (error) {
		console.log('Could not create an instance => :', error)
	}
	return browser
}

export default startBrowser
