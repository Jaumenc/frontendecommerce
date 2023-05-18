import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import {AiOutlineHome, AiOutlineMail} from "react-icons/ai";
import {BiPhoneCall, BiInfoCircle} from "react-icons/bi";
import Container from "../components/Container";

const Contact = () => {
  return (
    <>
      <Meta title={"Contáctnos"} />
      <BreadCrumb title="Contáctanos" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12316.251859020318!2d2.880846600285637!3d39.49049280529115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1297bb076b7563c5%3A0xc76e45725e237545!2s07620%20Llucmajor%2C%20Illes%20Balears!5e0!3m2!1sca!2ses!4v1684317563783!5m2!1sca!2ses"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col 12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contacto</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input type="text" className="form-control" placeholder="Nombre"/>
                    </div>
                    <div>
                      <input type="email" className="form-control" placeholder="Email"/>
                    </div>
                    <div>
                      <input type="tel" className="form-control" placeholder="Número Móvil"/>
                    </div>
                    <div>
                      <textarea name="" id="" className="w-100 form-control" cols="30" rows="10" placeholder="Comentario"></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Enviar</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Ponte en contacto con nosotros</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineHome className="fs-5"/> 
                        <address className="mb-0">
                        num. 4 Pau, Llucmajor, 07620 España
                        </address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiPhoneCall className="fs-5"/>
                        <a href="tel:+34 649178894">+34 649178894</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineMail className="fs-5"/>
                        <a href="mailto:jaumenadalcaro@gmail.com">jaumenadalcaro@gmail.com</a>
                      </li> 
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiInfoCircle className="fs-5"/>
                        <p className="mb-0">Sólo hay una marcha, y es a tope.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default Contact;
