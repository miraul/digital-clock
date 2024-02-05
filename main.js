function getTime() {
  let now = new Date();

  hour = now.getHours().toString().padStart(2, "0");
  minute = now.getMinutes().toString().padStart(2, "0");
  second = now.getSeconds().toString().padStart(2, "0");

  document.getElementById("hour").innerText = hour;
  document.getElementById("minute").innerText = minute;
  document.getElementById("second").innerText = second;

  day = now.getDate().toString().padStart(2, "0");
  month = (now.getMonth() + 1).toString().padStart(2, "0");
  year = now.getFullYear();

  document.getElementById("date").innerText =
    day + " / " + month + " / " + year;
}

setInterval(getTime, 1000);
