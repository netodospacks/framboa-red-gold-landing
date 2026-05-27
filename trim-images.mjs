import sharp from "sharp";
import { readdir } from "fs/promises";
import path from "path";

const dir = "./public/images/halia";
const files = ["historic_img1.png", "historic_img2.png"];

for (const file of files) {
  const input = path.join(dir, file);
  const output = path.join(dir, file); // overwrite

  // Get metadata first
  const meta = await sharp(input).metadata();
  console.log(`Processing ${file}: ${meta.width}x${meta.height}`);

  // Strategy: trim white/light borders by finding the actual photo content
  // We'll use sharp's trim() which removes background color borders
  await sharp(input)
    .trim({
      background: "#ffffff",
      threshold: 30,          // tolerance: pixels within 30/255 of white are trimmed
    })
    .toFile(input + ".tmp.png");

  // Rename tmp back to original
  const { rename } = await import("fs/promises");
  await rename(input + ".tmp.png", output);

  const trimmed = await sharp(output).metadata();
  console.log(`  → Trimmed to: ${trimmed.width}x${trimmed.height}`);
}

console.log("Done! All images trimmed.");
