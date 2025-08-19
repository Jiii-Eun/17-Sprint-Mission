import AddImage from "@/pages/addItem/AddImage";
import InputField from "@/pages/addItem/InputField";
import InputTag from "@/pages/addItem/InputTag";
import { useState } from "react";

export default function AddItem() {
  const [form, setForm] = useState({
    itemName: "",
    itemIntroduction: "",
    itemPrice: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <form action="/items">
        <div>
          <h2>상품 등록하기</h2>
          <button type="submit">등록</button>
        </div>
        <ul>
          <AddImage />
          <InputField
            id="itemName"
            name="itemName"
            label="상품명"
            placeholder="상품명을 입력해주세요"
            value={form.itemName}
            onChange={handleChange}
          />

          <InputField
            id="itemIntroduction"
            name="itemIntroduction"
            label="상품소개"
            placeholder="상품 소개를 입력해주세요"
            value={form.itemIntroduction}
            onChange={handleChange}
          />

          <InputField
            id="itemPrice"
            name="itemPrice"
            label="판매가격"
            placeholder="판매 가격을 입력해주세요"
            value={form.itemPrice}
            onChange={handleChange}
          />
          <InputTag />
        </ul>
      </form>
    </div>
  );
}
