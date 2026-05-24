function updateTime() {
  let jakartaDate = document.querySelector("#jakarta .date");
  jakartaDate.innerHTML = moment()
    .tz("Asia/Jakarta")
    .format("ddd, D MMMM YYYY");
  let jakartaTime = document.querySelector("#jakarta .time-display");
  jakartaTime.innerHTML = moment()
    .tz("Asia/Jakarta")
    .format("hh:mm:ss [<small>]A[</small>]");

  let amsterdamDate = document.querySelector("#amsterdam .date");
  amsterdamDate.innerHTML = moment()
    .tz("Europe/Amsterdam")
    .format("ddd, D MMMM YYYY");
  let amsterdamTime = document.querySelector("#amsterdam .time-display");
  amsterdamTime.innerHTML = moment()
    .tz("Europe/Amsterdam")
    .format("hh:mm:ss [<small>]A[</small>]");

  let capeVerdeDate = document.querySelector("#cape-verde .date");
  capeVerdeDate.innerHTML = moment()
    .tz("Atlantic/Cape_Verde")
    .format("ddd, D MMMM YYYY");
  let capeVerdeTime = document.querySelector("#cape-verde .time-display");
  capeVerdeTime.innerHTML = moment()
    .tz("Atlantic/Cape_Verde")
    .format("hh:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);

function updateCityDisplay(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let main = document.querySelector("main");
  main.innerHTML = `<div class="city-display">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${moment().tz(cityTimeZone).format("ddd, D MMMM YYYY")}</div>
          </div>
          <div class="time-display">${moment().tz(cityTimeZone).format("hh:mm [<small>]A[</small>]")}</div>
        </div>`;
}

let citySelect = document.querySelector("#city-select");
citySelect.addEventListener("change", updateCityDisplay);
