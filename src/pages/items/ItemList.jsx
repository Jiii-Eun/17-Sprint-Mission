export default function ItemList({ id, images, name, price, favoriteCount }) {
  return (
    <>
      <img src={images} alt={name} />
      <div>
        <h4>{name}</h4>
        <span>{price}</span>
        <span>{favoriteCount}</span>
      </div>
    </>
  );
}
