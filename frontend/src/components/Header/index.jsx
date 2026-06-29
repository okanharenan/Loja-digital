import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import Logo from "../Logo";
import cartIcon from "../../assets/icons/mini-cart.svg";
import "./styles.css";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/produtos", label: "Produtos" },
  { to: "/categorias", label: "Categorias" },
  { to: "/meus-pedidos", label: "Meus Pedidos" },
];

export default function Header({ cartCount = 0, initialQuery = "" }) {
  const [query, setQuery] = useState(initialQuery);
  const navigate = useNavigate();

  function handleSearchSubmit(e) {
    e.preventDefault();
    navigate(`/produtos?q=${encodeURIComponent(query)}`);
  }

  return (
    <header className="header">
      <div className="container header__top">
        <Logo />

        <form
          className="header__search"
          onSubmit={handleSearchSubmit}
          role="search"
        >
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Pesquisar produto..."
            aria-label="Pesquisar produto"
          />
          <button type="submit" aria-label="Buscar">
            <Search size={18} />
          </button>
        </form>

        <div className="header__actions">
          <Link to="/cadastro" className="header__signup">
            Cadastre-se
          </Link>
          <Link to="/entrar" className="header__login">
            Entrar
          </Link>
          <Link to="/carrinho" className="header__cart" aria-label="Carrinho">
            <img src={cartIcon} alt="" />
            {cartCount > 0 && (
              <span className="header__cart-badge">{cartCount}</span>
            )}
          </Link>
        </div>
      </div>

      <nav className="container header__nav">
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              "header__nav-link" + (isActive ? " header__nav-link--active" : "")
            }
            end={link.to === "/"}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
