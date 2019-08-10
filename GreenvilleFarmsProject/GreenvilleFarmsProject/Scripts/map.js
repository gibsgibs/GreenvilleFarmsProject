﻿/*
 * This script will add the map centered at Greenville Farms,
 * with special Tractor Icon, with a content box that appears when
 * the icon is clicked on.
 */ 

var map;
function initMap() {
    // The locations
    var farm = { lat: 45.592590, lng: -123.125160 };
    var fruit = { lat: 45.624370, lng: -123.083850 };

    var lat = (45.592590 + 45.624370) / 2;
    var lng = (-123.125160 + -123.083850) / 2;
    var center = { lat: lat, lng: lng };

    // The map, centered at the farm
    var map = new google.maps.Map(document.getElementById('map'), { zoom: 11, center: center });

    // Get the tractor icon
    var farmIcon = "/Content/Images/tractor.svg";
    var fruitIcon = "/Content/Images/American-Barn.svg";

    // The marker, positioned at the farm, with the tractor icon.
    var farmMarker = new google.maps.Marker({
        position: farm,
        map: map,
        icon: farmIcon,
        title: 'Greenville Farms (Oregon)'
    });
    var fruitMarker = new google.maps.Marker({
        position: fruit,
        map: map,
        icon: fruitIcon,
        title: 'Maller\'s Mini Barn'
    });

    // The html for the 'popup' box
    var farmString = '<div class="card border-warning">' +
        '<div class="card-body" style="text-align:center;">' +
        '<h4>Greenville Farms</h4>' +
        '<h7>43500 NW Greenville Rd, Forest Grove, OR 97116</h7>' +
        '<br>' +
        '<a href="https://goo.gl/maps/RGwWQKeWBCwYdLaCA" target="_blank">Get Directions</a>'
    '</div>' +
        '</div>';
    var fruitString = '<div class="card border-warning">' +
        '<div class="card-body" style="text-align:center;">' +
        '<h4>Maller\'s Mini Barn</h4>' +
        '<h7>HWY 26 At NW Maller Rd, 97106 Banks, United States</h7>' +
        '<br>' +
        '<a href="https://goo.gl/maps/EmZq13hhyQrhkdRn6" target="_blank">Get Directions</a>'
    '</div>' +
        '</div>';

    // The 'popup' box
    var farmWindow = new google.maps.InfoWindow({
        content: farmString
    });
    var fruitWindow = new google.maps.InfoWindow({
        content: fruitString
    });

    // Add listener for when a user clicks the marker.
    farmMarker.addListener('click', function () {
        farmWindow.open(map, farmMarker);
    });
    fruitMarker.addListener('click', function () {
        fruitWindow.open(map, fruitMarker);
    });
}