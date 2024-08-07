import { Form } from "react-router-dom";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 mb-5 mb-lg-0">
            <div className="subscribe-form-wrap">
              <h6>Subscribe. Every Weekly.</h6>
              <form
                className="custom-form subscribe-form"
                action="#"
                method="get"
              >
                <input
                  type="email"
                  name="subscribe-email"
                  id="subscribe-email"
                  pattern="[^ @]*@[^ @]*"
                  className="form-control"
                  placeholder="Email Address"
                  required
                />
                <div className="col-lg-12 col-12">
                  <button type="submit" className="form-control" id="submit">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-md-0 mb-lg-0">
            <h6 className="site-footer-title mb-3">Contact</h6>
            <p className="mb-2">
              <strong className="d-inline me-2">Email:</strong>{" "}
              Yazanzzxzz@gmail.com
            </p>
            <p>
              <strong className="d-inline me-2">Git:</strong>
              <a href="#">https://github.com/YazanJoureah</a>
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <h6 className="site-footer-title mb-3">Download Mobile</h6>
            <div className="site-footer-thumb mb-4 pb-2">
              <div className="d-flex flex-wrap">
                <a href="#">
                  <img
                    src="images/app-store.png"
                    className="me-3 mb-2 mb-lg-0 img-fluid"
                    alt
                  />
                </a>
                <a href="#">
                  <img src="images/play-store.png" className="img-fluid" alt />
                </a>
              </div>
            </div>
            <h6 className="site-footer-title mb-3">Social</h6>
            <ul className="social-icon">
              <li className="social-icon-item">
                <a href="#" className="social-icon-link bi-instagram" />
              </li>
              <li className="social-icon-item">
                <a href="#" className="social-icon-link bi-twitter" />
              </li>
              <li className="social-icon-item">
                <a href="#" className="social-icon-link bi-whatsapp" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container pt-5">
        <div className="row align-items-center">
          <div className="col-lg-2 col-md-3 col-12">
            <a className="navbar-brand" href="index.html">
              <img
                src="images/pod-talk-logo.png"
                className="logo-image img-fluid"
                alt="templatemo pod talk"
              />
            </a>
          </div>
          <div className="col-lg-7 col-md-9 col-12">
            <ul className="site-footer-links">
              <li className="site-footer-link-item">
                <a href="#" className="site-footer-link">
                  Homepage
                </a>
              </li>
              <li className="site-footer-link-item">
                <a href="#" className="site-footer-link">
                  Browse episodes
                </a>
              </li>
              <li className="site-footer-link-item">
                <a href="#" className="site-footer-link">
                  Help Center
                </a>
              </li>
              <li className="site-footer-link-item">
                <a href="#" className="site-footer-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-12">
            <p className="copyright-text mb-0">Copyright © 2024 7even Anime</p>
          </div>
        </div>
      </div>
    </div>
  );
}
