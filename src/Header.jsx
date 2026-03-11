import { Link } from "react-router-dom";

export default function Header(){
    return (
        <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/"><img width={"80px"} src="/imagenes/batman-logo.png" alt="logo"></img></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <Link class="nav-link" to="/origen">Origen</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/villanos">Villanos</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/gadgets">Gadgets</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/habilidades">Habilidades</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/trajes">Trajes</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}