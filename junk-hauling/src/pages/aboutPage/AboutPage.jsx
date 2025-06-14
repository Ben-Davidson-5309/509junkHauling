import FamilyAboutSection from "../../components/AboutFamily/FamilyAboutSection";
import "./AboutPage.css"

const AboutPage = () => {
  return (
    <div className="container py-5">
      <h1
        className="mb-4 text-center display-3 heading-text"
      >
        About Our Family Business
      </h1>
      <FamilyAboutSection />
    </div>
  );
};

export default AboutPage;
