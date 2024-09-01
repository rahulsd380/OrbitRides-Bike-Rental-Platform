import ContactUs from "../../components/ContactUs/ContactUs";
import FeaturedBikes from "../../components/FeaturedBikes/FeaturedBikes";
import Hero from "../../components/Hero/Hero";
// import TAble from "../../components/TAble";
import Testimonials from "../../components/Testimonials/Testimonials";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";


const Home = () => {
    return (
        <div>
            {/* <TAble/> */}
            <Hero/>
            <FeaturedBikes/>
            <Testimonials/>
            <WhyChooseUs/>
            <ContactUs/>
        </div>
    );
};

export default Home;