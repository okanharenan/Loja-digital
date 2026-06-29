import ProductCard from "../ProductCard";
import "./styles.css";

export default function ProductListing({ products, columns = 4 }) {
  if (!products || products.length === 0) {
    return <p className="product-listing__empty">Nenhum produto encontrado.</p>;
  }

  return (
    <div className="product-listing" style={{ "--columns": columns }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
