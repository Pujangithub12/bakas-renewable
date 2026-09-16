import PageHeader from "../components/PageHeader";
import GalleryTile from "../components/GalleryTile";
import CallToAction from "../components/CallToAction";

import sourcing from "../assets/images/1.jpeg";
import roller from "../assets/images/roller.png";
import factory from "../assets/images/factory.jpeg";
import industry from "../assets/images/industry.png";
import sample from "../assets/images/sample.jpeg";
import oven from "../assets/images/oven.jpeg";
import pellets from "../assets/images/pellets.jpeg";
import biomassPellet from "../assets/images/biomass-pellet.png";
import multiMill from "../assets/images/multi-mill.jpeg";
import pelletMillLine from "../assets/images/pellet-mill-line.jpeg";
import chippingUnit from "../assets/images/chipping-unit.jpeg";
import calorimeterTest from "../assets/images/calorimeter-test.jpeg";
import rawMaterialYard from "../assets/images/raw-material-yard.jpeg";

const PHOTOS = [
  { src: sourcing, alt: "Tractor clearing forest floor biomass", caption: "Biomass sourcing" },
  { src: roller, alt: "Briquette press machine", caption: "Pellet press" },
  { src: factory, alt: "Bakas production facility exterior", caption: "Our production facility" },
  { src: industry, alt: "Pellet production line machinery", caption: "Production line" },
  { src: sample, alt: "Biomass samples on a lab bench", caption: "Sample testing" },
  { src: oven, alt: "Muffle furnace quality testing", caption: "Quality testing", },
  { src: pellets, alt: "Bulk storage of finished pellets", caption: "Bulk storage" },
  { src: biomassPellet, alt: "Hands holding finished biomass pellets", caption: "Finished pellets" },
  { src: multiMill, alt: "Multi-mill grinding machine on the plant floor", caption: "Multi-mill machine grinding",},
  { src: pelletMillLine, alt: "Pellet mill production line", caption: "Pellet mill line" },
  { src: chippingUnit, alt: "Biomass chipper unit hitched to a tractor", caption: "Biomass chipping unit" },
  { src: calorimeterTest, alt: "Digital bomb calorimeter used for calorific value testing", caption: "Value testing",},
  { src: rawMaterialYard, alt: "Raw material storage yard beside the plant building", caption: "Raw material storage yard" },
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