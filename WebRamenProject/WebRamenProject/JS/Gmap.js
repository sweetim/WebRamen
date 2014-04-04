function initialize() {
    var map_canvas = document.getElementById('map_canvas');
    var map_options = {
        center: new google.maps.LatLng(35.7178, 139.7435),
        disableDefaultUI: true,
        zoom: 18,
    }
    var map = new google.maps.Map(map_canvas, map_options);

    var ramen1location = new google.maps.LatLng(35.7178, 139.7435);
    var marker = new google.maps.Marker({
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

google.maps.event.addDomListener(window, 'load', initialize);