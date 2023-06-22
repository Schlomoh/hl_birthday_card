const fs = require("fs");
const sharp = require("sharp");
const path = require("path");
const dotenv = require("dotenv");
const cryptoJS = require("crypto-js");

dotenv.config();

const processImage = async (
  inputFilePath: string,
  outputFilePath: string,
  width: number
) => {
  await sharp(inputFilePath)
    .resize({ width })
    .jpeg({ quality: 80 })
    .toFile(outputFilePath);
};

const encodeData = (imageData: Buffer) => {
  return imageData.toString("base64");
};

const createDataUrl = (encodedData: string) => {
  return "data:image/jpeg;base64," + encodedData;
};

const encryptImage = async (imageData: string) => {
  const password = process.env.VITE_ENCRYPTION_PASSWORD || "";
  return cryptoJS.AES.encrypt(imageData, password, {
    mode: cryptoJS.mode.CBC,
    padding: cryptoJS.pad.Pkcs7,
  });
};

const main = async () => {
  const inputFolder = "public/images";
  const outputFolder = "public/optimized";

  const imageFileNames = fs
    .readdirSync(inputFolder)
    .filter((file: string) => /\.(jpg|jpeg|png|gif)$/i.test(file));

  const outputFolderPath = path.join(__dirname, outputFolder);

  if (!fs.existsSync(outputFolderPath)) {
    fs.mkdirSync(outputFolderPath);
  }
  for (const imageFileName of imageFileNames) {
    const inputFilePath = path.join(inputFolder, imageFileName); //
    const fileWithoutExt = path.basename(
      imageFileName,
      path.extname(imageFileName)
    );

    // optimized image names
    const smallImageName = `${fileWithoutExt}_w=10.jpg`;
    const largeImageName = `${fileWithoutExt}_w=1080.jpg`;
    const smallImagePath = path.join(outputFolder, smallImageName);
    const largeImagePath = path.join(outputFolder, largeImageName);

    // create optimized versions of image
    await processImage(inputFilePath, smallImagePath, 10);
    await processImage(inputFilePath, largeImagePath, 1080);

    // copy original image
    const originalOutputPath = path.join(outputFolder, imageFileName);
    fs.copyFileSync(inputFilePath, originalOutputPath);

    // encrypt all images in optimized folder
    for (const fileName of [imageFileName, smallImageName, largeImageName]) {
      const outputFilePath = path.join(outputFolder, fileName);

      const inputData = await fs.readFileSync(outputFilePath);
      const encodedData = encodeData(inputData);
      const encryptedImageData = await encryptImage(encodedData);
      const encryptedDataUrl = createDataUrl(encryptedImageData);

      fs.writeFileSync(outputFilePath, encryptedDataUrl);
    }
  }

  const files = fs
    .readdirSync(outputFolderPath)
    .filter((url: string) => !url.match(/(w=)\d+/g))
    .map((url: any) => path.join("/optimized", url));
  const data = JSON.stringify({ files });
  fs.writeFileSync(path.join("public", "metadata.json"), data);
};

main();
