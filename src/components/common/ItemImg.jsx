import styled from "styled-components";

export default function ItemImg({ imgUrl }) {
  return <Image src={imgUrl} />;
}

const Image = styled.img`
  border-radius: var(--border-radius-md);
  width: 100%;
  height: auto;
  aspect-ratio: 1;
`;
