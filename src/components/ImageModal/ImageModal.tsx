import { ForwardedRef, forwardRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Zoom } from "swiper";

import "swiper/css";
import "swiper/css/zoom";

import { IconContext } from "react-icons";
import { IoIosCloseCircle } from "react-icons/io";
import { Paragraph } from "@/components";
import StyledDialog from "./StyledDialog";

interface ImageModalProps {
  toggleModal: () => void;
  imageUrl: string;
}

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
                  src={imageUrl}
                  loading="lazy"
                  alt={"carousel_img_" + imageUrl}
                />
              ) : (
                <Paragraph color="white">Decrypting full image...</Paragraph>
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

export default ImageModal;
