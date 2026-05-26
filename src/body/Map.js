import './Map.css';
import { useEffect, useRef } from "react";
import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/jsvectormap.css";
import "jsvectormap/dist/maps/world.js";

export default function Map() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    //Prevents duplicate
    mapRef.current.innerHTML = "";

    //Settings for the map
    const map = new jsVectorMap({
      selector: mapRef.current,
      map: 'world',

      //Marker settings
      markers: [
        {
          name: "Winnipeg",
          coords: [0, 0],
        },
      ],
      markersSelectable: true,
      markerStyle: {
        initial: {
          fill: "#ff0000",
          r: 10,
        },
      },

      //Province settings
      regionStyle: {
        initial: {
          fill: "#616161",
          stroke: "#ffffff",
          strokeWidth: 1,
          fillOpacity: 1,
        },
        hover: {
          fill: "#616161",
          fillOpacity: 1,
        },
        selected: {
          fill: "#616161",
          fillOpacity: 1,
        },
      },
      onRegionTooltipShow(event, tooltip) {
        tooltip.css({ display: "none" });
      },
    });

    return () => {
      map.destroy();
    };
  }, []);

  return (
    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: "600px",
      }}
    />
  );
}