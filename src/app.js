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
}

updateTime();
setInterval(updateTime, 1000);
