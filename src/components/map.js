let mComponent = document.createElement('div');

mComponent.id = 'map';
mComponent.className = 'map';
document.querySelector('.home-map').appendChild(mComponent);
const map = new maplibregl.Map({
    container: 'map',
    style: 'https://demotiles.maplibre.org/style.json',
    center: [-122.431, 37.7733],
    zoom: 3
});
const markerMaker = (long, lat, color, name) => {
    if (name === "Hong Kong") {
        new maplibregl.Marker({
                color,
            }).setLngLat([long, lat]).setPopup(new maplibregl.Popup().setHTML(`<div class="map-marked"><h1>${name}</h1><p>Hotel Voyages progressifs at ${name} provides an exquisitely luxurious experience at an unbelievable price!</p><div><img src="public/img/cities/${name}/1.jpg"><img src="public/img/cities/${name}/2.jpg"><img src="public/img/cities/${name}/3.jpg"><img src="public/img/cities/${name}/4.jpg"><img src="public/img/cities/${name}/5.jpg"><img src="public/img/cities/${name}/6.jpg"></div></div>`))
            .addTo(map);
    } else {
        new maplibregl.Marker({
                color,
            }).setLngLat([long, lat]).setPopup(new maplibregl.Popup().setHTML(`<div class="map-marked"><h1>${name}</h1><p>Hotel Voyages progressifs at ${name} provides an exquisitely luxurious experience at an unbelievable price!</p><div><img src="public/img/cities/${name}/1.png"><img src="public/img/cities/${name}/2.png"><img src="public/img/cities/${name}/3.png"><img src="public/img/cities/${name}/4.png"><img src="public/img/cities/${name}/5.png"><img src="public/img/cities/${name}/6.png"></div></div>`))
            .addTo(map);
    }

}
markerMaker(-122.431, 37.7733, '#6639F8', 'San Francisco')
markerMaker(-122.3321, 47.6062, '#BEBFC0', 'Seattle')
markerMaker(-115.1398, 36.1699, '#001932', 'Las Vegas')
markerMaker(-122.6784, 45.5152, '#57193B', 'Portland')

markerMaker(-117.8834, 33.8005, '#BE0000', 'Los Angeles')
markerMaker(-73.935, 40.7306, '#48AD85', 'New York')
markerMaker(-71.0589, 42.3601, '#FF9900', 'Boston')
markerMaker(-123.116226, 49.246292, "#AD4848", 'Vancouver')
markerMaker(-79.347015, 43.651070, "#FE0000", 'Toronto')
markerMaker(-0.118092, 51.509865, "#0656A3", 'London')

markerMaker(-6.266155, 53.350140, "#7BFF7A", 'Dublin')
markerMaker(-0.118092, 51.509865, "#0656A3", 'London')
markerMaker(2.352222, 48.856614, "#E80EF5", 'Paris')

markerMaker(13.41053, 52.52437, "#D1AD06", 'Berlin')
markerMaker(10.757933, 59.911491, "#5D835F", 'Oslo')
markerMaker(151.2093, -33.865143, "#0661D1", 'Sydney')
markerMaker(139.6503, 35.6762, "#0601D1", 'Tokyo')
markerMaker(126.9780, 37.5665, "#000001", 'Seoul')
markerMaker(114.1694, 22.3193, "#0656A3", 'Hong Kong')