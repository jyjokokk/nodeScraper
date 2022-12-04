# nodeScraper

Resource scraping CLI application for NodeJS, written in TypeScript.

## TODO

- [ ] Plan application structure to follow Clean Architecture and scalability
- [ ] Write tests for easier development (TDD)
- Mocking should be easy when following depency injection / IoC
- [ ] Resource downloading
- [ ] Axios/HTTP-util for easier response handling

## Backlog

- [ ] Create an interactive CLI
- [ ] Respecting `robots.txt`
- [ ] Establishing sessions with websites
- [ ] Clean business logic to separate modules from index.ts

## Secondary Ideas

- [ ] Algorithm for grouping URLs until they point they diverge
  - **Example:** Scraping this URL would produce something like this:

  ```text
  1x https://github.com/jyjokokk/nodeScraper/tree/main/src/* found...
  3x https://github.com/jyjokokk/nodeScraper/tree/main/utils/* found...
  ```

- [ ] Browser extension to control the application directly from the website
  - The whole application might be possible to package into an extension, no
  backend needed
