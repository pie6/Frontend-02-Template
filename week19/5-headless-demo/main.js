const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // 需要 AWAIT
  await page.goto('https://localhost:8080/main.html');
  const a = await page.$('a');
//   $$ get image
  console.log(await a.asElement().boxModel())
})();