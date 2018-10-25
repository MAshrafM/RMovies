import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AppSymbol from '../../assets/icons/app-symbol.svg';
import MenuIcon from '../../assets/icons/menu-icon.svg';
import MenuCloseIcon from '../../assets/icons/menu-close-icon.svg';
import './nav-component.css';

export const NavbarComponent = (props) => {
  return(
    <div className="navbar">
      <Row className="show-grid">
        <Col xs={6} className="segment">
          <img src={AppSymbol} className="img-fluid" alt="RMovies" title="RMovies" />
        </Col>
        <Col xs={6} className="segment">
          <Button onClick={props.onClickHandler} className="default-btn" type="button">
            <img src={MenuIcon} className="img-fluid" alt="Menu" title="Menu" />
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export const NavComponent = ({showNav, onClickHandler}) => {
  const navArr = [
    {linkName: "Home", linkDescription: "The place where it all begins", linkRef: "/"},
    {linkName: "Listings", linkDescription: "The lastest Movie/TV listings and more", linkRef: "/view-listings"}
  ]
  let navClass = ["nav-container", "hidden-nav"]
  if(showNav){navClass.pop()}
  
  return(
    <div className={navClass.join(" ")}>
      <div className="nav-header">
        <Row className="show-grid">
          <Col xs={6} className="segment position__relative">
            <img src={AppSymbol} className="img-fluid" alt="RMovies" title="RMovie" />
            <span>M<br/>e<br/>n<br/>u</span>
          </Col>
          <Col xs={6} className="segment">
            <Button onClick={onClickHandler} className="default-btn" type="button">
              <img src={MenuCloseIcon} className="img-fluid" alt="Menu" title="Menu" />
            </Button>
          </Col>
        </Row>
      </div>
      <div className="nav-body">
        <ul className="list-unstyled nav-list">
        {
          navArr.map((navObj, index) =>{
            return(
              <li key={navObj.linkName} onClick={onClickHandler}>
                <Link to={navObj.linkRef}>
                  <span className="link-title">{navObj.linkName}</span>
                  <br />
                  {navObj.linkDescription}
                </Link>
              </li>
            )
          })
        }
        </ul>
      </div>
    </div>
  )
}