import puppeteer from "puppeteer-core";
const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const URL = process.env.URL || "http://localhost:3200";
const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new", args: ["--no-sandbox"] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(URL, { waitUntil: "networkidle2", timeout: 60000 });

// abrir el visor del plano
await page.evaluate(() => {
  const btn = document.querySelector('button[aria-label="Ampliar plano arquitectónico"]');
  btn?.scrollIntoView({ block: "center" });
});
await new Promise((r) => setTimeout(r, 600));
await page.click('button[aria-label="Ampliar plano arquitectónico"]');
await new Promise((r) => setTimeout(r, 700));

const hasDialog = await page.$('div[role="dialog"][aria-label="Plano arquitectónico"]');
console.log("popup abierto:", !!hasDialog);
await page.screenshot({ path: process.env.TEMP + "\\plano-popup.png" });

// simular hover-zoom moviendo el mouse sobre la imagen
const box = await page.evaluate(() => {
  const img = document.querySelector('div[role="dialog"] img');
  if (!img) return null;
  const r = img.getBoundingClientRect();
  return { x: r.left + r.width * 0.4, y: r.top + r.height * 0.35 };
});
if (box) {
  await page.mouse.move(box.x, box.y);
  await new Promise((r) => setTimeout(r, 500));
  const transform = await page.evaluate(() => {
    const img = document.querySelector('div[role="dialog"] img');
    return img ? getComputedStyle(img).transform : null;
  });
  console.log("transform tras hover:", transform);
  await page.screenshot({ path: process.env.TEMP + "\\plano-zoom.png" });
}
await browser.close();
