import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { IoGitCompareOutline } from "react-icons/io5";
import { BsBag, BsEye } from "react-icons/bs";

const ProductCard = (props) => {
  const { grid } = props;
  console.log(grid);
  let location = useLocation();

  return (
    <>
      <div
        className={` ${
          location.pathname === "/producto" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link
          to={`${
            location.pathname === "/"
              ? "/producto/:id"
              : location.pathname === "/producto/:id"
              ? "/producto/:id"
              : "/:id"
          }`}
          className="product-card position-relative"
        >
          <div className="whishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <AiOutlineHeart color="black" alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img
              src="images/Gafas_sol/9 articulo/9.1articulo.jpg"
              className="img-fluid"
              alt="product image"
            />
            <img
              src="images/Gafas_sol/9 articulo/9.2articulo.jpg"
              className="img-fluid"
              alt="product image"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Technoriders SOFT 1.0</h6>
            <h5 className="product-title">Gafas Technoriders deluxe edition</h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam,
              aliquid doloremque magni similique accusantium error. Ea,
              explicabo! Enim dignissimos eum unde alias? Possimus tenetur
              mollitia hic delectus
            </p>
            <p className="price">20€</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <BsEye color="black" alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <IoGitCompareOutline color="black" alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <BsBag color="black" alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={` ${
          location.pathname === "/producto" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link
          to={`${
            location.pathname === "/"
              ? "/producto/:id"
              : location.pathname === "/producto/:id"
              ? "/producto/:id"
              : "/:id"
          }`}
          className="product-card position-relative"
        >
          <div className="whishlist-icon position-absolute">
            <Link>
              <AiOutlineHeart color="black" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img
              src="images/Gafas_sol/9 articulo/9.1articulo.jpg"
              className="img-fluid"
              alt="product image"
            />
            <img
              src="images/Gafas_sol/9 articulo/9.2articulo.jpg"
              className="img-fluid"
              alt="product image"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Technoriders SOFT 1.0</h6>
            <h5 className="product-title">Gafas Technoriders deluxe edition</h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam,
              aliquid doloremque magni similique accusantium error. Ea,
              explicabo! Enim dignissimos eum unde alias? Possimus tenetur
              mollitia hic delectus
            </p>
            <p className="price">20€</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <BsEye color="black" alt="view" />
              </Link>
              <Link>
                <IoGitCompareOutline color="black" alt="compare" />
              </Link>
              <Link>
                <BsBag color="black" alt="addcart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
