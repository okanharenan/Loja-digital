import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import FilterGroup from "../../components/FilterGroup";
import ProductListing from "../../components/ProductListing";
import {
  products,
  brands,
  productCategories,
  genders,
} from "../../data/products";
import "./styles.css";

const SORT_OPTIONS = [
  { value: "relevantes", label: "mais relevantes" },
  { value: "menor-preco", label: "menor preço" },
  { value: "maior-preco", label: "maior preço" },
  { value: "lancamentos", label: "lançamentos" },
];

export default function ProductListingPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "Tênis";

  const [selectedBrands, setSelectedBrands] = useState(["Adidas", "K-Swiss"]);
  const [selectedCategories, setSelectedCategories] = useState([
    "Esporte e lazer",
  ]);
  const [selectedGenders, setSelectedGenders] = useState([
    "Masculino",
    "Feminino",
  ]);
  const [condition, setCondition] = useState(["Novo"]);
  const [sortBy, setSortBy] = useState("relevantes");

  // Nesta versão mockada os filtros não recortam o array (não há atributos
  // de marca/categoria reais nos produtos fake), mas o estado já fica pronto
  // para plugar numa API: bastaria filtrar `products` pelos valores selecionados.
  const sortedProducts = useMemo(() => {
    const list = [...products];
    if (sortBy === "menor-preco") list.sort((a, b) => a.price - b.price);
    if (sortBy === "maior-preco") list.sort((a, b) => b.price - a.price);
    return list;
  }, [sortBy]);

  return (
    <div className="container listing-page">
      <div className="listing-page__header">
        <h1>
          Resultados para "{query}" <span>- 389 produtos</span>
        </h1>

        <label className="listing-page__sort">
          Ordenar por:
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="listing-page__body">
        <aside className="listing-page__sidebar">
          <h2 className="listing-page__sidebar-title">Filtrar por</h2>

          <FilterGroup
            title="Marca"
            options={brands}
            selected={selectedBrands}
            onChange={setSelectedBrands}
          />

          <FilterGroup
            title="Categoria"
            options={productCategories}
            selected={selectedCategories}
            onChange={setSelectedCategories}
          />

          <FilterGroup
            title="Gênero"
            options={genders}
            selected={selectedGenders}
            onChange={setSelectedGenders}
          />

          <FilterGroup
            title="Estado"
            type="radio"
            options={["Novo", "Usado"]}
            selected={condition}
            onChange={setCondition}
          />
        </aside>

        <main className="listing-page__results">
          <ProductListing products={sortedProducts} columns={3} />
        </main>
      </div>
    </div>
  );
}
