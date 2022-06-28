import scraper from './scrapers/pokemon.js'

const Pokemon = {
	url: 'https://www.pokemon.com/el/pokedex/',
	scraper,
}

const scraperObjects = [Pokemon]

export default scraperObjects
