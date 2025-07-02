import styled from "styled-components";
import defaultBox from "@/assets/imgs/default_box.png";

export default function ItemImg({ imgUrl = "", alt = "" }) {
  const onErrorImg = (e) => {
    e.target.src = defaultBox;
  };
  if (imgUrl === "") {
    return <ImageSkeleton />;
  }
  return <Image src={imgUrl} onError={onErrorImg} alt={alt} />;
}

const Image = styled.img`
  border-radius: var(--border-radius-md);
  width: 100%;
  height: auto;
  aspect-ratio: 1;
`;
const ImageSkeleton = styled.div`
  border-radius: var(--border-radius-md);
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  background-color: var(--gray-100-color);
`;
