import React from "react";

export default function About() {
  return (
    <section class="about_area section_gap">
      <div class="container">
        <div class="row justify-content-start align-items-center">
          <div class="col-lg-5">
            <div class="about_img">
              <img class="" src="img/about-us.png" alt="profile" />
            </div>
          </div>

          <div class="offset-lg-1 col-lg-5">
            <div class="main_title text-left">
              <h2>
                <br />
                About <br />
                me
              </h2>
              <p>
                Hello, Everyone I am Tambua Evaristus. I am a professional web
                and mobile developer. I have working experience in the following
                - ReactJs, NextJs, React Native, TailwindCss , Bootstrap 5 for
                Frontend and PHP Laravel, NodeJs, Firebase,Java SpringBoot for
                Backend. Clients satisfaction is my highest priority.
              </p>
              <a class="primary_btn" href="#">
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
