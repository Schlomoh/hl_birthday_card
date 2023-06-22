import { InferProps } from "prop-types";
import { useRef, useEffect, useState } from "react";
import { useIntersection } from "react-use";
import styled from "styled-components";
import useFetchImage from "./useFetchImage";

type LazyImageProps = {
  src: string;
  alt?: string;
  onClick?: () => void;
} & InferProps<HTMLImageElement>;

const LazyImageWrapper = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`;

const createSrc = (src: string, width: number) => {
  const split = src.split(".");
  return `${split[0]}_w=${width}.jpg`;
};

const LazyImage = ({ src, ...props }: LazyImageProps) => {
  const ref = useRef<null | HTMLDivElement>(null);
  const observer = useIntersection(ref, { rootMargin: " 150px 0px " });
  const [hasIntersected, setHasIntersected] = useState(false);

  const imageSrc = useFetchImage(
    observer?.isIntersecting || hasIntersected
      ? createSrc(src, 1080)
      : createSrc(src, 10),
    true
  );

  useEffect(() => {
    if (observer?.isIntersecting) setHasIntersected(true);
  }, [observer?.isIntersecting]);

  return (
    <LazyImageWrapper className="lazy-image-wrapper" ref={ref}>
      <img src={imageSrc || ""} {...props} />
    </LazyImageWrapper>
  );
};

export default LazyImage;
