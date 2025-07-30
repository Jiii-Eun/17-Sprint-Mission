import styled from 'styled-components';

import FileInput from '@/pages/AddItem/FileInput';
import TagInput from '@/pages/AddItem/TagInput';
import getNumberOnly from '@/utils/getNumberOnly';

export default function InputSection({ values, setValues }) {
  const handleFileInputChange = (name, value) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    if (name === 'price') value = Number(value);
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <Section>
        <Label>상품 이미지</Label>
        <FileInput imgFile={values.imgFile} onChange={handleFileInputChange} />
      </Section>
      <Section>
        <Label htmlFor='상품명'>상품명</Label>
        <Input
          id='상품명'
          name='title'
          placeholder={'상품명을 입력해주세요'}
          value={values.title}
          type='text'
          onChange={handleInputChange}
          required
        />
      </Section>
      <Section>
        <Label htmlFor='상품 소개'>상품 소개</Label>
        <TextArea
          id='상품소개'
          name='description'
          placeholder={'상품 소개를 입력해주세요'}
          value={values.description}
          onChange={handleInputChange}
          required
        />
      </Section>
      <Section>
        <Label htmlFor='판매가격'>판매가격</Label>
        <Input
          id='판매가격'
          name='price'
          placeholder={'판매가격을 입력해주세요'}
          type='text'
          value={values.price}
          onChange={handleInputChange}
          onKeyUp={getNumberOnly}
          required
        />
      </Section>
      <TagInput values={values} setValues={setValues} />
    </>
  );
}
const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 700;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing.md};
`;
const Input = styled.input`
  height: 2.625rem;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: ${({ theme }) => theme.colors.gray100};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray400};
  }
`;
const TextArea = styled.textarea`
  height: 17.625rem;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: ${({ theme }) => theme.colors.gray100};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray400};
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`;
