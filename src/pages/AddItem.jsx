import styled from 'styled-components';

import AddImageIcon from '@/assets/imgs/add_image.png';
import Input from '@/components/AddItem/Input';
import TextArea from '@/components/AddItem/TextArea';
import Button from '@/components/common/Button';
import ItemImg from '@/components/common/ItemImg';
import Tag from '@/components/common/Tag';
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
            <ItemsGrid>
              <FileInput>
                <ItemImg />
              </FileInput>
            </ItemsGrid>
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
            <Tags>
              <Tag text={'티셔츠'} canDelete={true} />
              <Tag text={'상의'} canDelete={true} />
            </Tags>
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
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
`;
const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 700;
`;
const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.sm};
`;
const FileInput = styled.div`
  width: 100%;
  cursor: pointer;
  & > div {
    background-image: url(${AddImageIcon});
    background-repeat: no-repeat;
    background-position: center;
  }
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing.md};
`;
const Tags = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
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
