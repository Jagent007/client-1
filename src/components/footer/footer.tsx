import { PageFooter } from "./styles";
import { Link } from "react-router-dom"; 

export default function Footer() {
  return (
    <PageFooter>
      <Link className="links" to="/terms-of-use">Termos de Uso</Link>
      <Link className="links" to="/privacy-policy">Termos de Privacidade</Link>
    </PageFooter>
  );
}