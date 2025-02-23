import { gpx } from "@tmcw/togeojson";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef, useState } from "react";

export default function MapboxWidget(props) {
  const mapContainerRef = useRef(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false); // Stato per il lazy loading

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMapLoaded(true); // Carica la mappa solo quando visibile
          observer.disconnect(); // Disattiva l'osservatore dopo il primo caricamento
        }
      },
      { threshold: 0.3 } // La mappa si carica quando il 30% della sezione è visibile
    );

    if (props.sectionRef.current) {
      observer.observe(props.sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const mapboxToken = import.meta.env.VITE_MAPBOX_TOKEN;
    console.log("Mapbox token:", mapboxToken);
    mapboxgl.accessToken = mapboxToken;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      zoom: 13.1,
      center: [11.112982, 44.127848],
      pitch: 60,
      bearing: 80,
      style: "mapbox://styles/morganti/cl3ejq8rc001v14qqos5m3tu8",
    });

    map.addControl(new mapboxgl.FullscreenControl());

    // Funzione per caricare il file GPX
    const loadGPX = async () => {
      try {
        const response = await fetch("/docs/maps.gpx"); // Sostituisci con il tuo percorso file
        const text = await response.text();

        // Converte il GPX in XML
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, "application/xml");

        // Converte XML in GeoJSON
        const geojson = gpx(xml);

        // Aggiunge il tracciato GPX alla mappa
        map.on("load", () => {
          map.addSource("gpx-route", {
            type: "geojson",
            data: geojson,
          });

          map.addLayer({
            id: "gpx-line",
            type: "line",
            source: "gpx-route",
            paint: {
              "line-color": "#FF0000",
              "line-width": 4,
            },
          });
        });
      } catch (error) {
        console.error("Errore nel caricamento del GPX:", error);
      }
    };

    loadGPX();

    return () => map.remove();
  }, [isMapLoaded]);

  return isMapLoaded ? (
    <div className="mapbox-container mb-8">
      <div className="mapbox-placeholder"></div>
      <div ref={mapContainerRef} className="mapbox" />
    </div>
  ) : (
    <div>Loading...</div>
  );
}
