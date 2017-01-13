// Shops Map
function initShopMap(mapId, center, zoom, places) {
    var mapOptions = {
        center: new google.maps.LatLng(center[0], center[1]),
        zoom: zoom,
        zoomControl: true,
        scrollwheel: false,
        streetViewControl: false,
        overviewMapControl: false,
        panControl: false,
        mapTypeControl: false,
        draggable: true,
        styles: [{"featureType":"administrative","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-100},{"lightness":"50"},{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"lightness":"30"}]},{"featureType":"road.local","elementType":"all","stylers":[{"lightness":"40"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]},{"featureType":"water","elementType":"labels","stylers":[{"lightness":-25},{"saturation":-100}]}]
    };
    var map = new google.maps.Map(document.querySelector(mapId), mapOptions);
    /*var image = new google.maps.MarkerImage('img/marker.png',
        null,
        new google.maps.Point(0, 0),
        new google.maps.Point(20, 56)
    );
    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(coords[0], coords[1]),
        title: 'MasterJeans',
        icon: image
    });*/
    places.forEach(function (place) {
        var labelText = '<a href="' + place.url + '" class="shops-map__item"><span class="shops-map__item-icon fa fa-shopping-bag"></span><span class="shops-map__item-label">' + place.title + '</span></a>';

        var myOptions = {
            content: labelText,
            boxStyle: {
                width: "auto",
                height: "auto"
            },
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-11, -7),
            position: new google.maps.LatLng(place.coords[0], place.coords[1]),
            closeBoxURL: "",
            isHidden: false,
            pane: "floatPane",
            enableEventPropagation: true//,
            //domready: tool(i)
        };

        var ibLabel = new InfoBox(myOptions);
        ibLabel.open(map);
    });
}
$(function () {
    if ($('.shops-map').length) {
        var dataShopsMap = $('.shops-map').data('map');
        initShopMap('.shops-map', dataShopsMap.center, dataShopsMap.zoom, dataShopsMap.places);
    }
});