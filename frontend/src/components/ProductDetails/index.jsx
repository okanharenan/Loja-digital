import { useState } from "react";
import ProductOptions from "../ProductOptions";
import BuyBox from "../BuyBox";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";
import "./styles.css";

function StarIcon({ filled }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8.15102 1.2306L10.0003 5.65038L14.7346 6.06108C15.063 6.08972 15.1966 6.50343 14.9473 6.72122L11.3563 9.86292L12.4324 14.5367C12.507 14.8614 12.1585 15.1169 11.8764 14.9443L7.80774 12.4666L3.73906 14.9443C3.45622 15.1162 3.10846 14.8607 3.18309 14.5367L4.25921 9.86292L0.667401 6.72047C0.418146 6.50268 0.550983 6.08896 0.880089 6.06033L5.61444 5.64962L7.46371 1.2306C7.59206 0.923134 8.02266 0.923134 8.15102 1.2306Z"
        fill={filled ? "#F5A623" : "none"}
        stroke={filled ? "#F5A623" : "#1e1e1e"}
      />
    </svg>
  );
}

export default function ProductDetails({ product }) {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.defaultSize);
  const [selectedColor, setSelectedColor] = useState(
    product.colors.find((c) => c.selected)?.id ?? product.colors[0].id,
  );

  function showPrev() {
    setActiveImage((i) => (i === 0 ? product.images.length - 1 : i - 1));
  }

  function showNext() {
    setActiveImage((i) => (i === product.images.length - 1 ? 0 : i + 1));
  }

  function handleBuy() {
    // Integração com carrinho/checkout ficaria aqui
    alert(`Adicionado: ${product.name} — tamanho ${selectedSize}`);
  }

  return (
    <div className="product-details">
      <div className="product-details__gallery">
        <div className="product-details__main-image">
          <button
            className="product-details__nav product-details__nav--prev"
            onClick={showPrev}
            aria-label="Imagem anterior"
          >
            <img src={arrowLeft} alt="" />
          </button>
          <img src={product.images[activeImage]} alt={product.name} />
          <button
            className="product-details__nav product-details__nav--next"
            onClick={showNext}
            aria-label="Próxima imagem"
          >
            <img src={arrowRight} alt="" />
          </button>
        </div>

        <div className="product-details__thumbs">
          {(product.thumbnails ?? product.images).map((img, index) => (
            <button
              key={index}
              className={
                "product-details__thumb" +
                (index === activeImage ? " product-details__thumb--active" : "")
              }
              onClick={() => setActiveImage(index)}
              aria-label={`Ver imagem ${index + 1}`}
            >
              <img src={img} alt="" />
            </button>
          ))}
        </div>
      </div>

      <div className="product-details__info">
        <h1 className="product-details__name">{product.name}</h1>
        <p className="product-details__meta">
          {product.category} | {product.brand} | REF:{product.ref}
        </p>

        <div className="product-details__rating">
          <span className="product-details__stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} filled={i < product.rating} />
            ))}
          </span>
          <span className="product-details__score">
            {product.ratingScore} ★
          </span>
          <span className="product-details__reviews">
            ({product.reviews} avaliações)
          </span>
        </div>

        <BuyBox.Price price={product.price} oldPrice={product.oldPrice} />

        <div className="product-details__description">
          <h3>Descrição do produto</h3>
          <p>{product.description}</p>
        </div>

        <ProductOptions
          sizes={product.sizes}
          selectedSize={selectedSize}
          onSizeChange={setSelectedSize}
          colors={product.colors}
          selectedColor={selectedColor}
          onColorChange={setSelectedColor}
        />

        <BuyBox.Cta onBuy={handleBuy} />
      </div>
    </div>
  );
}
