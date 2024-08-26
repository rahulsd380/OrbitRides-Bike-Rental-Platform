import FeaturedBikes from "../../components/FeaturedBikes/FeaturedBikes";
import Hero from "../../components/Hero/Hero";
import Testimonials from "../../components/Testimonials/Testimonials";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";


const Home = () => {
    return (
        <div>
            <Hero/>
            <FeaturedBikes/>
            <Testimonials/>
            <WhyChooseUs/>
        </div>
    );
};

export default Home;