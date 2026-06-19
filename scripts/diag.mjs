import puppeteer from "puppeteer-core";
const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new", args: ["--no-sandbox"] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto("http://localhost:3100", { waitUntil: "networkidle2", timeout: 60000 });

// Scroll lentamente por toda la página
await page.evaluate(async () => {
  for (let y = 0; y <= document.body.scrollHeight; y += 300) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 200));
  }
});
await new Promise((r) => setTimeout(r, 1500));

const report = await page.evaluate(() => {
  const out = {};
  const ostech = document.querySelector("#ostech h2");
  out.ostechText = ostech?.textContent?.slice(0, 30) || null;
  // opacidad efectiva de los wrappers Reveal (primer motion div en cada sección)
  const sec = (id) => {
    const s = document.querySelector(id);
    if (!s) return null;
    const m = s.querySelector("div[style*='opacity'], div");
    const cs = m ? getComputedStyle(m) : null;
    return cs ? { opacity: cs.opacity, transform: cs.transform } : null;
  };
  out.ostechReveal = sec("#ostech");
  out.formReveal = sec("#contacto");
  // imágenes
  const imgs = [...document.querySelectorAll("img")].map((i) => ({
    src: i.currentSrc.split("/").pop(),
    loaded: i.complete && i.naturalWidth > 0,
    nw: i.naturalWidth,
  }));
  out.images = imgs;
  // iframe del mapa
  const f = document.querySelector("#dzitya iframe");
  out.mapSrc = f?.getAttribute("src")?.slice(0, 50) || null;
  return out;
});
console.log(JSON.stringify(report, null, 2));
await browser.close();
