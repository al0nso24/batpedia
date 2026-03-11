import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <div className="container-fluid bg-dark text-white mt-5 p-5">
            <div className="row gy-5">
                <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                    <img width={"80px"} src="/imagenes/batman-logo.png" alt="logo"></img>
                    <p className="mt-4">&copy; 2026. Alonso Zegarra Velásquez</p>
                    <i class="bi bi-envelope-at-fill"></i> zegarrav24@gmail.com
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                    <h1>Secciones</h1>
                    <ul className="enlaces-footer">
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/origen">Origen</Link></li>
                        <li><Link to="/villanos">Villanos</Link></li>
                        <li><Link to="/gadgets">Gadgets</Link></li>
                        <li><Link to="/habilidades">Habilidades</Link></li>
                        <li><Link to="/trajes">Trajes</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}