var ramenTop = new Array();
ramenTop[0] = {
    name: "michi",
    info: "Tsukemen",
    lat: 35.7178, long: 139.7435
};

ramenTop[1] = {
    name: "ittou",
    info: "ramen",
    lat: 35.7178, long: 139.7434
};

ramenTop[2] = {
    name: "torisoba",
    info: "mutahiro nigo ten ramen",
    lat: 35.7178, long: 139.7433
};

ramenTop[3] = {
    name: "mendokoro",
    info: "mendokoro honda",
    lat: 35.7178, long: 139.6432
};

ramenTop[4] = {
    name: "gonoshin",
    info: "gonoshin seisakujo",
    lat: 35.7178, long: 139.7431
};

var marker;
var map;

google.maps.event.addDomListener(window, 'load', initializeGMap);

$("#ramen_top_restaurant li").click(function () {       
    var newLatLng = new google.maps.LatLng(ramenTop[this.id].lat, ramenTop[this.id].long);
    marker.setPosition(newLatLng);
    map.setCenter(newLatLng);

    $("#ramen_top_restaurant_info").text(ramenTop[this.id].info);
});

function initializeGMap() {
    var map_canvas = document.getElementById('map_canvas');
    var map_options = {
        center: new google.maps.LatLng(ramenTop[0].lat, ramenTop[0].long),
        disableDefaultUI: true,
        zoom: 18,
    }
    map = new google.maps.Map(map_canvas, map_options);

    var ramen1location = new google.maps.LatLng(ramenTop[0].lat, ramenTop[0].long);
    marker = new google.maps.Marker({
        position: ramen1location,
        map: map,
        title: "Hello World!"
    });

    var contentString = "東京都文京区小石川五丁目41番10号 住友不動産小石川ビル";

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });
}