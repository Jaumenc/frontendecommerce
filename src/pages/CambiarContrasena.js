import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const CambiarContrasena = () => {
  return (
    <>
      <Meta title={"Cambiar Contraseña"} />
      <BreadCrumb title="Cambiar Contraseña" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Cambiar Contraseña</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput
                  type="Contraseña"
                  name="Contraseña"
                  placeholder="Contraseña"
                />
                <CustomInput
                  type="password"
                  name="confpassword"
                  placeholder="Confirma la Contraseña"
                />
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0">Cambiar</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CambiarContrasena;
