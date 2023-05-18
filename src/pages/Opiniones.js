import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";

const Opiniones = () => {
  return (
    <>
      <Meta title={"Opiniones"} />
      <BreadCrumb title="Opiniones" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Buscar por Categorías</h3>
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
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-6 mb-3">
                <BlogCard />
              </div>
              <div className="col-6 mb-3">
                <BlogCard />
              </div>
              <div className="col-6 mb-3">
                <BlogCard />
              </div>
              <div className="col-6 mb-3">
                <BlogCard />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Opiniones;
