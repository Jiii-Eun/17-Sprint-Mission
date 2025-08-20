import XIcon from "@/assets/ic_close.svg";
import { useState } from "react";

export default function InputTag() {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      const new_tag = {
        id: crypto.randomUUID(),
        label: inputValue.trim(),
      };
      setTags([...tags, new_tag]);
      setInputValue("");
    }
  };

  const removeTag = (id) => {
    setTags(tags.filter((tag) => tag.id !== id));
  };

  return (
    <li>
      <label htmlFor="item_tag">태그</label>
      <input
        id="item_tag"
        type="text"
        placeholder="태그를 입력해주세요"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <ol id="tags">
        {tags.map((tag) => (
          <li key={tag.id} className="tag">
            <span className="tag_title">{tag}</span>
            <button className="tag_icon" onClick={() => removeTag(tag.id)}>
              <XIcon />
            </button>
          </li>
        ))}
      </ol>
    </li>
  );
}
