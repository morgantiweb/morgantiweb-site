import SectionBrands from "./sections/SectionBrands";
import SectionCover from "./sections/SectionCover";
import SectionEducation from "./sections/SectionEducation";
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
      <div style={{ height: "100vh" }}>to be continue...</div>
    </>
  );
}

export default Container;
