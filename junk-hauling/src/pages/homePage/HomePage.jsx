import HomeCard from "../../components/HomeCard/HomeCard";
import banner from "../../../images/junkHeader.jpg"; // Use your panoramic image
import "./HomePage.css";

const HomePage = () => (
  <div className="container mt-5">
    {/* Panoramic banner image at the top */}
    <img
      src={banner}
      alt="509 Junk Hauling Banner"
      className="homepage-banner-image"
    />
    <div className="row">
      <HomeCard
        title="Rates and Dates"
        description="Check out our pricing and availability."
        linkText="View Rates and Dates"
        linkUrl="/ratesanddates"
      />
      <HomeCard
        title="Rent a Trailer"
        description="Need a trailer? Rent one from us today!"
        linkText="Rent a Trailer"
        linkUrl="/rentatrailer"
      />
      <HomeCard
        title="About Us"
        description="Learn more about our company and mission."
        linkText="About Us"
        linkUrl="/about"
      />
      <HomeCard
        title="Contact Us"
        description="Get in touch with us for more information."
        linkText="Contact Us"
        linkUrl="/contact"
      />
    </div>
  </div>
);

export default HomePage;
