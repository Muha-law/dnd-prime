/**
 * Converts property photos to WebP.
 *
 * The client's photos arrive straight off a phone as PNG — lossless, and around
 * 2 MB each for a single room. PNG is meant for graphics and screenshots, not
 * photographs; re-encoding to WebP cuts them by ~90% with no visible difference.
 *
 * Run after dropping new photos into public/properties/<id>/:
 *
 *   npm run images
 *
 * Already-converted files are skipped, so it's safe to re-run. The originals are
 * left in place — delete them once you've eyeballed the .webp output.
 */
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PROPERTIES = path.join(ROOT, "public", "properties");

// Photos are already <=1536px on the long edge, so this cap is a guard for
// larger originals rather than something that bites today.
const MAX_EDGE = 1600;
const QUALITY = 82;

const mb = (n) => (n / 1048576).toFixed(2);

let before = 0;
let after = 0;
let converted = 0;
let skipped = 0;

const folders = fs
  .readdirSync(PROPERTIES, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => path.join(PROPERTIES, d.name));

for (const dir of folders) {
  const files = fs
    .readdirSync(dir)
    .filter((f) => /\.(png|jpe?g)$/i.test(f))
    .sort();

  for (const file of files) {
    const src = path.join(dir, file);
    const out = path.join(dir, file.replace(/\.(png|jpe?g)$/i, ".webp"));

    if (fs.existsSync(out)) {
      skipped++;
      continue;
    }

    const srcSize = fs.statSync(src).size;
    await sharp(src)
      .rotate() // honour EXIF orientation before metadata is stripped
      .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: "inside", withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(out);

    const outSize = fs.statSync(out).size;
    before += srcSize;
    after += outSize;
    converted++;

    const cut = Math.round(((srcSize - outSize) / srcSize) * 100);
    console.log(
      `${path.basename(dir).padEnd(18)} ${file.padEnd(10)} ${mb(srcSize).padStart(5)}MB -> ${mb(outSize).padStart(5)}MB  -${cut}%`
    );
  }
}

console.log("");
if (converted) {
  console.log(`Converted ${converted} file(s)${skipped ? `, skipped ${skipped} already done` : ""}`);
  console.log(`TOTAL  ${mb(before)} MB -> ${mb(after)} MB`);
  console.log(`SAVED  ${mb(before - after)} MB (${Math.round(((before - after) / before) * 100)}%)`);
} else {
  console.log(`Nothing to do — ${skipped} file(s) already converted.`);
}
