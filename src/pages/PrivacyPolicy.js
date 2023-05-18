import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const PrivacyPolicy = () => {
  return (
    <>
      <Meta title={"Política de Privacidad"} />
      <BreadCrumb title="Política de Privacidad" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <div className="policy">
                <p>Todos tenemos problemas.</p>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default PrivacyPolicy;
