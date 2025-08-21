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

  const isFormValid =
    form.itemName.trim() &&
    form.itemIntroduction.trim() &&
    form.itemPrice.trim();

  return (
    <div>
      <form action="/items">
        <div className="item_image">
          <h2>상품 등록하기</h2>
          <button type="submit" disabled={!isFormValid}>
            등록
          </button>
        </div>
        <ul>
          <AddImage />
          <InputField
            id="item_name"
            name="itemName"
            label="상품명"
            placeholder="상품명을 입력해주세요"
            value={form.itemName}
            onChange={handleChange}
          />

          <InputField
            id="item_introduction"
            name="itemIntroduction"
            label="상품소개"
            placeholder="상품 소개를 입력해주세요"
            value={form.itemIntroduction}
            onChange={handleChange}
          />

          <InputField
            id="item_price"
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
