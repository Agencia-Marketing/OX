// Convierte los renders (PNG/JPEG pesados) a WebP optimizados en public/renders.
// Uso: node scripts/optimize-images.mjs
import sharp from "sharp";
import { readdir, mkdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SRC_DIR = path.join(ROOT, "RENDERS OX", "RENDERS OX");
const OUT_DIR = path.join(ROOT, "public", "renders");

// Mapeo nombre original -> slug de salida
const MAP = {
  "FACHADA OX.jpeg": "fachada",
  "FACHADA PRINCIPAL.png": "fachada-principal",
  "FACHADA POSTERIOR OX.png": "fachada-posterior",
  "PRINCIPAL LATERAL 1.png": "lateral-1",
  "PRINCIPAL LATERAL 2.png": "lateral-2",
  "COCINA OX.jpeg": "cocina",
  "REC PRINCIPAL OX.jpeg": "recamara-principal",
  "REC PLANTA BAJA OX.jpeg": "recamara-pb",
  "BAÑO PRINCIPAL OX.jpeg": "bano-principal",
  "BAÑO PB OX.jpeg": "bano-pb",
};

const MAX_W = 2000;
const QUALITY = 80;

async function run() {
  if (!existsSync(OUT_DIR)) await mkdir(OUT_DIR, { recursive: true });

  // Renders
  const files = await readdir(SRC_DIR);
  for (const file of files) {
    const slug = MAP[file];
    if (!slug) continue;
    const inPath = path.join(SRC_DIR, file);
    const outPath = path.join(OUT_DIR, `${slug}.webp`);
    const img = sharp(inPath).rotate();
    const meta = await img.metadata();
    const width = Math.min(meta.width ?? MAX_W, MAX_W);
    await img.resize({ width }).webp({ quality: QUALITY }).toFile(outPath);
    const { size } = await stat(outPath);
    console.log(`✓ ${file} -> renders/${slug}.webp (${(size / 1024).toFixed(0)} KB, ${width}px)`);
  }

  // Planta arquitectónica: conservar resolución original (sin reescalar) y
  // máxima calidad para que el zoom muestre el detalle real del archivo.
  const plantaSrc = path.join(ROOT, "modelo.png");
  if (existsSync(plantaSrc)) {
    const plantaOut = path.join(OUT_DIR, "planta.webp");
    const info = await sharp(plantaSrc)
      .webp({ quality: 100, lossless: true })
      .toFile(plantaOut);
    const { size } = await stat(plantaOut);
    console.log(
      `✓ modelo.png -> renders/planta.webp (${(size / 1024).toFixed(0)} KB, ${info.width}×${info.height})`
    );
  }

  // Logo (SVG con raster embebido) -> PNG transparente + preview
  const logoSrc = path.join(ROOT, "OX_logo_editable (2).svg");
  if (existsSync(logoSrc)) {
    const logoOut = path.join(ROOT, "public", "logo-ox.png");
    await sharp(logoSrc, { density: 300 })
      .trim({ threshold: 10 })
      .resize({ width: 900, withoutEnlargement: true })
      .png()
      .toFile(logoOut);
    console.log(`✓ logo -> public/logo-ox.png`);
  }
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
