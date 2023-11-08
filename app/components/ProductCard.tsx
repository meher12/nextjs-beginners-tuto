import AddToCart from "./addToCart";
import styles from "./ProductCard.module.css";

function ProductCard() {
  return (
    <div className={styles.cardContainer}>
      <div className="p-5 my-3 bg-sky-400 text-white text-xl hover:bg-sky-500">
        <h1>Product page:</h1>
        <AddToCart />
      </div>
    </div>
  );
}

export default ProductCard;
