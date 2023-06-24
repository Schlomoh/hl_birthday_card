import { useRef, useState } from "react";
import { useAsync } from "react-use";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Paragraph, LazyImage, useFetchImage, ImageModal } from "@/components";

const fetchImageList = async () => {
  const imageListResp = await fetch("image_list.json", { cache: "no-cache" });
  return (await imageListResp.json()).files as string[];
};

const Home = () => {
  const { loading, value: imageUrls } = useAsync(fetchImageList, []);
  const [selectedImage, setSelectedImage] = useState(0);
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const toggleModal = () => {
    if (modalRef.current?.open) modalRef.current.close();
    else modalRef.current?.showModal();
  };

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
    toggleModal();
  };

  const imageSrc = useFetchImage(
    imageUrls ? imageUrls[selectedImage] : "",
    modalRef.current?.open
  );

  return (
    <main style={{ position: "relative", zIndex: 2, height: "100%" }}>
      <ImageModal
        ref={modalRef}
        imageUrl={imageSrc}
        toggleModal={toggleModal}
      />
      <ResponsiveMasonry>
        <Masonry gutter="10px" style={{ padding: "1rem" }}>
          {!loading ? (
            imageUrls?.map((imgUrl, i) => (
              <LazyImage
                onClick={() => handleImageClick(i)}
                src={imgUrl}
                alt={"img_" + i}
                key={"img_" + i}
                style={{ borderRadius: "10px" }}
                loading="lazy"
              />
            ))
          ) : (
            <></>
          )}
        </Masonry>
      </ResponsiveMasonry>

      <Paragraph
        color="grey"
        style={{ padding: "2rem 1rem", textAlign: "center" }}
      >
        Ihr könnt mir auch gerne bilder schicken die ich dann noch hinzufüge :)
      </Paragraph>
    </main>
  );
};

export default Home;
