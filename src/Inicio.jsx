import { Link } from "react-router-dom";

export default function Inicio() {
    return (
        <div>
            {/**Imagen superior. */}
            <img className="img-fluid w-100" src="/imagenes/batman-banner.jpg" alt="batman-banner"></img>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                        <h1 className="titulo text-center">
                            Conoce todo sobre el caballero de la noche
                        </h1>
                    </div>
                </div>
            </div>

            <div className="secciones">
                <div className="container mt-5">
                    <div className="row gy-4">
                        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
                            <div class="card h-100">
                                <img src="/imagenes/batman-origen.jpg" class="card-img-top" alt="origen"></img>
                                <div class="card-body">
                                    <h5 class="titulo card-title">Origen</h5>
                                    <hr className="w-25"></hr>
                                    <p class="card-text">Un trágico evento cambió la vida de Bruce Wayne para siempre.</p>
                                    <Link to="/origen" class="btn btn-dark">Explorar</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
                            <div class="card h-100">
                                <img src="/imagenes/batman-villains.jpg" class="card-img-top" alt="villanos"></img>
                                <div class="card-body">
                                    <h5 class="titulo card-title">Villanos</h5>
                                    <hr className="w-25"></hr>
                                    <p class="card-text">Los criminales más temidos que amenazan Gotham.</p>
                                    <Link to="/villanos" class="btn btn-dark">Explorar</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
                            <div class="card h-100">
                                <img src="/imagenes/batman-gadgets.jpg" class="card-img-top" alt="habilidades"></img>
                                <div class="card-body">
                                    <h5 class="titulo card-title">Gadgets</h5>
                                    <hr className="w-25"></hr>
                                    <p class="card-text">
                                        Tecnología y dispositivos que ayudan a Batman 
                                        en su lucha contra el crimen.
                                    </p>
                                    <Link to="/gadgets" class="btn btn-dark">Explorar</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
                            <div class="card h-100">
                                <img src="/imagenes/batman-skills.jpg" class="card-img-top" alt="habilidades"></img>
                                <div class="card-body">
                                    <h5 class="titulo card-title">Habilidades</h5>
                                    <hr className="w-25"></hr>
                                    <p class="card-text">
                                        Batman no posee superpoderes, pero su
                                        entrenamiento, inteligencia y disciplina lo
                                        convierten en uno de los héroes más formidables.
                                    </p>
                                    <Link to="/habilidades" class="btn btn-dark">Explorar</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
                            <div class="card h-100">
                                <img src="/imagenes/batman-suits.jpg" class="card-img-top" alt="habilidades"></img>
                                <div class="card-body">
                                    <h5 class="titulo card-title">Trajes</h5>
                                    <hr className="w-25"></hr>
                                    <p class="card-text">
                                        A lo largo de los años, Batman ha utilizado 
                                        diferentes trajes diseñados para mejorar su 
                                        protección, movilidad y capacidad de combate.
                                    </p>
                                    <Link to="/trajes" class="btn btn-dark">Explorar</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}