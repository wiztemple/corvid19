import React from "react";

// utils
// import { formatNumbersWithCommas } from "../../utils/index";
// style
import "./StatsSection.css";

const StatsSummary = ({ globalStats }) => {
  return (
    <div className="columns mt-60">
      <div className="col-3">
        <div class="realtime-data-card">
          <div>
            <h1 class="realtime-data-card-title">Aggregated Confirmed</h1>
            <div class="flex-center">
              <div class="realtime-data-card-count">
                <span class="realtime-data-card-count-span">
                  {globalStats.TotalConfirmed}
                </span>
                <span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.1556 6.14885L5.96962 0.172286C5.92275 0.118206 5.86479 0.0748342 5.79969 0.045109C5.73458 0.0153839 5.66385 0 5.59228 0C5.52071 0 5.44998 0.0153839 5.38487 0.045109C5.31977 0.0748342 5.26182 0.118206 5.21494 0.172286L0.0305631 6.14885C0.014897 6.16686 0.00473901 6.189 0.00129937 6.21263C-0.00214026 6.23625 0.00128332 6.26037 0.0111623 6.2821C0.0210412 6.30383 0.0369592 6.32227 0.0570202 6.33521C0.0770811 6.34815 0.10044 6.35506 0.124313 6.3551H1.38994C1.46181 6.3551 1.53056 6.32385 1.579 6.26916L4.99931 2.32697V11.1254C4.99931 11.1942 5.05556 11.2504 5.12431 11.2504H6.06181C6.13056 11.2504 6.18681 11.1942 6.18681 11.1254V2.32697L9.60713 6.26916C9.654 6.32385 9.72275 6.3551 9.79619 6.3551H11.0618C11.1681 6.3551 11.2259 6.2301 11.1556 6.14885Z"
                      fill="#da242d"
                    />
                  </svg>
                </span>
                <span class="realtime-data-card-count-diff negative-color">
                  {" "}
                  {globalStats.NewConfirmed}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="realtime-data-card">
          <div>
            <h1 class="realtime-data-card-title">Active</h1>
            <div class="flex-center">
              <div class="realtime-data-card-count">
                <span class="realtime-data-card-count-span">
                  {globalStats.TotalConfirmed -
                    (globalStats.TotalRecovered + globalStats.TotalDeaths)}
                </span>
                <span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.1556 6.14885L5.96962 0.172286C5.92275 0.118206 5.86479 0.0748342 5.79969 0.045109C5.73458 0.0153839 5.66385 0 5.59228 0C5.52071 0 5.44998 0.0153839 5.38487 0.045109C5.31977 0.0748342 5.26182 0.118206 5.21494 0.172286L0.0305631 6.14885C0.014897 6.16686 0.00473901 6.189 0.00129937 6.21263C-0.00214026 6.23625 0.00128332 6.26037 0.0111623 6.2821C0.0210412 6.30383 0.0369592 6.32227 0.0570202 6.33521C0.0770811 6.34815 0.10044 6.35506 0.124313 6.3551H1.38994C1.46181 6.3551 1.53056 6.32385 1.579 6.26916L4.99931 2.32697V11.1254C4.99931 11.1942 5.05556 11.2504 5.12431 11.2504H6.06181C6.13056 11.2504 6.18681 11.1942 6.18681 11.1254V2.32697L9.60713 6.26916C9.654 6.32385 9.72275 6.3551 9.79619 6.3551H11.0618C11.1681 6.3551 11.2259 6.2301 11.1556 6.14885Z"
                      fill="#da242d"
                    />
                  </svg>
                </span>
                <span class="realtime-data-card-count-diff negative-color">
                  {" "}
                  2,300
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="realtime-data-card">
          <div>
            <h1 class="realtime-data-card-title">Recovered</h1>
            <div class="flex-center">
              <div class="realtime-data-card-count">
                <span class="realtime-data-card-count-span">
                  {globalStats.TotalRecovered}
                </span>
                <span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.1556 6.14885L5.96962 0.172286C5.92275 0.118206 5.86479 0.0748342 5.79969 0.045109C5.73458 0.0153839 5.66385 0 5.59228 0C5.52071 0 5.44998 0.0153839 5.38487 0.045109C5.31977 0.0748342 5.26182 0.118206 5.21494 0.172286L0.0305631 6.14885C0.014897 6.16686 0.00473901 6.189 0.00129937 6.21263C-0.00214026 6.23625 0.00128332 6.26037 0.0111623 6.2821C0.0210412 6.30383 0.0369592 6.32227 0.0570202 6.33521C0.0770811 6.34815 0.10044 6.35506 0.124313 6.3551H1.38994C1.46181 6.3551 1.53056 6.32385 1.579 6.26916L4.99931 2.32697V11.1254C4.99931 11.1942 5.05556 11.2504 5.12431 11.2504H6.06181C6.13056 11.2504 6.18681 11.1942 6.18681 11.1254V2.32697L9.60713 6.26916C9.654 6.32385 9.72275 6.3551 9.79619 6.3551H11.0618C11.1681 6.3551 11.2259 6.2301 11.1556 6.14885Z"
                      fill="#07AA8D"
                    />
                  </svg>
                </span>
                <span class="realtime-data-card-count-diff positive-color">
                  {" "}
                  2,300
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="realtime-data-card">
          <div>
            <h1 class="realtime-data-card-title">Death</h1>
            <div class="flex-center">
              <div class="realtime-data-card-count">
                <span class="realtime-data-card-count-span">
                  {globalStats.TotalDeaths}
                </span>
                <span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.1556 6.14885L5.96962 0.172286C5.92275 0.118206 5.86479 0.0748342 5.79969 0.045109C5.73458 0.0153839 5.66385 0 5.59228 0C5.52071 0 5.44998 0.0153839 5.38487 0.045109C5.31977 0.0748342 5.26182 0.118206 5.21494 0.172286L0.0305631 6.14885C0.014897 6.16686 0.00473901 6.189 0.00129937 6.21263C-0.00214026 6.23625 0.00128332 6.26037 0.0111623 6.2821C0.0210412 6.30383 0.0369592 6.32227 0.0570202 6.33521C0.0770811 6.34815 0.10044 6.35506 0.124313 6.3551H1.38994C1.46181 6.3551 1.53056 6.32385 1.579 6.26916L4.99931 2.32697V11.1254C4.99931 11.1942 5.05556 11.2504 5.12431 11.2504H6.06181C6.13056 11.2504 6.18681 11.1942 6.18681 11.1254V2.32697L9.60713 6.26916C9.654 6.32385 9.72275 6.3551 9.79619 6.3551H11.0618C11.1681 6.3551 11.2259 6.2301 11.1556 6.14885Z"
                      fill="#da242d"
                    />
                  </svg>
                </span>
                <span class="realtime-data-card-count-diff negative-color">
                  {" "}
                  {globalStats.NewDeaths}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSummary;
