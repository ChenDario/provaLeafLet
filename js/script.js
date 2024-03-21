let map = L.map('map').setView([43.824083, 11.137558], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker([43.824083, 11.137558]).addTo(map);

marker.bindPopup("This is my home address.").openPopup();
