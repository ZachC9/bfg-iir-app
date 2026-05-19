import './Map.css';
import { useEffect, useRef } from "react";
import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/jsvectormap.css";
import "jsvectormap/dist/maps/canada.js";

export default function Map() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // IMPORTANT: clear old SVG/content
    mapRef.current.innerHTML = "";

    const map = new jsVectorMap({
      selector: mapRef.current,
      map: 'canada',

      markers: [
        {
          name: "Winnipeg",
          coords: [377, 724],
        },
      ],
      markersSelectable: true,

      markerStyle: {
        initial: {
          fill: "#ff0000",
          r: 10,
        },
      },

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