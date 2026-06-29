import { Link, useParams } from "react-router-dom";
import ProductDetails from "../../components/ProductDetails";
import Section from "../../components/Section";
import ProductListing from "../../components/ProductListing";
import { featuredProduct, relatedProducts } from "../../data/products";
import "./styles.css";

export default function ProductViewPage() {
  // Em uma versão conectada a uma API, usaríamos o :id para buscar o produto.
  // Por ora, todas as rotas de produto mostram o produto mockado em destaque.
  useParams();
  const product = featuredProduct;

  return (
    <div className="product-view">
      <div className="container">
        <nav className="breadcrumb" aria-label="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/produtos">Produtos</Link>
          <span>/</span>
          <Link to="/produtos">Tênis</Link>
          <span>/</span>
          <Link to="/produtos">{product.brand}</Link>
          <span>/</span>
          <span className="breadcrumb__current">{product.name}</span>
        </nav>

        <ProductDetails product={product} />
      </div>

      <Section title="Produtos Relacionados" viewAllHref="/produtos">
        <ProductListing products={relatedProducts} columns={4} />
      </Section>
    </div>
  );
}
