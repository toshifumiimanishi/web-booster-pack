jest.setTimeout(1000 * 60 * 3);

const expectPuppeteer = require('expect-puppeteer')
const jestImageSnapshot = require('jest-image-snapshot')

expect.extend(expectPuppeteer)
expect.extend(jestImageSnapshot)