import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dir = join(__dirname, '../public/assets/images');
const files = ['bvsm1.png', 'bvsm2.png', 'bvsm3.png', 'bvsm4.png', 'bvsm5.png'];

for (const file of files) {
  const input = join(dir, file);
  const meta = await sharp(input).metadata();
  const targetWidth = Math.min((meta.width || 1024) * 2, 2560);

  await sharp(input)
    .resize(targetWidth, null, {
      kernel: sharp.kernel.lanczos3,
      withoutEnlargement: false,
    })
    .sharpen({ sigma: 0.8, m1: 1.2, m2: 0.5 })
    .png({ compressionLevel: 6, adaptiveFiltering: true })
    .toFile(join(dir, file.replace('.png', '-enhanced.png')));

  console.log(`${file}: ${meta.width}x${meta.height} -> ${targetWidth}px wide (enhanced)`);
}

console.log('Done. Enhanced images saved with -enhanced suffix.');
