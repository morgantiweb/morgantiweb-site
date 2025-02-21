import SectionBrands from "./sections/SectionBrands";
import SectionCover from "./sections/SectionCover";
import SectionImageCarousel from "./sections/SectionImageCarousel";
import SectionWorks from "./sections/SectionWorks";

function Container() {
  return (
    <>
      <SectionCover />
      <SectionImageCarousel />
      <SectionWorks />
      <SectionBrands />
      <div style={{ height: "100vh" }}>to be continue...</div>
    </>
  );
}

export default Container;
