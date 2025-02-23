import Footer from "./sections/Footer";
import SectionBrands from "./sections/SectionBrands";
import SectionCover from "./sections/SectionCover";
import SectionEducation from "./sections/SectionEducation";
import SectionFreetime from "./sections/SectionFreeTime";
import SectionImageCarousel from "./sections/SectionImageCarousel";
import SectionSkills from "./sections/SectionSkills";
import SectionWorks from "./sections/SectionWorks";

function Container() {
  return (
    <>
      <SectionCover />
      <SectionImageCarousel />
      <SectionWorks />
      <SectionBrands />
      <SectionSkills />
      <SectionEducation />
      <SectionFreetime />
      <Footer />
    </>
  );
}

export default Container;
