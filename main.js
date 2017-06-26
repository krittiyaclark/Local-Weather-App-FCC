$(document).ready(function() {
var lat;
var lon;
$.getJSON("http://ip-api.com/json", function(location) {
  lat = location.lat;
  lon = location.lon;

  var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=9eb4fe34c90cb7ecf604f1708bc6e08e';

  $.getJSON(api, function(data) {
     var fTemp;
     var cTemp;
     var mTemp;
     var weatherType;
     var city = data.name;
     var tempSwap = true;
     mTemp = data.main.temp;
     fTemp = Math.floor((mTemp*(9/5)-459.67));
     cTemp = Math.floor((mTemp-273));
     weatherType = data.weather[0].description;
     var iconCode = data.weather[0].icon;
     var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";

        $("#icon").html("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png' alt='Icon current weather.'>");
        $("#city").html(city);
        $("#weatherType").html(weatherType);
        $("#temp").html(fTemp + " &#8457;");

        $("#temp").click(function() {
          if(tempSwap === false) {
             $("#temp").html(fTemp + " &#8457;");
             tempSwap=true;
          } else {
            $("#temp").html(cTemp + " &#8451;");
            tempSwap=false;
          }
        });

     });

});

});
