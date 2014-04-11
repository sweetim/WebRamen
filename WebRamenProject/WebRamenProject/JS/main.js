var tab1stdata = $("nav ul").children().children().attr("href");
$(".tabContent").hide();
$(tab1stdata).show();
$("nav li a").click(function () {
    var tabItem = $(this).attr("href");
    $(".tabContent").hide();
    $(tabItem).fadeIn();
});


$(window).resize(function () {
    if ($(window).width() < 1000) {
        $("body").css("max-width", "100%");
    } else {
        $("body").css("max-width", "80%");
    }
});

/*function initializeGMap() {
    var map_canvas = document.getElementsByClassName('map_canvas');
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
}*/