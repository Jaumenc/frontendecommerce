import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import Container from "../components/Container";

const ProductoIndividual = () => {
  const props = {
    width: 400,
    height: 600,
    zoomWidth: 600,
    img: "images/Camisas_camisetas/4 articulo/4.1articulo.jpg",
  };

  const [orderedProduct, setorderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  return (
    <>
      <Meta title={"Nombre Producto"} />
      <BreadCrumb title="Nombre Producto" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div>
                  <img
                    src="images/Gafas_sol/2 articulo/2.1.1articulo.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="images/Gafas_sol/2 articulo/2.1.1articulo.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="images/Gafas_sol/2 articulo/2.1.1articulo.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="images/Gafas_sol/2 articulo/2.1.1articulo.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">Techoriders FUTUR 1.0</h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">15€</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 t-review">( 2 Reviews )</p>
                  </div>
                  <a className="review-btn" href="#review">
                    Escribe una Review
                  </a>
                </div>
                <div className="py-3">
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Tipo:</h3>
                    <p className="product-data">GFD</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Marca:</h3>
                    <p className="product-data">GFD</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Categoria:</h3>
                    <p className="product-data">GFD</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Tags:</h3>
                    <p className="product-data">GFD</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Disponibilidad:</h3>
                    <p className="product-data">En Stock</p>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Talla:</h3>
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        S
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        M
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        L
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        XL
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Color:</h3>
                    <Color />
                  </div>
                  <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                    <h3 className="product-heading">Cantidad:</h3>
                    <div className="">
                      <input
                        type="number"
                        name=""
                        min={1}
                        max={10}
                        className="form-control"
                        style={{ width: "70px" }}
                        id=""
                      />
                    </div>
                    <div className="d-flex align-items-center gap-30 ms-5 ">
                      <button className="button border-0" type="submit">
                        Añade al carrito
                      </button>
                      <button className="button signup">Compra ahora</button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <a href="">
                        <TbGitCompare className="fs-5 me-2" />
                        Añadir para comparar
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <AiOutlineHeart className="fs-5 me-2" />
                        Añadir a la Wishlist
                      </a>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column my-3">
                    <h3 className="product-heading">Envios y Devoluciones</h3>
                    <p className="product-data">
                      Envios y Devoluciones gratuitos en todos nuestros pedidos!
                      <br />
                      Enviamos por todo el territorio español
                      <b> en 2-3 días laborables!</b>
                    </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-3">
                    <h3 className="product-heading">Enlace del producto :</h3>
                    <a href="javascrips:void(0);" onClick={()=>{copyToClipboard()}}>Copia el enlace del producto  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h4>Descripción</h4>
              <div className="bg-white p-3">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
                  quae explicabo quasi, consectetur quibusdam eligendi fugit
                  nisi consequatur minima. Porro asperiores sed vel excepturi
                  debitis voluptatem ratione quos ab libero?
                </p>
              </div>
            </div>
          </div>
      </Container>
      <Container class1="reviews-wrapper    home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3 id="review">Reviews</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Opiniones de los Usuarios</h4>
                    <div className="d-flex align-items-center gap-10"></div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a
                        className="text-dark text-decoration-underline"
                        href=""
                      >
                        Escribe una Review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <h4>Escribe una Review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="10"
                        placeholder="Comentario"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Enviar Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">JANACA</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Veniam illum, error unde autem numquam libero voluptatibus
                      praesentium quasi dicta! Iusto veniam eveniet porro
                      doloribus aut voluptatibus assumenda numquam facilis non.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Nuestros productos destacados</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
          </div>
      </Container>
    </>
  );
};

export default ProductoIndividual;
