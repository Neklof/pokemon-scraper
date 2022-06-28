import browser from './browser.js'
import scraperController from './scraperController.js'

const browserInstance = browser()
const scraperSelected = 0 //Pokemon

scraperController(browserInstance, scraperSelected)
