//importando as imagens do footer

//importando a folha de estilo do footer

import styles from "./Footer.module.scss";
import Logo from "../../assets/logo.png";
import Whatsapp from "../../assets/whatsapp.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";

function Footer() {
  return (
    <footer>
     <div>
                <img src={Logo} alt="Logo da Footer" />
                <h2>Connect</h2>
            </div>
            <p>© 2026 Vai na Web & Empower. Todos os direitos reservados. Projeto destinado exclusivamente a fins educativos.</p>
            <nav>
                <img src={Whatsapp} alt="Logo do Whatsapp" />
                <img src={Instagram} alt="Logo do Instagram" />
                <img src={Linkedin} alt="Logo do Linkedin" />
            </nav>
        </footer>
    )
}
export default Footer