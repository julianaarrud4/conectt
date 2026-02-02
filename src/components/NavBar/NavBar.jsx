import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
// Import dos componentes
import Inicio from '../Inicio/Inicio'
import AcoesDaConnect from '../AcoesDaConnect/AcoesDaConnect'
import QuemSomos from '../QuemSomos/QuemSomos'
import Perfil from '../Perfil/Perfil'
//Importar Imagens
import Logo from '../../assets/logo.png'
import ImgPerfil from '../../assets/perfil.jpg'
function NavBar(){
    return(
        <>
            <nav>
                <img src={Logo} alt="" />
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                        </li>
                    <li>
                        <Link to="/acoes-da-connect">Ações da Connect</Link>
                    <li><Link to="/quem-somos">Quem Somos</Link></li>
                </ul>
                
                <img src={ImgPerfil} alt="" />
            </nav>

         <Routes>
            <Route element={<Inicio />} />
            <Route element={<AcoesDaConnect />} />
            <Route element={<QuemSomos />} />
            <Route element={<Perfil />} />
   </Routes>




        </>
    )
}
export default NavBar


