import { useState } from 'react';
import styled from 'styled-components';

import Header from '@/components/layout/Header';
import Button from '@/components/ui/Button';
import InputSection from '@/pages/AddItem/InputSection';
import { device } from '@/styles/media';

export default function AddItem() {
  const [tags, SetTags] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Header />
      <Container>
        <Form onSubmit={handleSubmit}>
          <Head>
            <Title>상품 등록하기</Title>
            <Button text={'등록'} />
          </Head>
          <InputSection tags={tags} setTags={SetTags} />
        </Form>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing['2xl']};
  padding: ${({ theme }) => `${theme.spacing['2xl']} + ${theme.spacing.xl}`};
  margin-top: ${({ theme }) => theme.spacing.header};
  @media ${device.TABLET} {
    width: 100%;
  }
  @media ${device.DESKTOP} {
    margin-left: auto;
    margin-right: auto;
    padding: ${({ theme }) => theme.spacing['2xl']} 0;
    max-width: 1200px;
  }
`;
const Title = styled.h1`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xl};
`;
const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
