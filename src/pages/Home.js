import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { services } from "../utils/Data";

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img
                src="images/Gafas_sol/1 articulo/1.1.1articulo.jpg"
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>NO TE PIERDAS LA REVOLUCIÓN DEL TECHNO.</h4>
                <h5>Techoriders b2b 1.0</h5>
                <p>Por 15€ la unidad</p>
                <Link className="button">COMPRA AHORA</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src="images/Gafas_sol/2 articulo/2.1.1articulo.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>MEJOR VENTA</h4>
                  <h5>Techoriders DAFT 1.0</h5>
                  <p>Por 15€ la unidad</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/Gafas_sol/5 articulo/5.1.1articulo.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NUEVA COLECCIÓN</h4>
                  <h5>Techoriders ASTRO 1.0</h5>
                  <p>Por 15€ la unidad</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/Gafas_sol/6 articulo/6.1.1articulo.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>TOP VENTAS</h4>
                  <h5>Techoriders FUTUR 1.0</h5>
                  <p>Por 15€ la unidad</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/Gafas_sol/8 articulo/8.3.1articulo.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NUEVO ARTICULO</h4>
                  <h5>Techoriders ALFA 1.0</h5>
                  <p>Por 15€ la unidad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Camisas</h6>
                  <p>10 items</p>
                </div>
                <img
                  src="images/Camisas_camisetas/1 articulo/1.1camisa.jpg"
                  alt="camisa"
                ></img>
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Camisetas</h6>
                  <p>10 items</p>
                </div>
                <img
                  src="images/Camisas_camisetas/6 articulo/6.1camiseta.jpg"
                  alt="camisa"
                ></img>
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Gorras</h6>
                  <p>10 items</p>
                </div>
                <img
                  src="images/Gorras_sombreros/1 articulo/1.1articulo.jpg"
                  alt="camisa"
                ></img>
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Abánicos</h6>
                  <p>10 items</p>
                </div>
                <img
                  src="images/Abanicos/1 articulo/1.1articulo.jpg"
                  alt="camisa"
                ></img>
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Camisas</h6>
                  <p>10 items</p>
                </div>
                <img
                  src="images/Camisas_camisetas/1 articulo/1.1camisa.jpg"
                  alt="camisa"
                ></img>
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Camisetas</h6>
                  <p>10 items</p>
                </div>
                <img
                  src="images/Camisas_camisetas/6 articulo/6.1camiseta.jpg"
                  alt="camisa"
                ></img>
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Gorras</h6>
                  <p>10 items</p>
                </div>
                <img
                  src="images/Gorras_sombreros/1 articulo/1.1articulo.jpg"
                  alt="camisa"
                ></img>
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Abánicos</h6>
                  <p>10 items</p>
                </div>
                <img
                  src="images/Abanicos/1 articulo/1.1articulo.jpg"
                  alt="camisa"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
      <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Colección Destacada</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
      </Container>
      <Container class1="famous-wrapper py-5 home-wrapper-2">
      <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/sudaderas/3 articulo/3.4articulo.jpg"
                  className="img-fluid"
                  alt="famous"
                />
                <div className="famous-content position-absolute">
                  <h5>Sudaderas</h5>
                  <h6>
                    <i>Technorider</i> GUAU 1.0
                  </h6>
                  <p>Desde 15€ la unidad</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/Gorras_Sombreros/4 articulo/4.3articulo.jpg"
                  className="img-fluid"
                  alt="famous"
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Gorras y Sombreros</h5>
                  <h6 className="text-dark">
                    <i>Technorider</i> BEAR 1.0
                  </h6>
                  <p className="text-dark">Desde 15€ la unidad</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/camisas_camisetas/1 articulo/1.3camisa.jpg"
                  className="img-fluid"
                  alt="famous"
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Camisas y Camisetas</h5>
                  <h6 className="text-dark">
                    <i>Technorider</i> PIMP 1.0
                  </h6>
                  <p className="text-dark">Desde 15€ la unidad</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/gafas_sol/3 articulo/3.2articulo.jpg"
                  className="img-fluid"
                  alt="famous"
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Gafas de sol</h5>
                  <h6 className="text-dark">
                    <i>Technorider</i> RUN 1.0
                  </h6>
                  <p className="text-dark">Desde 15€ la unidad</p>
                </div>
              </div>
            </div>
          </div>
      </Container>      
      <Container class1="special-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Productos especiales</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
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
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
      </Container>
      <Container class1="marque-wrapper py-5">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-5">
                    <img
                      src="images/escolomer/escutColomer_10anys.png"
                      alt="colomer"
                      style={{ width: "110px" }}
                    />
                  </div>
                  <div className="mx-4 w-5">
                    <img
                      src="images/escolomer/escutColomer_10anys.png"
                      alt="colomer"
                      style={{ width: "110px" }}
                    />
                  </div>
                  <div className="mx-4 w-5">
                    <img
                      src="images/escolomer/escutColomer_10anys.png"
                      alt="colomer"
                      style={{ width: "110px" }}
                    />
                  </div>
                  <div className="mx-4 w-5">
                    <img
                      src="images/escolomer/escutColomer_10anys.png"
                      alt="colomer"
                      style={{ width: "110px" }}
                    />
                  </div>
                  <div className="mx-4 w-5">
                    <img
                      src="images/escolomer/escutColomer_10anys.png"
                      alt="colomer"
                      style={{ width: "110px" }}
                    />
                  </div>
                  <div className="mx-4 w-5">
                    <img
                      src="images/escolomer/escutColomer_10anys.png"
                      alt="colomer"
                      style={{ width: "110px" }}
                    />
                  </div>
                  <div className="mx-4 w-5">
                    <img
                      src="images/escolomer/escutColomer_10anys.png"
                      alt="colomer"
                      style={{ width: "110px" }}
                    />
                  </div>
                  <div className="mx-4 w-5">
                    <img
                      src="images/escolomer/escutColomer_10anys.png"
                      alt="colomer"
                      style={{ width: "110px" }}
                    />
                  </div>
                  <div className="mx-4 w-5">
                    <img
                      src="images/escolomer/escutColomer_10anys.png"
                      alt="colomer"
                      style={{ width: "110px" }}
                    />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Nuestros Últimos Blogs</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
          </div>
      </Container>
    </>
  );
};

export default Home;
