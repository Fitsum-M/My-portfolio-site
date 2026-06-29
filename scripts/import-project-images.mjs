import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dir = join(__dirname, '../public/assets/images');

const assetsDir = 'C:/Users/windows 10/.cursor/projects/f-My-Portfolio-fitsum-react-portfolio/assets';
const sourceMap = {
  'adarsh1.png': 'c__Users_windows_10_AppData_Roaming_Cursor_User_workspaceStorage_42fba2eb77cac744d54ecc45a5d4e918_images_photo_1_2026-06-29_02-58-52-0a983522-870c-413a-b752-2a3ee0dcda71.png',
  'adarsh2.png': 'c__Users_windows_10_AppData_Roaming_Cursor_User_workspaceStorage_42fba2eb77cac744d54ecc45a5d4e918_images_photo_2_2026-06-29_02-58-52-0a5b75ee-b7f0-4cd8-88d1-ff0cbf610184.png',
  'adarsh3.png': 'c__Users_windows_10_AppData_Roaming_Cursor_User_workspaceStorage_42fba2eb77cac744d54ecc45a5d4e918_images_photo_3_2026-06-29_02-58-52-7f1732de-4abc-452f-9a14-dead55c5f676.png',
  'adarsh4.png': 'c__Users_windows_10_AppData_Roaming_Cursor_User_workspaceStorage_42fba2eb77cac744d54ecc45a5d4e918_images_photo_4_2026-06-29_02-58-52-f51e3851-8797-4be0-9083-4ad917a81b66.png',
  'anekaa1.png': 'c__Users_windows_10_AppData_Roaming_Cursor_User_workspaceStorage_42fba2eb77cac744d54ecc45a5d4e918_images_photo_5_2026-06-29_02-58-52-567e09c1-5cb8-4116-a9ee-7dfa6beb5b6e.png',
  'anekaa2.png': 'c__Users_windows_10_AppData_Roaming_Cursor_User_workspaceStorage_42fba2eb77cac744d54ecc45a5d4e918_images_photo_6_2026-06-29_02-58-52-996b2198-66d7-414a-91dd-f02bc51e4ce9.png',
  'anekaa3.png': 'c__Users_windows_10_AppData_Roaming_Cursor_User_workspaceStorage_42fba2eb77cac744d54ecc45a5d4e918_images_photo_7_2026-06-29_02-58-52-17f8b610-582b-4577-af25-376dd6c15898.png',
  'anekaa4.png': 'c__Users_windows_10_AppData_Roaming_Cursor_User_workspaceStorage_42fba2eb77cac744d54ecc45a5d4e918_images_photo_8_2026-06-29_02-58-52-5508b99d-4fe1-48dc-b45a-d53c4260466a.png',
  'anekaa5.png': 'c__Users_windows_10_AppData_Roaming_Cursor_User_workspaceStorage_42fba2eb77cac744d54ecc45a5d4e918_images_photo_9_2026-06-29_02-58-52-2b4702ef-0bd6-4e2a-ab16-292de2bf237c.png',
};

async function enhance(input, output) {
  const meta = await sharp(input).metadata();
  const targetWidth = Math.min((meta.width || 1024) * 2, 2560);

  await sharp(input)
    .resize(targetWidth, null, { kernel: sharp.kernel.lanczos3, withoutEnlargement: false })
    .sharpen({ sigma: 0.8, m1: 1.2, m2: 0.5 })
    .png({ compressionLevel: 6, adaptiveFiltering: true })
    .toFile(output);

  const outMeta = await sharp(output).metadata();
  console.log(`${output.split(/[/\\]/).pop()}: ${meta.width}x${meta.height} -> ${outMeta.width}x${outMeta.height}`);
}

for (const [dest, src] of Object.entries(sourceMap)) {
  const input = join(assetsDir, src);
  const output = join(dir, dest);
  await enhance(input, output);
}

console.log('All project images processed.');
