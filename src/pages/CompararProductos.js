import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Color from "../components/Color";
import Container from "../components/Container";
const CompararProductos = () => {
  return (
    <>
      <Meta title={"Comparar Productos"} />
      <BreadCrumb title="Comparar Productos" />
      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img src="images/Gafas_sol/4 articulo/4.1.1articulo.jpg" className="img-fluid w-100" alt="gafas" />
                </div>
                <div className="compare-product-details">
                    <h5 className="title">
                        <i>Technorider</i> MAGNA 1.0
                    </h5>
                    <h6 className="price mb-3 mt-3">21€</h6>

                    <div>
                        <div className="product-detail">
                            <h5>Brand:</h5>
                            <p><i>Technorider</i></p>
                        </div>
                        <div className="product-detail">
                            <h5>Tipo:</h5>
                            <p>Gafas de sol</p>
                        </div>
                        <div className="product-detail">
                            <h5>Disponibilidad:</h5>
                            <p>En Stock</p>
                        </div>
                        <div className="product-detail">
                            <h5>Color:</h5>
                            <Color/>
                        </div>
                        <div className="product-detail">
                            <h5>Talla:</h5>
                            <div className="d-flex gap-10">
                                <p>S</p>
                                <p>M</p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img src="images/Gafas_sol/4 articulo/4.1.1articulo.jpg" className="img-fluid w-100" alt="gafas" />
                </div>
                <div className="compare-product-details">
                    <h5 className="title">
                        <i>Technorider</i> MAGNA 1.0
                    </h5>
                    <h6 className="price mb-3 mt-3">21€</h6>

                    <div>
                        <div className="product-detail">
                            <h5>Brand:</h5>
                            <p><i>Technorider</i></p>
                        </div>
                        <div className="product-detail">
                            <h5>Tipo:</h5>
                            <p>Gafas de sol</p>
                        </div>
                        <div className="product-detail">
                            <h5>Disponibilidad:</h5>
                            <p>En Stock</p>
                        </div>
                        <div className="product-detail">
                            <h5>Color:</h5>
                            <Color/>
                        </div>
                        <div className="product-detail">
                            <h5>Talla:</h5>
                            <div className="d-flex gap-10">
                                <p>S</p>
                                <p>M</p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default CompararProductos;
