import { Link, animateScroll as scroll } from "react-scroll";
import resume from '../../assets/AshrafulAmin_Resume.pdf'
import { FaFileDownload } from "react-icons/fa";
const Navbar = () => {
    const scrollToAboutMe = () => {
        scroll.scrollTo(100); // Adjust the offset value as needed
    };
    const scrollToMySkills = () => {
        scroll.scrollTo(100); // Adjust the offset value as needed
    };
    const scrollToMyProjects = () => {
        scroll.scrollTo(100); // Adjust the offset value as needed
    };
    const scrollToMyContact = () => {
        scroll.scrollTo(100); // Adjust the offset value as needed
    };
    return (
        <div className="navbar bg-[#E3E7FA]">
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#E3E7FA] rounded-box w-52  text-blue-700 font-bold ">
                    <li><a>Home</a></li>
                    <li> <Link to="about-me" smooth={true} onClick={scrollToAboutMe}>About Me</Link></li>
                    <li><Link to="my-skills" smooth={true} onClick={scrollToMySkills}>My Skills</Link></li>
                    <li><Link to="my-projects" smooth={true} onClick={scrollToMyProjects}>My Projects</Link></li>
                    <li><Link to="my-contact" smooth={true} onClick={scrollToMyContact}>Contact Me</Link></li>
                </ul>
            </div>
            <a className="btn btn-ghost normal-case text-blue-800 font-extrabold text-xl">Ashraful Amin</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-blue-700 font-bold">
                <li><a>Home</a></li>
                <li><Link to="about-me" smooth={true} onClick={scrollToAboutMe}>About Me</Link></li>
                <li><Link to="my-skills" smooth={true} onClick={scrollToMySkills}>My Skills</Link></li>
                <li><Link to="my-projects" smooth={true} onClick={scrollToMyProjects}>My Projects</Link></li>
                <li><Link to="contact-me" smooth={true} onClick={scrollToMyContact}>Contact Me</Link></li>

            </ul>
        </div>
        <div className="navbar-end">
            <a href={resume} download className="btn bg-blue-700 text-white hover:bg-blue-400"><FaFileDownload className="text-3xl"></FaFileDownload> Resume</a>
        </div>
    </div>
    );
};

export default Navbar;