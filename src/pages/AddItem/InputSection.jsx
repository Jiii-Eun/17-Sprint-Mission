import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import AddImageIcon from '@/assets/imgs/add_image.png';
import ItemImg from '@/components/ui/ItemImg';
import Tag from '@/components/ui/Tag';
import Input from '@/pages/AddItem/Input';
import TextArea from '@/pages/AddItem/TextArea';

export default function InputSection({ tags, setTags }) {
  const handleTagEnter = (e) => {
    const value = e.target.value;
    if (e.nativeEvent.isComposing) return; // 한글 조합 중이면 무시
    if (e.key === 'Enter' && value !== '') {
      setTags((prev) => [...prev, { id: `${uuidv4()}-${value}`, text: value }]);
      e.target.value = '';
    }
  };
  const handleTagDeleteById = (id) => {
    setTags((prev) => prev.filter((tag) => tag.id !== id));
  };
  return (
    <>
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
        <Input placeholder={'태그를 입력해주세요'} onEnter={handleTagEnter} />
        <Tags>
          {tags.map((tag) => (
            <Tag
              key={tag.id}
              text={tag.text}
              canDelete={true}
              onDeleteClick={() => handleTagDeleteById(tag.id)}
            />
          ))}
        </Tags>
      </Section>
    </>
  );
}
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
