import React from "react";

export default function Services() {
  return (
    <div>
      <section class="features_area">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
              <div class="main_title">
                <h2>service offers </h2>
                <p>
                  Below are a list of programing languages i can confidently
                  work with.
                </p>
              </div>
            </div>
          </div>
          <div class="row feature_inner">
            <div class="col-lg-3 col-md-6">
              <div class="feature_item">
                <img src="img/services/s1.png" alt="" />
                <h4>Web <br/> Development</h4>
                <p>
                  Build and maintain web sites and web applications with advanced technologies.
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="feature_item">
                <img src="img/services/s2.png" alt="" />
                <h4>Mobile App Development</h4>
                <p>
                  Build mobile applications for both android and ios phones
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="feature_item">
                <img src="img/services/s3.png" alt="" />
                <h4>Software Coach</h4>
                <p>
                  Skilled enough to coach and mentor growing developers to an intermediate stage in their carrier
                </p>
              </div>
            </div>
            {/* service 4 */}
            <div class="col-lg-3 col-md-6">
              <div class="feature_item">
                <img src="img/services/s4.png" alt="" />
                <h4>Sound Engineering</h4>
                <p>
                  A proffesional sound engin, can produce the best out of any sound equipment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
