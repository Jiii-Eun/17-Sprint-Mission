import styled from "styled-components";

export default function ItemImg({ imgUrl }) {
  return <Image src={imgUrl} />;
}

const Image = styled.img`
  border-radius: 17px;
  width: 100%;
  aspect-ratio: 1 / 1;
`;
