const hoursId = document.getElementById("hours");
const minutesId = document.getElementById("minutes");
const secondId = document.getElementById("seconds");
const amPmId = document.getElementById("amPm");

let sunriseImageUrl =
  "https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

let morningImageUrl =
  "https://images.unsplash.com/38/QoR8Bv1S2SEqH6UcSJCA_Tea.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

let afternoonImageUrl =
  "https://plus.unsplash.com/premium_photo-1678559034015-a487448e473b?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

let eveningImageUrl =
  "https://plus.unsplash.com/premium_photo-1674563813726-2de7b98b1f3e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

let nightImageUrl =
  "https://images.unsplash.com/photo-1682688759157-57988e10ffa8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

let time = new Date();

if (time.getHours() >= 19 && time.getHours <= 5) {
  document.body.style.backgroundImage = `url(${nightImageUrl})`;
} else if (time.getHours() >= 16 && time.getHours < 19) {
  document.body.style.backgroundImage = `url(${eveningImageUrl})`;
} else if (time.getHours() >= 12 && time.getHours < 16) {
  document.body.style.backgroundImage = `url(${afternoonImageUrl})`;
} else if (time.getHours() >= 8 && time.getHours < 12) {
  document.body.style.backgroundImage = `url(${morningImageUrl})`;
} else {
  document.body.style.backgroundImage = `url(${sunriseImageUrl})`;
}

function updateClock() {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  let amPm = "AM";

  if (hours >= 12) {
    hours = hours - 12;
    amPm = "PM";
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  hoursId.innerText = hours;
  minutesId.innerText = minutes;
  secondId.innerText = seconds;
  amPmId.innerText = amPm;
}

setInterval(() => {
  updateClock();
  console.log(new Date());
}, 1000);
