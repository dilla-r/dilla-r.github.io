var currentTime = new Date();
var weirdTime = currentTime;
var specialTime = new Date("2022-07-31");
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


    document.write(specialTime.toLocaleDateString());
    document.write(currentTime.toLocaleDateString());
  document.write(specialTime.toDateString()) ;
  document.write(currentTime.toDateString());


if (specialTime.toLocaleDateString() == currentTime.toLocaleDateString()) {
document.getElementById("answer").innerHTML = "Yas";
    document.write(specialTime.toLocaleDateString());
  document.write(specialTime.toDateString()) ;
  document.write(currentTime.toDateString());
    document.write(currentTime.toLocaleDateString());
}
else {
document.write(specialTime.toDateString()) 
  document.write(currentTime.toDateString())  
    document.write(currentTime) 
    document.write(specialTime) 
  document.write(specialTime.toLocaleDateString())
}

         
