import React from "react";

// style
import "./SymptomsSection.css";

// svgs
import angle4 from "../../static/svg/angle4.svg";
import coughingSvg from "../../static/svg/coughing.svg";

import coughSymptomsIllustration from "../../static/images/iconfinder___cough_coughing_symptom_5925233.png";
import feverIllustration from "../../static/images/iconfinder___fever_high_temperature_5925230.png";
import fatigueIllustration from "../../static/images/iconfinder___tiredness_tired_fatigue_5925227.png";
import musclePainsIllustraion from "../../static/images/iconfinder___pain_muscle_body_5925229.png";

const SymptomsSection = () => {
  return (
    <section className="section symptoms-section" id="symptoms-section">
      <div className="symptoms-angle-decorator">
        <img src={angle4} alt="rectangle" />
      </div>
      <div class="container">
        <div class="columns">
          <div class="col-7">
            <div class="symptoms">
              <h1 class="bold-text">1</h1>
              <h1 class="h2">Symptoms</h1>
              <p>
                People may be sick with the virus for 1 to 14 days before
                developing symptoms. The most common symptoms of coronavirus
                disease (COVID-19) are fever, tiredness, and dry cough. Most
                people (about 80%) recover from the disease without needing
                special treatment. More rarely, the disease can be serious and
                even fatal. Older people, and people with other medical
                conditions (such as asthma, diabetes, or heart disease), may be
                more vulnerable to becoming severely ill.
              </p>
              <div class="space-between pt-20">
                <div class="box-shadowed-circle">
                  <div class="illustration-wrapper">
                    <div class="illustration-icon">
                      <img
                        src={coughSymptomsIllustration}
                        alt="coughing/sneezing illustration"
                      />
                    </div>
                    <span>Coughing/Sneezing</span>
                  </div>
                </div>
                <div class="box-shadowed-circle">
                  <div class="illustration-wrapper">
                    <div class="illustration-icon">
                      <img src={feverIllustration} alt="fever illustration" />
                    </div>
                    <span>Fever</span>
                  </div>
                </div>
                <div class="box-shadowed-circle">
                  <div class="illustration-wrapper">
                    <div class="illustration-icon">
                      <img
                        src={fatigueIllustration}
                        alt="tiredness illustration"
                      />
                    </div>
                    <span>Tiredness</span>
                  </div>
                </div>
                <div class="box-shadowed-circle">
                  <div class="illustration-wrapper">
                    <div class="illustration-icon">
                      <img
                        src={musclePainsIllustraion}
                        alt="coughing/sneezing illustration"
                      />
                    </div>
                    <span>Body/Muscle Pains</span>
                  </div>
                </div>
              </div>
              <div class="flex-start mt-50">
                <button
                  class="button button-blue button-click ripple"
                  data-target="2"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div class="col-5">
            <div class="symptom-image-section">
              <div class="symptoms-svg">
                <img src={coughingSvg} alt="cough icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SymptomsSection;
