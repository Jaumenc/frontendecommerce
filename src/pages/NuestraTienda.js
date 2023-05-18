import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import Container from "../components/Container";

const NuestraTienda = () => {
  const [grid, setGrid] = useState(4);

  return (
    <>
      <Meta title={"Nuestra Tienda"} />
      <BreadCrumb title="Nuestra Tienda" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Comprar por Categorías</h3>
              <div>
                <ul className="ps-0">
                  <li>Abanicos</li>
                  <li>Camisas</li>
                  <li>Camisetas</li>
                  <li>Gorras</li>
                  <li>Mecheros</li>
                  <li>Sudaderas</li>
                  <li>Vapers</li>
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filtrado Por</h3>
              <div>
                <h5 className="sub-title">Disponibilidad</h5>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      En Stock (1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      Fuera de Stock(0)
                    </label>
                  </div>
                </div>
                <h5 className="sub-title">Precio</h5>
                <div className="d-flex align-items-center gap-10">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Desde"
                    />
                    <label htmlFor="floatingInput">Desde</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput1"
                      placeholder="Hasta"
                    />
                    <label htmlFor="floatingInput1">Hasta</label>
                  </div>
                </div>
                <h5 className="sub-title">Colores</h5>
                <div>
                  <Color />
                </div>
                <h5 className="sub-title">Talla</h5>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-1"
                    />
                    <label className="form-check-label" htmlFor="color-1">
                      S (2)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-2"
                    />
                    <label className="form-check-label" htmlFor="color-2">
                      M (2)
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Etiquetas de Productos</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Abanico
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Camisa
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Camiseta
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Gafas de sol
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Mechero
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Sudadera
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Vaper
                  </span>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Producto Aleatorio</h3>
              <div>
                <div className="random-products mb-3 d-flex">
                  <div className="w-50">
                    <img
                      src="images/Gorras_sombreros/3 articulo/3.1articulo.jpg"
                      className="img-fluid"
                      alt="gorra"
                    />
                  </div>
                  <div className="w-50">
                    <h5>
                      Gorra <i>Technorider</i> NYC 1.0
                    </h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b>20€</b>
                  </div>
                </div>
                <div className="random-products d-flex">
                  <div className="w-50">
                    <img
                      src="images/Gorras_sombreros/3 articulo/3.1articulo.jpg"
                      className="img-fluid"
                      alt="gorra"
                    />
                  </div>
                  <div className="w-50">
                    <h5>
                      Gorra <i>Technorider</i> NYC 1.0
                    </h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b>20€</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block" style={{ width: "100px" }}>
                    Ordenado Por:
                  </p>
                  <select
                    name=""
                    defaultValue={"manual"}
                    className="form-control form-select"
                    id=""
                  >
                    <option value="manual">Más destacado</option>
                    <option value="best-selling">Más vendido</option>
                    <option value="title-ascending">Ascendente</option>
                    <option value="title-descending">Descendiente</option>
                    <option value="price-descending">
                      Precio, Menor a Mayor
                    </option>
                    <option value="price-ascending">
                      Precio, Mayor a Menor
                    </option>
                    <option value="created-ascending">
                      Fecha, Menor a Mayor
                    </option>
                    <option value="created-descending">
                      Fecha, Mayor a Menor
                    </option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0">21 Products</p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      src="images/gr4.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      src="images/gr3.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      src="images/gr2.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src="images/gr.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
                <ProductCard grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default NuestraTienda;
