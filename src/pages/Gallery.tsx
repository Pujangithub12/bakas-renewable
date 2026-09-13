import PageHeader from "../components/PageHeader";
import GalleryTile from "../components/GalleryTile";
import CallToAction from "../components/CallToAction";

import planning from "../assets/images/planning.jpeg";
import sourcing from "../assets/images/1.jpeg";
import yard from "../assets/images/2.jpeg";
import roller from "../assets/images/roller.png";
import factory from "../assets/images/factory.jpeg";
import factory2 from "../assets/images/factory2.jpeg";
import industry from "../assets/images/industry.png";
import sample from "../assets/images/sample.jpeg";
import oven from "../assets/images/oven.jpeg";
import pellets from "../assets/images/pellets.jpeg";
import biomassPellet from "../assets/images/biomass-pellet.png";
import packaging from "../assets/images/inf.jpg";
import community from "../assets/images/community.jpeg";

const PHOTOS = [
  { src: planning, alt: "Site evaluation with partners", caption: "Site evaluation & planning", tall: true },
  { src: sourcing, alt: "Tractor clearing forest floor biomass", caption: "Biomass sourcing" },
  { src: community, alt: "Local workers in the plantation", caption: "Empowering local communities" },
  { src: yard, alt: "Tractors and loaders in the equipment yard", caption: "Fleet & machinery", tall: true },
  { src: roller, alt: "Pellet press machine", caption: "Pellet press" },
  { src: factory, alt: "Bakas production facility exterior", caption: "Our production facility" },
  { src: factory2, alt: "Inside the pellet production line", caption: "Inside the plant", tall: true },
  { src: industry, alt: "Pellet production line machinery", caption: "Production line" },
  { src: sample, alt: "Biomass samples on a lab bench", caption: "Sample testing" },
  { src: oven, alt: "Muffle furnace quality testing", caption: "Quality testing", tall: true },
  { src: pellets, alt: "Bulk storage of finished pellets", caption: "Bulk storage" },
  { src: biomassPellet, alt: "Hands holding finished biomass pellets", caption: "Finished pellets" },
  { src: packaging, alt: "Bakas premium biomass pellet packaging", caption: "Premium pellet packaging", tall: true },
];

export default function Gallery() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Inside Bakas"
        description="A look at our raw materials, production process, storage and the fuel it becomes."
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {PHOTOS.map((photo) => (
              <GalleryTile key={photo.caption} {...photo} />
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
