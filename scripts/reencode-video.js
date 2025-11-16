import ffmpeg from 'fluent-ffmpeg';
import ffmpegStatic from 'ffmpeg-static';
import fs from 'fs';
import path from 'path';

if (ffmpegStatic) {
  ffmpeg.setFfmpegPath(ffmpegStatic);
}

const inputPath = path.join(process.cwd(), 'public', 'header.mp4');
const outputPath = path.join(process.cwd(), 'public', 'header-reencoded.mp4');

console.log('Starting video re-encoding...');
console.log(`Input: ${inputPath}`);
console.log(`Output: ${outputPath}`);

if (!fs.existsSync(inputPath)) {
  console.error(`Input file not found: ${inputPath}`);
  process.exit(1);
}

ffmpeg(inputPath)
  .outputOptions([
    '-c:v libx264',
    '-preset fast',
    '-crf 23',
    '-c:a aac',
    '-b:a 128k',
    '-movflags +faststart',
  ])
  .output(outputPath)
  .on('start', (cmd) => {
    console.log('FFmpeg command:', cmd);
  })
  .on('progress', (progress) => {
    if (typeof progress.percent === 'number') {
      console.log(`Processing: ${progress.percent.toFixed(2)}%`);
    }
  })
  .on('end', () => {
    console.log('Video re-encoding completed successfully!');
    console.log(`Output saved to: ${outputPath}`);

    fs.copyFileSync(outputPath, inputPath);
    fs.unlinkSync(outputPath);
    console.log('Original file updated with re-encoded video');
  })
  .on('error', (err) => {
    console.error('Error during re-encoding:', err);
    process.exit(1);
  })
  .run();

