
var tabcity2 = document.querySelectorAll('.city')

for( var i = 0 ; i<tabcity2.length ; i++){
    console.log(tabcity2[i].dataset.lat)
    console.log(tabcity2[i].dataset.lon)
    console.log(tabcity2[i].dataset.name)

}









var mymap = L.map('mapid').setView([48.866667, 2.333333], 10);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZW56b3JhZyIsImEiOiJja3ZjNjBtNjkwZGhsMnFtcGY4N2ttODUyIn0.59D-sVu6azY4t-wuK2BG6A'
}).addTo(mymap);

for( var i = 0 ; i<tabcity2.length ; i++){
    var marker = L.marker([tabcity2[i].dataset.lat, tabcity2[i].dataset.lon]).addTo(mymap);
    marker.bindPopup(`<b>${tabcity2[i].dataset.name}</b>`).openPopup();


}




