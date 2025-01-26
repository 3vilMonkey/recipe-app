import { Router } from 'express';
import path from 'path';
import sharp from 'sharp';

const imageRouter = Router();

imageRouter.get('/:imageName', async (req, res) => {
  const { imageName } = req.params;
  const { w: width } = req.query;

  // Default size if no width/height is specified
  const imgWidth = parseInt(width as string) || 300;
  const imgHeight = parseInt(width as string) || 300;

  const imagePath = path.join(__dirname, '../../assets/images', imageName);

  try {
    // Use Sharp to resize the image
    const resizedImage = await sharp(imagePath)
      .resize(imgWidth, imgHeight, {
        fit: 'cover',
      })
      .toBuffer();

    res.set('Content-Type', 'image/webp');
    res.send(resizedImage);
  } catch (error) {
    console.error('Error resizing image:', error);
    res.status(500).json({ error: 'Image processing failed' });
  }
});

export default imageRouter;
