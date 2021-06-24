/*eslint-disable*/
import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import classnames from "classnames";
// reactstrap components
import { Container } from 'react-bootstrap';

// core components

function SearchHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/6287486/pexels-photo-6287486.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500)",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Recipie React</h1>
            </div>
            <h2 className="presentation-subtitle text-center">
              Make your recipes quick and easily!
            </h2>
          </Container>
        </div>
        <h6 className="category category-absolute">
          Designed and coded by{" "}
          <a className="tag"
            href="https://aboutmain.gatsbyjs.io/"
            target="_blank"
          >
           Parth Pradhan
          </a>
        </h6>
      </div>
    </>
  );
}

export default SearchHeader;
