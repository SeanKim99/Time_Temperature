KoreaInfo = document.querySelector(".c-time.korea");
JapanInfo = document.querySelector(".c-time.japan");
LAInfo = document.querySelector(".c-time.la");
NYInfo = document.querySelector(".c-time.ny");
VietnamInfo = document.querySelector(".c-time.vietnam");
RussiaInfo = document.querySelector(".c-time.russia");

koreaColor = document.querySelector(".Korea");
japanColor = document.querySelector(".Japan");
laColor = document.querySelector(".USA_LA");
nyColor = document.querySelector(".USA_NY");
vietnamColor = document.querySelector(".Vietnam");
russiaColor = document.querySelector(".Russia");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const lahours = hours - 17;
  const nyhours = hours - 14;
  const viethours = hours - 2;
  const rushours = hours - 6;
  fixTime(hours, lahours, nyhours, viethours, rushours, minutes, seconds);
  korbackCo(hours);
  labackCo(lahours);
  nybackCo(nyhours);
  vietbackCo(viethours);
  rusbackCo(rushours);
}
function korbackCo(hours) {
  if (hours >= 19 || hours < 6) {
    koreaColor.style.backgroundImage =
      "linear-gradient(#0F2027,#203A43,#2C5364)";
    japanColor.style.backgroundImage =
      "linear-gradient(#0F2027,#203A43,#2C5364)";
  } else if (hours == 6 || hours == 18) {
    koreaColor.style.backgroundImage = "linear-gradient(#f12711,#f5af19)";
    japanColor.style.backgroundImage = "linear-gradient(#f12711,#f5af19)";
  } else {
    koreaColor.style.backgroundImage = "linear-gradient(#00B4DB,#0083B0)";
    japanColor.style.backgroundImage = "linear-gradient(#00B4DB,#0083B0)";
  }
}
function labackCo(lahours) {
  if (lahours >= 19 || lahours < 6) {
    laColor.style.backgroundImage = "linear-gradient(#0F2027,#203A43,#2C5364)";
  } else if (lahours == 6 || lahours == 18) {
    laColor.style.backgroundImage = "linear-gradient(#f12711,#f5af19)";
  } else {
    laColor.style.backgroundImage = "linear-gradient(#00B4DB,#0083B0)";
  }
}
function nybackCo(nyhours) {
  if (nyhours >= 19 || nyhours < 6) {
    nyColor.style.backgroundImage = "linear-gradient(#0F2027,#203A43,#2C5364)";
  } else if (nyhours == 6 || nyhours == 18) {
    nyColor.style.backgroundImage = "linear-gradient(#f12711,#f5af19)";
  } else {
    nyColor.style.backgroundImage = "linear-gradient(#00B4DB,#0083B0)";
  }
}
function vietbackCo(viethours) {
  if (viethours >= 19 || viethours < 6) {
    vietnamColor.style.backgroundImage =
      "linear-gradient(#0F2027,#203A43,#2C5364)";
  } else if (viethours == 6 || viethours == 18) {
    vietnamColor.style.backgroundImage = "linear-gradient(#f12711,#f5af19)";
  } else {
    vietnamColor.style.backgroundImage = "linear-gradient(#00B4DB,#0083B0)";
  }
}
function rusbackCo(rushours) {
  if (rushours >= 19 || rushours < 6) {
    russiaColor.style.backgroundImage =
      "linear-gradient(#0F2027,#203A43,#2C5364)";
  } else if (rushours == 6 || rushours == 18) {
    russiaColor.style.backgroundImage = "linear-gradient(#f12711,#f5af19)";
  } else {
    russiaColor.style.backgroundImage = "linear-gradient(#00B4DB,#0083B0)";
  }
}
function fixTime(
  hours,
  lahours,
  nyhours,
  viethours,
  rushours,
  minutes,
  seconds
) {
  if (lahours < 0) {
    lahours += 24;
  } else if (lahours >= 24) {
    lahours -= 24;
  }
  if (nyhours < 0) {
    nyhours += 24;
  } else if (nyhours >= 24) {
    nyhours -= 24;
  }
  if (viethours < 0) {
    viethours += 24;
  } else if (viethours >= 24) {
    viethours -= 24;
  }
  if (rushours < 0) {
    rushours += 24;
  } else if (rushours >= 24) {
    rushours -= 24;
  }
  setTime(hours, lahours, nyhours, viethours, rushours, minutes, seconds);
}
function setTime(
  hours,
  lahours,
  nyhours,
  viethours,
  rushours,
  minutes,
  seconds
) {
  KoreaInfo.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
  JapanInfo.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
  LAInfo.innerText = `${lahours < 10 ? `0${lahours}` : `${lahours}`}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
  NYInfo.innerText = `${nyhours < 10 ? `0${nyhours}` : nyhours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
  VietnamInfo.innerText = `${viethours < 10 ? `0${viethours}` : viethours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
  RussiaInfo.innerText = `${rushours < 10 ? `0${rushours}` : rushours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}
function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
