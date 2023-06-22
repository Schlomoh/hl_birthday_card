import cryptoJs from "crypto-js";
import { useEffect, useState } from "react";

const decryptImage = async (encryptedData: string) => {
  const password = import.meta.env.VITE_ENCRYPTION_PASSWORD!;
  return cryptoJs.AES.decrypt(encryptedData, password, {
    mode: cryptoJs.mode.CBC,
    padding: cryptoJs.pad.Pkcs7,
  }).toString(cryptoJs.enc.Utf8);
};

const fetchImage = async (src: string) => {
  const response = await fetch(src);
  const encryptedDataUrl = await response.text();

  const encryptedData = encryptedDataUrl
    .replace("data:", "")
    .replace(/^.+,/, "");

  const decryptedData = await decryptImage(encryptedData);
  const decryptedDataUrl = "data:image/jpeg;base64," + decryptedData;

  return decryptedDataUrl;
};

const useFetchImage = (src: string, active?: boolean) => {
  const [imageSrc, setImageSrc] = useState("");

  const fetchAndSetImage = async (src: string) => {
    try {
      setImageSrc("");
      const image = await fetchImage(src);
      setImageSrc(image);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (active) fetchAndSetImage(src);
  }, [src]);

  return imageSrc;
};

export default useFetchImage;
