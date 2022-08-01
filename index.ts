/**
 * Entrypoint for the application
 *
 * Note:
 *   - No business logic here should be written here once done, it should be
 *   contained in modules which should only be imported and called from here.
 *
 * TODO:
 *   - Clean business logic from the file
 *   - See README for the TODO for the full application
 */

import config from './utils/config'
import cheerio from 'cheerio'
import Http from './utils/http'
import { validateUrl, filterUrls } from './utils/url.utils'

const http = new Http()

const URL = validateUrl(config.TESTURL)
const FILTER = config.TESTFILTER

const getHrefs = async (url: string): Promise<string[]> => {
  const links = []
  const response = await http.get(url)
  const $ = cheerio.load(response.data)
  const linkObjects = $('a')
  linkObjects.each((index, element) => {
    links.push(url + $(element).attr('href'))
  })
  return links
}

const main = async () => {
  const allLinks = await getHrefs(URL)
  const links = filterUrls(allLinks, FILTER)
  console.log(`URL for the page is:\n\t ${URL}`)
  console.log('URLs found from the page:')
  for (let i = 0; i < links.length; i++) {
    console.log(`\t${links[i]}`)
  }
}

main()
