import { Link } from "react-router-dom";

export default function Paginacion(){
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 col-md-12 col-lg-12 col-xl-12 d-flex justify-content-center">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item"><Link class="page-link bg-dark text-warning" to="/villanos">1</Link></li>
                            <li class="page-item"><Link class="page-link bg-dark text-warning" to="/villanos/2">2</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}