export default function ItemsOrder({ setOrderBy }) {
  const handleChange = (e) => {
    setOrderBy(e.target.value);
  };

  return (
    <div>
      <select id="orderSelect" onChange={handleChange}>
        <option value="recent">최신순</option>
        <option value="favorite">인기순</option>
      </select>
    </div>
  );
}
