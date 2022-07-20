import config from './utils/config'
import axios from 'axios'
import cheerio from 'cheerio'

const URL = config.TESTURL
const FILTER = config.TESTFILTER

const getHrefs = async (url: string): Promise<string[]> => {
  try {
    const links = []
    const response = await axios.get(url)
    // .catch(
    //   (error: AxiosError) => {
    //     if (error.response) {
    //       console.log(`Response error: ${error.response.status}`)
    //     }
    //   }
    // )
    const html = response.data
    const $ = cheerio.load(html)
    const linkObjects = $('a')
    linkObjects.each((index, element) => {
      links.push(url + $(element).attr('href'))
    })
    return links
  } catch (error) {
    console.log(error.response.body)
  }
}

const filterUrls = (urls: string[], filter: string): string[] => {
  const re = new RegExp(filter)
  const filtered = urls.filter(url => re.test(url))
  return filtered
}

const main = async (): Promise<void> => {
  const allLinks = await getHrefs(URL)
  const links = filterUrls(allLinks, FILTER)
  console.log(`URL for the page is:\n\t ${URL}`)
  console.log('URLs found from the page:')
  for (let i = 0; i < links.length; i++) {
    console.log(`\t${links[i]}`)
  }
}

main()
