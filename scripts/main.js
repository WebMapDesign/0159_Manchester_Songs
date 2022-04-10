let map = L.map("map", {
  fullScreenControl: false,
}).setView([53.465, -2.255], 13);

let tilesGoogleMapsStreets = L.gridLayer
  .googleMutant({
    styles: styleGoogleMaps,
    maxZoom: 24,
    type: "roadmap",
  })
  .addTo(map);

function onEachFeaturePoint(feature, layer) {
  let popupContent =
    '<p class="popup-title">Postcode District: ' +
    feature.properties.PostDist.toUpperCase() +
    "</p>" +
    '<audio controls><source src="audio/audio_' +
    feature.properties.PostDist +
    '.mp3" type="audio/mpeg"></audio>';

  layer.bindPopup(popupContent, { closeButton: true });
}

let layerPoints = L.geoJson(geojsonPoints, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, {
      color: "#ffffff",
      fillColor: "#fda7a7",
      fillOpacity: 1,
      opacity: 1,
      radius: 10,
      weight: 3,
    });
  },
  onEachFeature: onEachFeaturePoint,
});
layerPoints.addTo(map);
