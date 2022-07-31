var currentTime = new Date();
var weirdTime = currentTime;
var specialTime = new Date("2022-07-30");
var myTime = new Date(1993,08,24);
var gamez = [
"2022-07-30",
  "2022-07-31",
  "2022-08-02",
  "2022-08-03",
  "2022-08-04",
  "2022-08-13",
  "2022-08-16",
  "2022-08-17",
  "2022-08-18",
  "2022-08-19",
  "2022-08-20",
  "2022-08-21",
  "2022-08-22",
  "2022-08-23",
  "2022-08-24",
  "2022-08-28"
];

if (specialTime.toDateString() == currentTime.toDateString()) {
document.getElementById("answer").innerHTML = "Yas";
}
else if (currentTime == weirdTime) {
document.getElementById("answer").innerHTML = "Almost lol";         
}
else {
  document.getElementById("answer").innerHTML = "someday";
}

         
