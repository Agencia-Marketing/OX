// Rasteriza todas las páginas del PDF brochure a PNG en alta resolución
// para localizar y extraer el plano de distribución.
import { pdf } from "pdf-to-img";
import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const SRC = "RENDERS OX/RENDERS OX/SOLO TRES RESIDENCIAS (FINAL PRINT).pdf";
const OUT = path.join(process.cwd(), "tmp-pdf");

await mkdir(OUT, { recursive: true });
const doc = await pdf(SRC, { scale: 3 });
let i = 0;
for await (const page of doc) {
  i++;
  const f = path.join(OUT, `page-${i}.png`);
  await writeFile(f, page);
  console.log(`page ${i} -> ${f} (${(page.length / 1024).toFixed(0)} KB)`);
}
console.log("total pages", i);
