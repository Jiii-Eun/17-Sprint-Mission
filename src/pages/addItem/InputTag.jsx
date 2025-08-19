import XIcon from "@/assets/ic_close.svg";
import { useState } from "react";

export default function InputTag() {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      const newTag = {
        id: crypto.randomUUID(),
        label: inputValue.trim(),
      };
      setTags([...tags, newTag]);
      setInputValue("");
    }
  };

  const removeTag = (id) => {
    setTags(tags.filter((tag) => tag.id !== id));
  };

  return (
    <li>
      <label htmlFor="itemTag">태그</label>
      <input
        id="itemTag"
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
            <span className="tagIcon" onClick={() => removeTag(tag.id)}>
              <XIcon />
            </span>
          </li>
        ))}
      </ol>
      <div></div>
    </li>
  );
}
