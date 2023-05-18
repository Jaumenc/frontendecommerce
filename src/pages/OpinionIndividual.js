import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi"
import Container from "../components/Container";

const OpinionIndividual = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/opiniones" className="d-flex align-items-center gap-10">
                  <HiOutlineArrowLeft className="fs-4"/>
                  Volver a Opiniones
                </Link>
                <h3 className="title">Music is the answer</h3>
                <img
                  src="images/blogs/blog2.jpg"
                  className="img-fluid w-100 my-4"
                  alt="blog"
                />
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Inventore recusandae architecto, hic explicabo rerum voluptas
                  cumque iste, autem modi corrupti a praesentium dolorum amet,
                  nihil est omnis ex dolorem molestias.
                </p>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default OpinionIndividual;
