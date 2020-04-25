import React from "react";

// style
import "./Banner.css";
import angle from "../../static/svg/angle.svg";
import angle2 from "../../static/svg/angle2.svg";
import angle3 from "../../static/svg/angle3.svg";
import circle from "../../static/svg/circle.svg";
import circle1 from "../../static/svg/circle1.svg";
import coronavirus from "../../static/svg/coronavirus.svg";
import rectangle from "../../static/svg/rectangle.svg";
import rectangle2 from "../../static/svg/rectangle2.svg";

const Banner = () => {
  return (
    <div className="banner">
      <div class="covid-angle">
        <img src={angle} alt="" />
      </div>
      <div class="covid-angle3">
        <img src={angle3} alt="" />
      </div>
      <div class="covid19-circle">
        <img src={circle} alt="" />
      </div>
      <div class="covid19-circle2">
        <img src={circle1} alt="" />
      </div>
      <div class="covid19-rectangle">
        <img src={rectangle} alt="" />
      </div>
      <div class="covid19-rectangle2">
        <img src={rectangle2} alt="" />
      </div>
      <div class="container">
        <div class="columns">
          <div class="col-5">
            <div>
              <h1 class="covid19-title">Coronavirus</h1>
              <h1 class="covid19-subtitle">(COVID-19)</h1>
              <p class="covid19-text">
                Coronaviruses (CoV) are a large family of viruses that cause
                illness ranging from the common cold to more severe diseases
                such as Middle East Respiratory Syndrome (MERS-CoV) and Severe
                Acute Respiratory Syndrome (SARS-CoV).
              </p>
              <div class="pt-20">
                <button
                  class="button button-outline button-click ripple"
                  data-target="1"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div class="col-7">
            <div class="banner-right">
              <div class="sample-corona-virus-icon">
                <img src={coronavirus} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="covid-angle2">
        <img src={angle2} alt="" />
      </div>
    </div>
  );
};

export default Banner;
