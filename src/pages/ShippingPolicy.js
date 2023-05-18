import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from '../components/Container';

const ShippingPolicy = () => {
    return (
        <>
          <Meta title={"Politica de Envios"} />
          <BreadCrumb title="Politica de Envios" />
          <Container className="policy-wrapper py-5 home-wrapper-2">
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

export default ShippingPolicy