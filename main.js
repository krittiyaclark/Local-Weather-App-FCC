$(document).ready(function() {
var lat;
var lon;
$get.JSON("http://ip-api.com/json", function(location) {

  var api = "http://api.openweathermap.org/data/2.5/weather?id=5235024&appid=9eb4fe34c90cb7ecf604f1708bc6e08e";

  $.getJSON(api, function(data) {
        console.log(data.coord.lon);

        $("#city").html(city);
     });
});


});
