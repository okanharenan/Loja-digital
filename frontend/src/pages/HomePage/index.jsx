import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Section from "../../components/Section";
import ProductListing from "../../components/ProductListing";
import {
  featuredCollections,
  categories,
  products,
  heroSlides,
  collectionImage,
} from "../../data/products";
import "./styles.css";

const AUTOPLAY_INTERVAL = 5000;

export default function HomePage() {
  const highlighted = products.slice(0, 8);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((i) => (i + 1) % heroSlides.length);
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__copy">
            <span className="hero__eyebrow">
              Melhores ofertas personalizadas
            </span>
            <h1 className="hero__title">
              Queima de
              <br />
              stoque Nike 🔥
            </h1>
            <p className="hero__text">
              Consequat culpa exercitation mollit nisi excepteur do do tempor
              laboris irure consectetur.
            </p>
            <Link to="/produtos" className="hero__cta">
              Ver Ofertas
            </Link>
          </div>
          <div className="hero__image">
            {heroSlides.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Tênis em destaque ${index + 1}`}
                className={
                  "hero__slide" +
                  (index === activeSlide ? " hero__slide--active" : "")
                }
              />
            ))}
          </div>
        </div>
        <div className="hero__dots">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={
                "hero__dot" +
                (index === activeSlide ? " hero__dot--active" : "")
              }
              onClick={() => setActiveSlide(index)}
              aria-label={`Ver slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <Section title="Coleções em destaque">
        <div className="collections-grid">
          {featuredCollections.map((item) => (
            <Link to="/produtos" key={item.id} className="collection-card">
              <img
                src={item.image}
                alt={item.title.replace("\n", " ")}
                className="collection-card__image"
              />
            </Link>
          ))}
        </div>
      </Section>

      <section className="category-strip">
        <div className="container">
          <h2 className="category-strip__title">Coleções em destaque</h2>
          <div className="category-strip__icons">
            {categories.map((cat) => (
              <Link
                to="/categorias"
                key={cat.id}
                className="category-strip__item"
              >
                <span className="category-strip__circle">
                  <CategoryIcon id={cat.id} />
                </span>
                <span>{cat.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Section title="Produtos em alta" viewAllHref="/produtos">
        <ProductListing products={highlighted} columns={4} />
      </Section>

      <section className="promo">
        <div className="container promo__inner">
          <div className="promo__image-wrap">
            <img
              src={collectionImage}
              alt="Air Jordan edição de colecionador"
            />
          </div>
          <div className="promo__copy">
            <span className="promo__eyebrow">Oferta especial</span>
            <h2 className="promo__title">Air Jordan edição de colecionador</h2>
            <p className="promo__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <Link to="/produtos" className="promo__cta">
              Ver Oferta
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function CategoryIcon({ id }) {
  // Ícones minimalistas em linha, consistentes com o restante do layout
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
  };
  switch (id) {
    case "camisetas":
      return (
        <svg {...common}>
          <path
            d="M8 4l4 2 4-2 4 4-3 3v9H7v-9L4 8l4-4z"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "calcas":
      return (
        <svg {...common}>
          <path d="M7 3h10l1 18-4-1-1-9-1 9-4 1L7 3z" strokeLinejoin="round" />
        </svg>
      );
    case "bones":
      return (
        <svg {...common}>
          <path d="M3 15c0-5 4-9 9-9s9 4 9 9" />
          <path d="M21 15c0 1-1 3-3 3H6c-2 0-3-2-3-3" />
        </svg>
      );
    case "headphones":
      return (
        <svg {...common}>
          <path d="M4 16v-3a8 8 0 0116 0v3" />
          <rect x="2.5" y="14" width="4" height="6" rx="1.5" />
          <rect x="17.5" y="14" width="4" height="6" rx="1.5" />
        </svg>
      );
    case "tenis":
    default:
      return (
        <svg {...common}>
          <path
            d="M3 16c0-2 2-3 4-4l5-3 3-2c1 1 2 2 4 2 2.5 0 4 1.5 4 4v3a2 2 0 01-2 2H4a1 1 0 01-1-1z"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}
