var currentTime = fix_time_zones_local(new Date());
var weirdTime = currentTime;
var specialTime = "8-02-2022";
var gamez = [
"2022-07-30",
  "2022-07-31",
 // '2022-08-01',
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
// Assumes it is UTC if it is 01 for date, but assumes local date if it is just 1 without the zero for the date. Very confusing lol
document.write(currentTime.toLocaleDateString('en-US'));
document.write(currentTime.toLocaleDateString());
document.write(specialTime);

function fix_time_zones_local(date_object) { // Fixes it so its in UTC correctly lol
  const offset = date_object.getTimezoneOffset()
  var utc = date_object.getTime() + (offset * 60000);
  // This bit is a bit weird. basically gets current time, converts it to UTC, and adds offset so its in right TZ
  return(new Date(utc));
};

function compare_dates(d1, d2){ // prolly isn't required to be this complicated. just checks the date.
return(
d1.getFullYear() === d2.getFullYear() &&
d1.getMonth() === d2.getMonth() &&
d1.getDate() === d2.getDate() );
};

function is_game_day(currentTime, dateList){
  // function that iterates through the gamez list and runs compare_dates(fix_time_zones_local(x)) for every x in gamez
  var is_game_day = false;
  for(const date of dateList){
    if (compare_dates(currentTime, fix_time_zones_local(new Date(date))) ){
      var is_game_day = true;
      console.log('true');
      console.log(date);
    };
  };
  return(is_game_day)
};
//compare_dates(currentTime, new Date(specialTime));

// Async Function that loads json from NFL tracker website 
// Uses that to async update the page depending on the answer it gets 
const DateUtc = fetch("https://fixturedownload.com/feed/json/nfl-2022/pittsburgh-steelers")
  .then((response) => response.json())
  .then((DateUtc) => {
    return DateUtc;
  });

const gameDayAsync = async () => {
  const a = await DateUtc;
  var gamelist =  a.map(function(item) {
    return item.DateUtc.substring(0,10)
  });
  if (is_game_day(currentTime, gamelist)) {
    document.getElementById("answer").innerHTML = "Yas";
  
    }
    else {
      document.getElementById("answer").innerHTML = "No";
    };

  console.log(gamelist);
};

gameDayAsync();
