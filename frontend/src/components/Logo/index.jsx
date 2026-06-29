import { Link } from "react-router-dom";
import logoHeader from "../../assets/icons/logo-header.svg";
import logoFooter from "../../assets/icons/logo-footer.svg";
import "./styles.css";

export default function Logo({ variant = "dark" }) {
  const src = variant === "light" ? logoFooter : logoHeader;

  return (
    <Link to="/" className={`logo logo--${variant}`}>
      <img src={src} alt="Digital Store" />
    </Link>
  );
}
