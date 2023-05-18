import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Container from "../components/Container";

const Checkout = () => {
  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">
                <i>Technorider</i>
              </h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link className="text-dark total-price" to="/carrito">
                      Carrito
                    </Link>
                  </li>
                  &nbsp; / &nbsp;
                  <li
                    className="breadcrumb-item active total-price"
                    aria-current="page"
                  >
                    Información
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item active total-price">Envío</li>
                  &nbsp; /
                  <li className="breadcrumb-item active" aria-current="page">
                    Pago
                  </li>
                </ol>
              </nav>
              <h4 className="title total">Información de contacto</h4>
              <p className="user-details total">
                Jaume Nadal (jaumenadalcaro@gmail.com)
              </p>
              <h4 className="mb-3">Dirección de Envío</h4>
              <form
                action=""
                className="d-flex gap-15 flex-wrap justify-content-between"
              >
                <div className="w-100">
                  <select name="" className="form-control form-select" id="">
                    <option value="" selected disabled>
                      Seleccionar País
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Apellido"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Dirección"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Número"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Ciudad"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <select name="" className="form-control form-select" id="">
                    <option value="" selected disabled>
                      Seleccionar País
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="CP"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/carrito" className="text-dark">
                      <BiArrowBack className="me-2" />
                      Volver al carrito
                    </Link>
                    <Link to="/carrito" className="button">
                      Continuar con el envío
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              <div className="d-flex gap-10 mb-2 align-items-center">
                <div className="w-75 d-flex gap-10">
                  <div className="w-25 position-relative">
                    <span
                      style={{ top: "-10px", right: "2px" }}
                      className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                    >
                      1
                    </span>
                    <img className="img-fluid" src="" alt="" />
                  </div>
                  <div>
                    <h5 className="total-price">skdsdk</h5>
                    <p className="total-price">wdfwfe</p>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="total">100€</h5>
                </div>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="total">Subtotal</p>
                <p className="total-price">€</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Envío</p>
                <p className="mb-0 total-price">€</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bottom py-4">
              <h4 className="total">Total</h4>
              <h5 className="total-price">€</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
