import React from "react";

export default function Navbar() {
  return (
    <div className="">
      <header class="header_area" >
        <div class="main_men">
          <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container ">
              <a class="navbar-brand logo_h" href="index.html">
                {/* <img src="img/logo.png" alt="Eva" /> */}
                EVA
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <div
                class="collapse navbar-collapse offset "
                id="navbarSupportedContent"
              >
                <ul class="nav navbar-nav menu_nav justify-content-end">
                  <li class="nav-item active">
                    <a class="nav-link" href="index.html">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="about.html">
                      About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="services.html">
                      Services
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="portfolio.html">
                      Portfolio
                    </a>
                  </li>
                  <li class="nav-item submenu dropdown">
                    <a
                      href="#"
                      class="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Pages
                    </a>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <a class="nav-link" href="elements.html">
                          Elements
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="portfolio-details.html">
                          Portfolio Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item submenu dropdown">
                    <a
                      href="#"
                      class="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Blog
                    </a>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <a class="nav-link" href="blog.html">
                          Blog
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="single-blog.html">
                          Blog Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="contact.html">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
