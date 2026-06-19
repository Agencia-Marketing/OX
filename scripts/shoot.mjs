import puppeteer from "puppeteer-core";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const URL = process.env.URL || "http://localhost:3100";
const WIDTH = Number(process.argv[2] || 1440);
const OUT = process.argv[3] || "full.png";

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--hide-scrollbars"],
});
const page = await browser.newPage();
await page.setViewport({ width: WIDTH, height: 900, deviceScaleFactor: 1 });
await page.goto(URL, { waitUntil: "networkidle2", timeout: 60000 });

// Scroll lento para disparar lazy-load + animaciones whileInView
await page.evaluate(async () => {
  for (let y = 0; y <= document.body.scrollHeight; y += 280) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 180));
  }
});
await new Promise((r) => setTimeout(r, 1800));
await page.evaluate(() => window.scrollTo(0, 0));
await new Promise((r) => setTimeout(r, 400));

await page.screenshot({ path: OUT, fullPage: true });
await browser.close();
console.log("saved", OUT);
