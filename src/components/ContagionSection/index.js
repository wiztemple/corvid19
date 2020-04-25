import React from "react";

// style
import "./ContagionSection.css";

// svgs/images
import VirusTransmission from "../../static/svg/virustransmission.svg";
import RedDots from "../../static/svg/reddots.svg";
import Circle from "../../static/svg/circle.svg";
import Circle1 from "../../static/svg/circle1.svg";

const ContagionSection = () => {
  return (
    <section class="section contagion-section" id="contagion-section">
      <div class="container">
        <div class="columns">
          <div class="col-6">
            <div class="contagion-image-section">
              <img
                src={VirusTransmission}
                alt="virus transmission illustratiom"
              />
              <div class="contagion-aesthetics-dots">
                <img src={RedDots} alt="aesthetics illustration" />
              </div>
              <div class="contagion-aesthetics-blue-circle">
                <img src={Circle} alt="aesthetics illustration" />
              </div>
              <div class="contagion-aesthetics-red-circle">
                <img src={Circle1} alt="aesthetics illustration" />
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="contagion-desc-section">
              <h1 class="bold-text">2</h1>
              <h1 class="h2">Contagion</h1>
              <p>
                Coronavirus disease spreads primarily through contact with an
                infected person when they cough or sneeze. It also spreads when
                a person touches a surface or object that has the virus on it,
                then touches their eyes, nose, or mouth.
              </p>
              <div class="flex-start mt-50">
                <button
                  class="button button-blue button-click ripple"
                  data-target="3"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContagionSection;
