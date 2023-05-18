import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const TermAndConditions = () => {
  return (
    <>
      <Meta title={"Términos y Condiciones"} />
      <BreadCrumb title="Términos y Condiciones" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
            <div className="row">
                <div className="col-12">
                    <div className="policy">
                        <p>Que te piris por ahí.</p>
                    </div>
                </div>
            </div>
      </Container>
    </>
  );
};

export default TermAndConditions;
