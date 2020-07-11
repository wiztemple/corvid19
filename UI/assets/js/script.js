document.addEventListener(
  "DOMContentLoaded",
  () => {
    let navBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0,
    );
    if (navBurgers.length > 0) {
      navBurgers.forEach((element) => {
        element.addEventListener(
          "click",
          () => {
            let target = element.dataset.target;
            let targetId = document.getElementById(target);
            element.classList.toggle("active");
            targetId.classList.toggle("active");
          },
          null,
        );
      });
    }
  },
  null,
);

// modal
const modals = document.querySelectorAll(".modal");
const buttons = document.querySelectorAll(".button-click");
const cancelButtons = document.querySelectorAll(".close-modal");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = [...modals].find(
      (modal) => modal.dataset.id === button.dataset.target,
    );
    modal.style.display = "block";
  });
});

cancelButtons.forEach((cancelButton) => {
  cancelButton.addEventListener("click", () => {
    modals.forEach((modal) => {
      modal.style.display = "none";
    });
  });
});
// dismiss modal when the window is clicked
document.addEventListener("click", (e) => {
  modals.forEach((modal) => {
    if (modal.style.display === "block") {
      if (e.target.className === "modal") {
        modal.style.display = "none";
      }
    }
  });
});

const BASE_URL = "https://api.covid19api.com";
const datacolumns = document.querySelector(".dataColumns");
const countryData = document.querySelector(".covid19-search-result");
const selectField = document.querySelector(".select-field");
const fetchDataSummary = async () => {
  let response = await fetch(`${BASE_URL}/summary`);
  let jsonResponse = await response.json();
  datacolumns.innerHTML = `
  <div class="col-2">
  <div class="realtime-data-card">
    <div>
      <h1 class="realtime-data-card-title">New Confirmed</h1>
      <div class="flex-center">
        <div class="realtime-data-card-count">
          <span class="realtime-data-card-count-span">${jsonResponse.Global.NewConfirmed.toLocaleString()}</span>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="col-2">
  <div class="realtime-data-card">
    <div>
      <h1 class="realtime-data-card-title">Total Confirmed</h1>
      <div class="flex-center">
        <div class="realtime-data-card-count">
          <span class="realtime-data-card-count-span">${jsonResponse.Global.TotalConfirmed.toLocaleString()}</span>

        </div>
      </div>
    </div>
  </div>
</div>
<div class="col-2">
  <div class="realtime-data-card">
    <div>
      <h1 class="realtime-data-card-title">New Deaths</h1>
      <div class="flex-center">
        <div class="realtime-data-card-count">
          <span class="realtime-data-card-count-span red-10">${jsonResponse.Global.NewDeaths.toLocaleString()}</span>

        </div>
      </div>
    </div>
  </div>
</div>
<div class="col-2">
  <div class="realtime-data-card">
    <div>
      <h1 class="realtime-data-card-title">Total Deaths</h1>
      <div class="flex-center">
        <div class="realtime-data-card-count">
          <span class="realtime-data-card-count-span red-10">${jsonResponse.Global.TotalDeaths.toLocaleString()}</span>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="col-2">
  <div class="realtime-data-card">
    <div>
      <h1 class="realtime-data-card-title">New Recovered</h1>
      <div class="flex-center">
        <div class="realtime-data-card-count">
          <span class="realtime-data-card-count-span green-10">${jsonResponse.Global.NewRecovered.toLocaleString()}</span>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="col-2">
  <div class="realtime-data-card">
    <div>
      <h1 class="realtime-data-card-title">Total Recovered</h1>
      <div class="flex-center">
        <div class="realtime-data-card-count">
          <span class="realtime-data-card-count-span">${jsonResponse.Global.TotalRecovered.toLocaleString()}</span>

        </div>
      </div>
    </div>
  </div>
</div>
  `;
};
const fetchCountryData = async () => {
  let response = await fetch(`${BASE_URL}/summary`);
  let jsonResponse = await response.json();
  jsonResponse.Countries.map((singleCountryData) => {
    countryData.innerHTML += `
    <a href="${singleCountryData.Country}" class="covid19-search-result-item ripple">
      <div class="space-between align-center">
        <div class="flex-center align-center">
          <span class="country-flag">
            
          </span>
          <span class="country-name">
            ${singleCountryData.Country}
          </span>
        </div>
        <div class="country-cases-total">
          ${singleCountryData.TotalConfirmed}
        </div>
      </div>
    </a>
    `;
  });
};
const displaySelectCountry = async () => {
  let response = await fetch(`${BASE_URL}/summary`);
  let jsonResponse = await response.json();
  jsonResponse.Countries.map((country) => {
    selectField.innerHTML += `
      <option>${country.Country}</option>
    `;
  });
};
// const optionSelected = async (e) => {
//   const selected = e.target.value;
//   selectField.addEventListener('change', (event) => {
//     const result = document.querySelector('.result');
//     result = await fetch(`${BASE_URL}/summary`);
//     result.textContent = `You like ${event.target.value}`;
//   });
// };
fetchDataSummary();
fetchCountryData();
displaySelectCountry();
