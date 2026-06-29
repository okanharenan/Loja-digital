// Dados mockados — em produção isso viria de uma API

// Carrossel da Home
import homeSlide1 from "../assets/home/home-slide-1.jpeg";
import homeSlide2 from "../assets/home/home-slide-2.jpeg";
import homeSlide3 from "../assets/home/home-slide-3.jpeg";
import homeSlide4 from "../assets/home/home-slide-4.jpeg";
import homeSlide5 from "../assets/home/home-slide-5.jpeg";
import homeSlide6 from "../assets/home/home-slide-6.jpeg";
import homeSlide7 from "../assets/home/home-slide-7.jpeg";
import homeSlide8 from "../assets/home/home-slide-8.jpeg";

// Coleções em destaque
import collection1 from "../assets/collections/collection-1.png";
import collection2 from "../assets/collections/collection-2.png";
import collection3 from "../assets/collections/collection-3.png";

// Galeria do produto em destaque (imagens grandes; thumbnails reutilizam as mesmas fotos)
import productImage1 from "../assets/product/produc-image-1.jpeg";
import productImage2 from "../assets/product/produc-image-2.jpeg";
import productImage3 from "../assets/product/produc-image-3.jpeg";
import productImage4 from "../assets/product/produc-image-4.jpeg";
import productImage5 from "../assets/product/produc-image-5.jpeg";

export const heroSlides = [
  homeSlide1,
  homeSlide2,
  homeSlide3,
  homeSlide4,
  homeSlide5,
  homeSlide6,
  homeSlide7,
  homeSlide8,
];

export const featuredCollections = [
  {
    id: "supreme",
    discount: "30% OFF",
    title: "Novo drop\nSupreme",
    cta: "Comprar",
    image: collection1,
  },
  {
    id: "adidas",
    discount: "30% OFF",
    title: "Coleção\nAdidas",
    cta: "Comprar",
    image: collection2,
  },
  {
    id: "beats",
    discount: "30% OFF",
    title: "Novo\nBeats Bass",
    cta: "Comprar",
    image: collection3,
  },
];

export const categories = [
  { id: "camisetas", label: "Camisetas" },
  { id: "calcas", label: "Calças" },
  { id: "bones", label: "Bonés" },
  { id: "headphones", label: "Headphones" },
  { id: "tenis", label: "Tênis" },
];

export const brands = ["Adidas", "Calenciaga", "K-Swiss", "Nike", "Puma"];

export const productCategories = [
  "Esporte e lazer",
  "Casual",
  "Utilitário",
  "Corrida",
];

export const genders = ["Masculino", "Feminino", "Unisex"];

// Produto em destaque (página de produto)
// Cada imagem grande tem o thumbnail correspondente pelo índice.
export const featuredProduct = {
  id: "nike-revolution-6",
  name: "Tênis Nike Revolution 6 Next Nature Masculino",
  category: "Casual",
  brand: "Nike",
  ref: "38416711",
  rating: 4,
  ratingScore: "4.7",
  reviews: 90,
  price: 219.0,
  oldPrice: 219.0,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  sizes: [39, 40, 41, 42, 43],
  defaultSize: 41,
  colors: [
    { id: "blue", hex: "#22D3EE" },
    { id: "red", hex: "#F76C6C", selected: true },
    { id: "black", hex: "#3A3A3A" },
    { id: "purple", hex: "#6C6CF7" },
  ],
  images: [
    productImage1,
    productImage2,
    productImage3,
    productImage4,
    productImage5,
  ],
  thumbnails: [
    productImage1,
    productImage2,
    productImage3,
    productImage4,
    productImage5,
  ],
};

// Catálogo geral (lista de produtos + relacionados)
// TODO: imagem provisória (mesma foto repetida) — trocar quando cada
// produto do grid tiver sua própria foto enviada como arquivo.
export const products = Array.from({ length: 15 }).map((_, i) => ({
  id: `kswiss-v8-${i + 1}`,
  name: "K-Swiss V8 - Masculino",
  category: "Tênis",
  discount: i < 2 ? "30% OFF" : null,
  price: 100,
  oldPrice: 200,
  image: productImage5,
}));

export const relatedProducts = products.slice(0, 4);

// Banner promocional final da Home ("Air Jordan edição de colecionador")
export const collectionImage = productImage1;
