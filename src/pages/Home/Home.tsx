import ContactUs from "../../components/ContactUs/ContactUs";
import Coupon from "../../components/Coupon/Coupon";
import FeaturedBikes from "../../components/FeaturedBikes/FeaturedBikes";
import Hero from "../../components/Hero/Hero";
import SpinnerWheel from "../../components/SpinWheel/SpinnerWheel";
// import TAble from "../../components/TAble";
import Testimonials from "../../components/Testimonials/Testimonials";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div>
      {/* <TAble/> */}
      <Hero />
      <FeaturedBikes />
      <Coupon />
      <Testimonials />
      <WhyChooseUs />
      <SpinnerWheel />
      <ContactUs />
    </div>
  );
};

export default Home;
