import { Link } from "react-router-dom";

export default function Habilidades(){
    return(
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                        <h1 className="titulo text-center">
                            DOMINIO FÍSICO, MENTAL Y ESTRATÉGICO
                        </h1>
                    </div>
                </div>
            </div>

            <hr></hr>

            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                        <img src="/imagenes/batman-skills.jpg" alt="batman-skills" className="img-fluid"></img>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                        <h1 className="titulo">
                            HABILIDADES DE COMBATE
                        </h1>
                        <hr className="w-50"></hr>
                        <p>
                            Bruce Wayne alcanzó el máximo nivel de condición física 
                            que un humano pueda alcanzar, superando incluso a atletas 
                            olímpicos en fuerza, velocidad, resistencia, agilidad, 
                            reflejos y coordinación. Su entrenamiento comenzó a muy 
                            temprana edad y continuó bajo la tutela de expertos como 
                            Ra's Al Ghul, incluyendo artes marciales, gimnasia y 
                            combate simulado. Además, es un experto en combate 
                            cuerpo a cuerpo, capaz de adaptarse a cualquier estilo de 
                            lucha.
                        </p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                        <img src="/imagenes/batman-peleando.jpg" alt="batman-peleando" className="img-fluid"></img>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                        <h1 className="titulo">INTELECTO</h1>
                        <hr className="w-50"></hr>
                        <p>
                            Batman es considerado uno de los personajes más inteligentes 
                            de DC, solo superado por Lex Luthor. Su capacidad de 
                            análisis y deducción lo convierten en el mejor detective 
                            del mundo, capaz de resolver crímenes complejos, descubrir 
                            trampas y anticipar movimientos de sus enemigos.
                        </p>
                        <p>
                            Su intuición y razonamiento son comparables a los de 
                            Sherlock Holmes, y utiliza tecnología avanzada para acceder 
                            a información y pruebas que otros no podrían obtener.
                        </p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                        <img className="img-fluid" src="/imagenes/batman-intelecto.jpg" alt="batman-intelecto"></img>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                        <h1 className="titulo">
                            USO DE TECNOLOGÍA Y RECURSOS
                        </h1>
                        <hr className="w-50"></hr>
                        <p>
                            Aunque no posea superpoderes, Batman compensa con 
                            un <Link to="/gadgets" className="titulo">arsenal tecnológico</Link> y 
                            recursos prácticamente ilimitados, 
                            incluyendo el Batmóvil, Batplane, trajes especializados, 
                            robots y dispositivos de vigilancia.
                            Su capa y equipo le permiten planear y realizar maniobras 
                            aéreas, simulando vuelo en combate. Además, su cinturón 
                            contiene herramientas y gadgets que le permiten adaptarse a 
                            cualquier situación. 
                        </p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                        <img src="/imagenes/batman-tecnologia.jpg" className="img-fluid" alt="batman-tecnologia"></img>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                        <h1 className="titulo">
                            LIDERAZGO
                        </h1>
                        <hr className="w-50"></hr>
                        <p>
                            Batman es un estratega excepcional, capaz de liderar a la 
                            Liga de la Justicia y coordinar a héroes con habilidades 
                            sobrehumanas. Su capacidad de planificación y anticipación 
                            le permite vencer a enemigos más fuertes o rápidos que él, 
                            incluyendo a Superman en varias ocasiones. Su enfoque 
                            meticuloso y su disciplina mental lo hacen un adversario 
                            formidable incluso sin poderes sobrenaturales.
                        </p>
                        <p> 
                            Su mente analítica y su habilidad para anticipar las 
                            acciones del enemigo hacen que incluso héroes 
                            con poderes extraordinarios confíen en su juicio y 
                            sigan sus planes.
                        </p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                        <img src="/imagenes/justice-league.jpg" alt="justice-league" className="img-fluid"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}