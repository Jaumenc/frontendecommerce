import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blogs/blog1.jpg" className="img-fluid w-100" alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date">15/05/2023</p>
          <h5 className="title">Music is the answer</h5>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            repudiandae, aliquam accusantium obcaecati
          </p>
          <Link to="/opinion/:id" className="button">
            Read More
          </Link>
        </div>
      </div>
  );
};

export default BlogCard;
