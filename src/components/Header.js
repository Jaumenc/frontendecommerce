import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeCompare,
  faHeart,
  faUser,
  faCartShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Envios gratuitos para compras de mas de 50€ i devoluciones
                gratuitas
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Atención al cliente:
                <a className="text-white" href="tel:649178894">
                  +34 649178894
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white"><i>Technorider.</i></Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Busca tu producto aqui..."
                  aria-label="Busca tu producto aqui..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link to="/comparar-productos" className="d-flex align-items-center gap-10 text-white">
                    <FontAwesomeIcon
                      icon={faCodeCompare}
                      size="xl"
                      style={{ color: "#ffffff" }}
                      alt="compare"
                    />
                    <p className="mb-0">
                      Compara <br /> Productos
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/wishlist" className="d-flex align-items-center gap-10 text-white">
                    <FontAwesomeIcon
                      icon={faHeart}
                      size="xl"
                      style={{ color: "#ffffff" }}
                      alt="wishlist"
                    />
                    <p className="mb-0">
                      Articulos <br /> favoritos
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/login" className="d-flex align-items-center gap-10 text-white">
                    <FontAwesomeIcon
                      icon={faUser}
                      size="xl"
                      style={{ color: "#ffffff" }}
                      alt="user"
                    />
                    <p className="mb-0">
                      Login <br /> Mi cuenta
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/carrito" className="d-flex align-items-center gap-10 text-white">
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      size="2xl"
                      style={{ color: "#69b8fe" }}
                      alt="carrito"
                    />
                    <div className="d-flex flex-column" gap-10>
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">€ 100</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <FontAwesomeIcon icon={faBars} size="xl" />
                      <span className="me-5 d-inline-block">
                        Todas las categorias
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink className="text-white" to="/">
                      Home
                    </NavLink>
                    <NavLink className="text-white" to="/producto">
                      Nuestra Tienda
                    </NavLink>
                    <NavLink className="text-white" to="/opiniones">
                      Opiniones
                    </NavLink>
                    <NavLink className="text-white" to="/contact">
                      Contacto
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
