import React from "react";
import ProjectSection from "./PageContent/ProjectSection";
import AboutSection from "./PageContent/AboutSection";
import ContactSection from "./PageContent/ContactSection";
import LocationMap from "./PageContent/LocationMap";

function PageContent() {
  return (
    <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
      <ProjectSection />
      <AboutSection />
      <ContactSection />
      <LocationMap />
    </div>
  );
}

export default PageContent;
