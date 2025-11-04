"use client";

import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { MapPin, Users, TrendingUp } from "lucide-react";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// 🌍 Company export destinations
const clientLocations = [
  { name: "Jordan", coordinates: [36.2384, 30.5852], continent: "Middle East" },
  { name: "Iraq", coordinates: [43.6793, 33.2232], continent: "Middle East" },
  { name: "Saudi Arabia", coordinates: [45.0792, 23.8859], continent: "Middle East" },
  { name: "Lebanon", coordinates: [35.8623, 33.8547], continent: "Middle East" },
  { name: "United Kingdom", coordinates: [-3.436, 55.3781], continent: "Europe" },
  { name: "Canada", coordinates: [-106.3468, 56.1304], continent: "North America" },
  { name: "Brazil", coordinates: [-51.9253, -14.235], continent: "South America" },
  { name: "United States", coordinates: [-98.5795, 39.8283], continent: "North America" },
  { name: "Russia", coordinates: [105.3188, 61.524], continent: "Europe/Asia" },
  { name: "Egypt", coordinates: [30.8025, 26.8206], continent: "Africa" },
  { name: "Vietnam", coordinates: [108.2772, 14.0583], continent: "Asia" },
  { name: "Thailand", coordinates: [100.9925, 15.8700], continent: "Asia" },
  { name: "Indonesia", coordinates: [113.9213, -0.7893], continent: "Asia" },
];

export default function ClientMap() {
  const [activeMarker, setActiveMarker] = useState<string | null>(null);
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-16 px-4">
      <div className="max-w-7xl mx-auto pt-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
            <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Global Reach
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
            Our Export Destinations
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Coco Hamooda proudly exports to {clientLocations.length} countries worldwide.
          </p>
        </div>

        {/* Map Container */}
        <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700">
          <div className="relative w-full h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800">
            <ComposableMap
              projectionConfig={{
                scale: 180,
                rotation: [-10, 0, 0],
              }}
              className="w-full h-full"
            >
              <ZoomableGroup
                center={[20, 10]}
                zoom={1.2}
                minZoom={1.2}
                maxZoom={1.2}
                disablePanning={true}
              >
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#E0E7FF"
                        stroke="#C7D2FE"
                        strokeWidth={0.5}
                        className="dark:fill-slate-700 dark:stroke-slate-600 outline-none transition-all duration-300"
                        style={{
                          default: { outline: "none" },
                          hover: { fill: "#C7D2FE", outline: "none" },
                          pressed: { fill: "#A5B4FC", outline: "none" },
                        }}
                      />
                    ))
                  }
                </Geographies>

                {/* Client Markers */}
                {clientLocations.map((location) => (
                  <Marker key={location.name} coordinates={location.coordinates}>
                    <g
                      onMouseEnter={() => setHoveredMarker(location.name)}
                      onMouseLeave={() => setHoveredMarker(null)}
                      onClick={() =>
                        setActiveMarker(
                          activeMarker === location.name ? null : location.name
                        )
                      }
                      className="cursor-pointer relative"
                    >
                      {/* Marker Pin */}
                      <circle
                        r={activeMarker === location.name ? 8 : 6}
                        fill={
                          activeMarker === location.name || hoveredMarker === location.name
                            ? "#1E90FF" // Blue when active/hovered
                            : location.name === "Indonesia" || location.name === "Jordan"
                              ? "#FF4444" 
                              : "#9FD356" 
                        }
                        stroke="white"
                        strokeWidth={2}
                        className="transition-all duration-300"
                        style={{
                          filter:
                            activeMarker === location.name
                              ? "drop-shadow(0 4px 12px rgba(30, 144, 255, 0.6))"
                              : location.name === "Indonesia"
                                ? "drop-shadow(0 2px 6px rgba(255, 68, 68, 0.4))"
                                : "drop-shadow(0 2px 6px rgba(159, 211, 86, 0.4))",
                        }}
                      />

                      {/* Pulse Effect */}
                      {(activeMarker === location.name || hoveredMarker === location.name) && (
                        <circle
                          r={12}
                          fill="none"
                          stroke={
                            location.name === "Indonesia" ? "#FF4444" : "#1E90FF"
                          }
                          strokeWidth={2}
                          opacity={0.4}
                          className="animate-ping"
                        />
                      )}

                      {/* Country Label */}
                      <text
                        textAnchor="middle"
                        y={-12}
                        className="text-xs font-semibold fill-slate-800 dark:fill-slate-100 pointer-events-none"
                        style={{
                          fontSize: activeMarker === location.name ? "12px" : "10px",
                          fontWeight: activeMarker === location.name ? "700" : "600",
                          filter: "drop-shadow(0 1px 3px rgba(0, 0, 0, 0.3))",
                        }}
                      >
                        {location.name}
                      </text>

                      {/* Tooltip */}
                      {activeMarker === location.name && (
                        <foreignObject x={-60} y={-70} width={120} height={50}>
                          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg px-3 py-2 text-center animate-fade-in">
                            <p className="text-xs font-semibold text-slate-800 dark:text-white">
                              {location.name}
                            </p>
                            <p className="text-[10px] text-slate-600 dark:text-slate-300">
                              {location.continent}
                            </p>
                          </div>
                        </foreignObject>
                      )}
                    </g>
                  </Marker>
                ))}
              </ZoomableGroup>
            </ComposableMap>

            {/* Interaction Hint */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-slate-200 dark:border-slate-700">
              <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">
                Click markers to view country details • Hover to highlight
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}