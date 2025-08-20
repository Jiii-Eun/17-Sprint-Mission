import AddIcon from "@/assets/ic_plus.svg";
import XIcon from "@/assets/ic_close.svg";
import { useRef, useState } from "react";
import apiRequest from "@/apis/apiRequest";

export default function AddImage({ imgTitle = "상품이미지" }) {
  const [imageUrl, setImageUrl] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      const data = await apiRequest("/images/upload", {
        method: "POST",
        body: formData,
        headers: {},
      });
      setImageUrl(data.url);
    } catch (error) {
      console.error("이미지 등록 실패:", error);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleRemove = () => {
    setImageUrl(null);
    fileInputRef.current.value = "";
  };

  return (
    <li>
      <label htmlFor="item_img">{imgTitle}</label>
      <div id="item_img" onClick={handleClick}>
        {imageUrl ? (
          <div className="pick_image">
            <img src={imageUrl} alt={imgTitle} />
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleRemove();
              }}
            >
              <XIcon />
            </button>
          </div>
        ) : (
          <>
            <AddIcon />
            <span>이미지 등록</span>
          </>
        )}
      </div>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </li>
  );
}
