import AddIcon from "@/assets/ic_plus.svg";

export default function AddImage() {
  return (
    <li>
      <label htmlFor="itemImg">상품이미지</label>
      <div id="itemImg">
        <AddIcon />
        <span>이미지 등록</span>
      </div>
    </li>
  );
}
