import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BsLinkedin, 
  BsGithub,
  BsYoutube,
  BsInstagram
 } from 'react-icons/bs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPaperPlane, 
} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return <>
  <footer className="py-4">
    <div className="container-xxl">
      <div className="row align-items-center">
        <div className="col-5">
          <div className="footer-top-data d-flex gap-30 align-items-center">
          <FontAwesomeIcon icon={faPaperPlane} size="2xl" style={{color: "#ffffff",}} />
            <h2 className="mb-0 text-white">Promociones Exclusivas, Descuentos y Novedades en nuestra Newsletter</h2>
          </div>
        </div>
        <div className="col-7">
          <div className="input-group"> 
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Tu dirección de correo electrónico"
                  aria-label="Tu dirección de correo electrónico"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Suscríbete
                </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <footer className="py-4">
    <div className="container-xxl">
      <div className="row">
        <div className="col-4">
          <h4 className="text-white mb-4">Contáctanos</h4>
          <div>
            <address className="text-white fs-6"> 
            Technorider Store <br/> num. 4 Pau, Llucmajor, 07620 <br/>
            España
            </address>
            <a href="tel:+34 649178894" 
            className="mt-3 d-block mb-1 text-white"
            >
            +34 649178894
            </a>
            <a href="mailto:jaumenadalcaro@gmail.com" 
            className="mt-2 d-block mb-2 text-white"
            >
            jaumenadalcaro@gmail.com
            </a>
            <div className="social_icons d-flex align-items-center gap-30 mt-4">
              <a className="text-white" href="#">
                <BsLinkedin className="fs-4" />
              </a>
              <a className="text-white" href="#">
                <BsInstagram className="fs-4"/>
              </a>
              <a className="text-white" href="#">
                <BsGithub className="fs-4"/>
              </a>
              <a className="text-white" href="#">
                <BsYoutube className="fs-4"/>
              </a>
            </div>
          </div>
        </div>
        <div className="col-3">
          <h4 className="text-white mb-4">Información</h4>
          <div className="footer-link d-flex flex-column">
            <Link to="/politica-privacidad" className="text-white py-2 mb-1">Política de privacidad</Link>
            <Link to="/politica-reembolso" className="text-white py-2 mb-1">Política de reembolso</Link>
            <Link to="/politica-envio" className="text-white py-2 mb-1">Política de envíos</Link>
            <Link to="/terminos-condiciones" className="text-white py-2 mb-1">Términos y condiciones</Link>
            <Link to="/opiniones" className="text-white py-2 mb-1">Opiniones</Link>
          </div>       
        </div>
        <div className="col-3">
          <h4 className="text-white mb-4">Cuenta</h4>
          <div className="footer-link d-flex flex-column">
            <Link className="text-white py-2 mb-1">Sobre nosotros</Link>
            <Link className="text-white py-2 mb-1">FaQ</Link>
            <Link className="text-white py-2 mb-1">Contacto</Link>
          </div>
        </div>
        <div className="col-2">
          <h4 className="text-white mb-4">Links Rápidos</h4>
          <div className="footer-link d-flex flex-column">
            <Link className="text-white py-2 mb-1">Gafas de sol</Link>
            <Link className="text-white py-2 mb-1">Camisas y camisetas</Link>
            <Link className="text-white py-2 mb-1">Gorras y sombreros</Link>
            <Link className="text-white py-2 mb-1">Abánicos</Link>
            <Link className="text-white py-2 mb-1">Mecheros y vapers</Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <footer className="py-4">
    <div className="cointainer-xxl">
      <div className="row">
        <div className="col-12">
          <p className="text-center mb-0 text-white">
          &copy; { new Date().getFullYear() }; Powered by JANACA
          </p>
        </div>
      </div>
    </div>
  </footer>
  </>
};

export default Footer