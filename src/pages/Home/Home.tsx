import { ForwardedRef, forwardRef, useRef, useState } from "react";
import { useAsync } from "react-use";
import styled from "styled-components";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { Swiper, SwiperSlide } from "swiper/react";
import { Zoom } from "swiper";

import "swiper/css";
import "swiper/css/zoom";

import { IconContext } from "react-icons";
import { IoIosCloseCircle } from "react-icons/io";
import { LazyImage, useFetchImage } from "@/components/LazyImage";
import { Paragraph } from "@/components";

const createFileUrl = (slug: string) => new URL(slug, import.meta.url).href;
const fetchImageList = async () => {
  const imageListResp = await fetch(createFileUrl("/metadata.json"));
  return (await imageListResp.json()).files as string[];
};

interface ImageModalProps {
  toggleModal: () => void;
  imageUrl: string;
}

const StyledDialog = styled.dialog`
  border: none;
  padding: 0;
  height: 100%;
  width: 100%;
  background-color: transparent;

  user-select: none;
  outline: none;

  .swiper {
    border-radius: 10px;
    height: calc(100% - 1rem - 50px);
  }

  img {
    border-radius: 10px;
  }

  ::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
  }

  .button-container {
    svg {
      cursor: pointer;
    }

    padding: 1rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const ImageModal = forwardRef(
  (props: ImageModalProps, ref: ForwardedRef<HTMLDialogElement>) => {
    const { toggleModal, imageUrl } = props;

    return (
      <StyledDialog ref={ref}>
        <Swiper modules={[Zoom]} zoom={true}>
          <SwiperSlide key={"img_" + imageUrl}>
            <Paragraph
              color="white"
              style={{ width: "100%", textAlign: "center" }}
            >
              Double tap to zoom
            </Paragraph>
            <div className="swiper-zoom-container">
              {imageUrl ? (
                <img
                  src={createFileUrl(imageUrl)}
                  loading="lazy"
                  alt={"carousel_img_" + imageUrl}
                />
              ) : (
                <Paragraph color="grey">Loading...</Paragraph>
              )}
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="button-container">
          <IconContext.Provider value={{ size: "50px", color: "white" }}>
            <IoIosCloseCircle onClick={toggleModal} />
          </IconContext.Provider>
        </div>
      </StyledDialog>
    );
  }
);

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
                src={createFileUrl(imgUrl)}
                alt={"img_" + i}
                key={"img_" + i}
                style={{ borderRadius: "10px" }}
              />
            ))
          ) : (
            <></>
          )}
        </Masonry>
      </ResponsiveMasonry>

      <Paragraph
        color="grey"
        style={{ padding: "2rem 1rem", textAlign: "center", width: "100%" }}
      >
        Ihr könnt mir auch gerne bilder schicken die ich dann noch hinzufüge :)
      </Paragraph>
    </main>
  );
};

export default Home;
