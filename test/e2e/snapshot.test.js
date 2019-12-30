const devices = require('puppeteer/DeviceDescriptors');
const fs = require('fs');
const path = require('path');

describe('視覚回帰テスト', () => {
  const domain = 'http://example.com/';
  const rootPath = path.resolve(__dirname, '../../htdocs');
  const username = '__username__';
  const password = '__password__';
  const isMobile = false;
  const device = 'iPhone 7';
  const { width: deviceWidth, height: deviceHeight } = devices[device].viewport;
  const pageList = getPageList(rootPath);
  const urls = pageList.map(page => domain + page)

  urls.forEach(url => {
    test('スナップショット', async () => {
      if (isMobile) {
        await page.emulate(devices[device]);
        await page.setViewport({
          width: deviceWidth,
          height: deviceHeight
        });
      }
      await page.authenticate({
        username,
        password
      });
      url = url.replace('index.html', '');
      await page.goto(url);
      await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'dark' }])
      const viewportHeight = page.viewport().height;
      await autoScrollDown(viewportHeight)
      const image = await page.screenshot({
        fullPage: true
      });

      await expect(image).toMatchImageSnapshot();
    });
  })
})

function getPageList(dir, arr = []) {
  const fileNames = fs.readdirSync(dir);

  fileNames.forEach((fileName) => {
    const pathName = path.join(dir, fileName);
    const isHTML = pathName.includes('.html');
    const stats = fs.statSync(pathName);

    if (stats.isFile() && isHTML) {
      arr.push(pathName.split('htdocs/')[1])
    } else if (stats.isDirectory()) {
      getPageList(pathName, arr);
    }
  });
  return arr;
}

async function autoScrollDown(viewportHeight) {
  const getScrollHeight = () => {
    return Promise.resolve(document.documentElement.scrollHeight)
  };

  let scrollHeight = await page.evaluate(getScrollHeight);
  let currentPosition = 0;
  let scrollNumber = 0;

  while (currentPosition < scrollHeight) {
    scrollNumber += 1;
    const nextPosition = scrollNumber * viewportHeight;
    await page.evaluate(function (scrollTo) {
      return Promise.resolve(window.scrollTo(0, scrollTo))
    }, nextPosition);
    await page.waitForNavigation({
      waitUntil: 'networkidle2',
      timeout: 100
    }).catch(e => console.log('timeout exceed. proceed to next operation'));

    currentPosition = nextPosition;
  }
}
