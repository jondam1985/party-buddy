
//This functions sets the map height and width given the screen size
var mapSize = function () {
    let screenWidth = screen.width;
    let width = 0;

    if (screenWidth < 300) {
        width = 250;
    }
    else if (screenWidth < 600) {
        width = 500;
    }
    else {
        width = 600;
    }

    return width;
}


$("#mapGroceries").click(function () {

    //This function gets the user's current location and renders the supermarkets map via iframe
    navigator.geolocation.getCurrentPosition(showPosition);
    $("#mapResult").empty();

    function showPosition(position) {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        let width = mapSize;
        let height = width;

        let url = "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d11546.429218267342!2d" + lon + "!3d" + lat + "!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgroceries!5e0!3m2!1sen!2sca!4v1572813208216!5m2!1sen!2sca"

        let map = $("<iframe>").attr({ "src": url, "width": width, "height": height, "frameborder": "0", "style": "boder:0", "allowfullscreen": "" });
        $("#mapResult").append(map);
    }
})

$("#mapLiquor").click(function () {

    //This function gets the user's current location and renders the liquor map via iframe
    navigator.geolocation.getCurrentPosition(showPosition);
    $("#mapResult").empty();

    function showPosition(position) {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        let width = mapSize;
        let height = width;

        let url = "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d11546.429218267342!2d" + lon + "!3d" + lat + "!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sliquor!5e0!3m2!1sen!2sca!4v1572813208216!5m2!1sen!2sca"

        let map = $("<iframe>").attr({ "src": url, "width": width, "height": height, "frameborder": "0", "style": "boder:0", "allowfullscreen": "" });
        $("#mapResult").append(map);
    }
})

$("#searchBtn").click(function (e) {

    e.preventDefault();
    
    $("#mapResult").empty();

    let width = mapSize;
    let height = width;
    let searchTerm = $("input[name='placeType']:checked").attr("value");
    let searchAddress = encodeURIComponent($("#searchAddress").val());

    let url = "https://maps.google.com/maps?q=" + searchAddress + "%20" + searchTerm + "&t=&z=13&ie=UTF8&iwloc=&output=embed"

    let map = $("<iframe>").attr({ "src": url, "width": width, "height": height, "frameborder": "0", "style": "boder:0", "allowfullscreen": "" });
    $("#mapResult").append(map);
})

