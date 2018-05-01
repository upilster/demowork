import React, { Component } from "react";
import logo from "../../Media/workclub_logo.png";
export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-medium unique-color-dark pt-0"
          style={{ backgroundColor: "#2a2a2a", marginTop: "60px" }}>
        <div style={{ backgroundColor: "#41bff1", padding: "20px 0" }}>
          <div className="container">
            <div className="row py-4 d-flex align-items-center">
              <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                <h5 className="mb-0 text-light">
                  Get connected with us on social networks!
                </h5>
              </div>
              <div className="col-md-6 col-lg-7 text-center text-md-right">
                <a className="fb-ic ml-0">
                  <i className="fa fa-facebook text-light mr-lg-4"> </i>
                </a>
                <a className="tw-ic">
                  <i className="fa fa-twitter text-light mr-lg-4"> </i>
                </a>
                <a className="gplus-ic">
                  <i className="fa fa-google-plus text-light mr-lg-4"> </i>
                </a>
                <a className="li-ic">
                  <i className="fa fa-linkedin text-light mr-lg-4"> </i>
                </a>
                <a className="ins-ic">
                  <i className="fa fa-instagram text-light mr-lg-4"> </i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container mt-5 mb-4 text-center text-md-left"
        >
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
              <img src={logo} alt="" style={{ maxHeight: "4rem" }} />
              <p style={{color: '#fff'}} className="my-4">
                Here you can use rows and columns here to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase text-light font-weight-bold">
                <strong>Products</strong>
              </h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: 60}} />
              <p>
                <a href="#!">MDBootstrap</a>
              </p>
              <p>
                <a href="#!">MDWordPress</a>
              </p>
              <p>
                <a href="#!">BrandFlow</a>
              </p>
              <p>
                <a href="#!">Bootstrap Angular</a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase text-light font-weight-bold">
                <strong>Useful links</strong>
              </h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60 }}
              />
              <p>
                <a href="#!">Your Account</a>
              </p>
              <p>
                <a href="#!">Become an Affiliate</a>
              </p>
              <p>
                <a href="#!">Shipping Rates</a>
              </p>
              <p>
                <a href="#!">Help</a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 text-light">
              <h6 className="text-uppercase text-light font-weight-bold">
                <strong>Contact</strong>
              </h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60 }}
              />
              <p>
                <i className="fa fa-home mr-3" /> New York, NY 10012, US
              </p>
              <p>
                <i className="fa fa-envelope mr-3" /> info@example.com
              </p>
              <p>
                <i className="fa fa-phone mr-3" /> + 01 234 567 88
              </p>
              <p>
                <i className="fa fa-print mr-3" /> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
        <div className="footer-copyright py-3 text-center">
          <span style={{color: 'grey'}}>© 2018 Copyright:</span>
          <a href="/">
            <strong> workclub.com</strong>
          </a>
        </div>
      </footer>
    );
  }
}
