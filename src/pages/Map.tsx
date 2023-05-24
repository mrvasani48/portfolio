import { useEffect } from "react";

const Map = () => {
  const longitude = 72.51451;
  const latitude = 23.04016;

  useEffect(() => {
    L.mapquest.key = "HswJpMlVQdycSa4JS9FiZfWjbxwCaRIF";
    const mapId = document.getElementById("map");
    if (mapId) {
      var map = L.mapquest.map("map", {
        center: [latitude, longitude],
        layers: L.mapquest.tileLayer("map"),
        zoom: 12,
      });
      L.mapquest.directions().route({
        start: "Iskcon Cross Road Ahmedabad, Gujarat, 380015.",
        end: "Shivranjani Cross Road, Bimanagar, Satellite , Ahmadabad,Gujarat, India, 380015 ",
      });
      map.addControl(L.mapquest.control());
      map.addLayer(L.mapquest.trafficLayer());
      map.addLayer(L.mapquest.incidentsLayer());
      map.addLayer(L.mapquest.marketsLayer());
    }
  }, []);
  return <div id="map" style={{ width: "100%", height: "100vh" }}></div>;
};

export default Map;
