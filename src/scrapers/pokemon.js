async function pokemonScraper(browser) {
	const page = await browser.newPage()
	await page.setViewport({
		width: 1920,
		height: 950,
	})
	await page.goto(this.url)
}

export default pokemonScraper
