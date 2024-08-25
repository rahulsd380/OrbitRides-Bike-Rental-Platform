import FeaturedBikes from "../../components/FeaturedBikes/FeaturedBikes";
import Hero from "../../components/Hero/Hero";
import Testimonials from "../../components/Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Hero/>
            <FeaturedBikes/>
            <Testimonials/>
        </div>
    );
};

export default Home;