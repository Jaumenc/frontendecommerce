import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const Carrito = () => {
  return (
    <>
      <Meta title={"Carrito"} />
      <BreadCrumb title="Carrito" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                <h4 className="cart-col-1">Producto</h4>
                <h4 className="cart-col-2">Precio</h4>
                <h4 className="cart-col-3">Cantidad</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="w-25">
                    <img src="" className="img-fluid" alt="product image" />
                  </div>
                  <div className="w-75">
                    <h5></h5>
                    <p>Talla:</p>
                    <p>Color:</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price"></h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      className="form-control"
                      type="number"
                      name=""
                      min={1}
                      max={10}
                      id=""
                    />
                  </div>
                  <div>
                    <AiFillDelete className="text-danger" />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price"></h5>
                </div>
              </div>
            </div>
            <div className="col-12 py-2 mt-4">
              <div className="d-flex justify-content-between align-items-baseline">
              <Link to="producto/:id" className="button">
                Continua Comprándo
              </Link>
              <div className="d-flex flex-column align-items-end">
                <h4>Subtotal:</h4>
                <p>Impuestos y envío calculados al finalizar la compra</p>
                <Link to="/checkout" className="button">Checkout</Link>
              </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default Carrito;
