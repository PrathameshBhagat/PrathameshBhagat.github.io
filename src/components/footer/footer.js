import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4 pb-2 mt-5">
      <div className="container">
        <div className="row">

          {/* About */}
          <div className="col-md-4 mb-3">
            <h5>My App</h5>
            <p>
              This is a simple footer built with Bootstrap in React.
            </p>
          </div>

          {/* Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-3">
            <h5>Contact</h5>
            <p>Email: example@mail.com</p>
            <p>Phone: +91 12345 67890</p>
          </div>

        </div>

        <hr className="bg-light" />

        <div className="text-center">
          <p className="mb-0">
            © {new Date().getFullYear()} My App. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;