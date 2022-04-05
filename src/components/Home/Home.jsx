import Offers from "./Offers";
import Banner from "./Banner";
import Footer from "../Layout/Footer";
import FeatureCategories from "./FeatureCategories";
import FeatureBrands from "./FeatureBrands";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div className="landing_page_container">
            <main>
                <Offers />
                <Banner />
                <FeatureCategories />
                <FeatureBrands />
                <Testimonials />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
