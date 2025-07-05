import styled from 'styled-components';

import AddImageIcon from '@/assets/imgs/add_image.png';
import Input from '@/components/AddItem/Input';
import TextArea from '@/components/AddItem/TextArea';
import Button from '@/components/common/Button';
import ItemImg from '@/components/common/ItemImg';
import Header from '@/components/layout/Header';
import { device } from '@/styles/media';

export default function AddItem() {
  return (
    <>
      <Header />
      <Container>
        <Form>
          <Head>
            <Title>상품 등록하기</Title>
            <Button text={'등록'} />
          </Head>
          <Section>
            <SectionTitle>상품 이미지</SectionTitle>
            <AddImageBox>
              <ItemImg />
              <img src={AddImageIcon} alt='이미지 등록 버튼' />
            </AddImageBox>
          </Section>
          <Section>
            <SectionTitle>상품명</SectionTitle>
            <Input placeholder={'상품명을 입력해주세요'} />
          </Section>
          <Section>
            <SectionTitle>상품 소개</SectionTitle>
            <TextArea placeholder={'상품 소개를 입력해주세요'} />
          </Section>
          <Section>
            <SectionTitle>판매가격</SectionTitle>
            <Input placeholder={'판매가격을 입력해주세요'} />
          </Section>
          <Section>
            <SectionTitle>태그</SectionTitle>
            <Input placeholder={'태그를 입력해주세요'} />
          </Section>
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
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 700;
`;
const SectionTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 700;
`;
const AddImageBox = styled.div``;
const Section = styled.section``;
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
