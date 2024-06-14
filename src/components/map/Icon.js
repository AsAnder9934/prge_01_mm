import L from "leaflet";
import hospital from "./icon.png";

const LeafIcon = L.Icon.extend({
  options: {
    iconSize: [100, 100],
    iconAnchor: [50, 100],
    tooltipAnchor: [0, 0],
  },
});

export const hospitalIcon = new LeafIcon({ iconUrl: hospital });
