export function getCroppedImg(
  image,
  crop
) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('Could not get canvas context');
  }

  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  const pixelRatio = window.devicePixelRatio || 1;

  canvas.width = Math.floor(crop.width * scaleX * pixelRatio);
  canvas.height = Math.floor(crop.height * scaleY * pixelRatio);

  ctx.scale(pixelRatio, pixelRatio);
  ctx.imageSmoothingQuality = 'high';

  const cropX = crop.x * scaleX;
  const cropY = crop.y * scaleY;

  const sourceWidth = crop.width * scaleX;
  const sourceHeight = crop.height * scaleY;

  // The destination width/height on the canvas, after accounting for the pixelRatio scale.
  const destWidth = canvas.width / pixelRatio;
  const destHeight = canvas.height / pixelRatio;

  ctx.drawImage(
    image,
    cropX,
    cropY,
    sourceWidth,
    sourceHeight,
    0,
    0,
    destWidth,
    destHeight
  );

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error('Canvas is empty'));
        return;
      }
      resolve(URL.createObjectURL(blob));
    }, 'image/jpeg', 0.9);
  });
}
