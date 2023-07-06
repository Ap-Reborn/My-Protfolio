
import About from "../Pages/About/About";
import Banner from "../Pages/Banner/Banner";
import Contact from "../Pages/Contact/Contact";
import MySkills from "../Pages/MySkills/MySkills";
import Projects from "../Pages/Projects/Projects";
import BackToTop from "../Shared/BackToTop/BackToTop";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <MySkills></MySkills>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
            <BackToTop></BackToTop>
        </div>
    );
};

export default Home;