import React from "react";

const MapComponent: React.FC = () => {
  return (
    <iframe
      loading="lazy"
      src="https://maps.google.com/maps?q=Saif's%20Boxing%20and%20Fitness&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
      title="Saif's Boxing and Fitness"
      aria-label="Saif's Boxing and Fitness"
      style={{ width: "100%", height: "100%" }}
    ></iframe>
  );
};

export default MapComponent;
