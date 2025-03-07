import puppeteer from "puppeteer";

import { fork } from "child_process";

jest.setTimeout(30000); // default puppeteer timeout
describe("tooltip", () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = "http://localhost:9000";

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      if (server.connected) {
        process.send("ok");
        resolve();
      } else {
        reject();
      }
    });

    const options = {
      args: ["--no-sandbox", "--disable-setuid-sandbox"], // настройка для сред ci/cd
      slowMo: 100,
      headless: false,
      devtools: false,
    };

    browser = await puppeteer.launch(options);
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });
  describe("tooltip show on page", () => {
    beforeEach(async () => {
      await page.goto(baseUrl);
    });
    test("tooltip show on page", async () => {
      await page.goto(baseUrl);
      await page.waitForSelector(".container");
      const button = await page.$(".btn");
      await button.click();
      await page.waitForSelector(".tooltip");
      
    });
  });
});
