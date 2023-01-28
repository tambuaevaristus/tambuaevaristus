import React from "react";

export default function Footer() {
  return (
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="footer_top flex-column">
            <div class="footer_logo">
              <a href="#">
                <img src="img/logo.png" alt="" />
              </a>
              <h4>Follow Me</h4>
            </div>
            <div class="footer_social">
              <a href="#">
                <i class="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fa fa-dribbble"></i>
              </a>
              <a href="#">
                <i class="fa fa-behance"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
