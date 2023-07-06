import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { BiLinkExternal, BiLogoGithub } from "react-icons/bi";
import project1 from '../../assets/project1.jpg'
import project2 from '../../assets/project2.jpg'
import project3 from '../../assets/project3.jpg'
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const Projects = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])
    return (
 <div id="my-projects">
            <SectionTitle heading={"My Projects"}></SectionTitle>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4'>

                {/* project 1 */}
                <div data-aos="fade-up" className="hover:shadow-xl border">
                    <div className=" p-4 rounded-lg">

                        <div className="relative max-w-full h-72 overflow-hidden rounded-lg">
                            <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                                <img
                                    src={project1}
                                    alt=""
                                    className="w-full object-cover object-top rounded-lg"
                                />
                            </div>
                        </div>


                        <div className="my-4">
                            <h1 className="text-3xl font-bold text-center mb-2">Recepe Review
                            </h1>
                            <p className="text-gray-600 text-center mb-4">
                                Chef Recipe Website
                            </p>
                            <p className="text-gray-600 text-center">
                                • Secure login system with email-password, Google Sign-In, and GitHub Sign-In.
                                • It includes a dedicated section for chefs, featuring a View recipe button that directs users to
                                the Chef Recipes page. This page showcases chef information along with their top 3 recipes.
                                • Users can interact with the recipes by using the favorite button, which triggers a toast
                                message to provide feedback on the action.
                            </p>
                        </div>
                        <hr />
                        <div className="my-4 text-center">
                            <h1 className="text-lg font-bold mb-2">Technologies used:</h1>
                            <div className="flex flex-wrap gap-2 text-center items-center justify-center">
                                <button className="badge bg-blue-700 text-white p-3">HTML</button>
                                <button className="badge bg-blue-700 text-white p-3">CSS</button>
                                <button className="badge bg-blue-700 text-white p-3">Tailwind CSS</button>
                                <button className="badge bg-blue-700 text-white p-3">React</button>
                                <button className="badge bg-blue-700 text-white p-3">Node JS</button>
                                <button className="badge bg-blue-700 text-white p-3">Firebase</button>
                            </div>
                        </div>
                        <hr className="my-4" />
                        <div className=" mx-auto flex justify-center items-center gap-4 my-10">
                            <div className="flex gap-1">
                                <a
                                    href="https://reciperevive-4cb3d.web.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline hover:bg-blue-700 flex justify-center items-center"
                                >
                                    <BiLinkExternal className="text-2xl me-2" />
                                    <span>Live </span>
                                </a>
                                <a
                                    href="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-Ap-Reborn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline hover:bg-blue-700 flex justify-center items-center"
                                >
                                    <BiLogoGithub className="text-2xl me-2 " />
                                    <span>Client</span>
                                </a>
                                <a
                                    href="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-server-side-Ap-Reborn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline hover:bg-blue-700 flex justify-center items-center"
                                >
                                    <BiLogoGithub className="text-2xl me-2" />
                                    <span>Server</span>
                                </a>
                            </div>
                        </div>


                    </div>



                </div>
                {/* Project 2 */}
                <div data-aos="fade-up" className="hover:shadow-xl border">
                    <div className=" p-4 rounded-lg">

                        <div className="relative max-w-full h-72 overflow-hidden rounded-lg">
                            <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                                <img
                                    src={project2}
                                    alt=""
                                    className="w-full object-cover object-top rounded-lg"
                                />
                            </div>
                        </div>


                        <div className="my-4">
                            <h1 className="text-3xl font-bold text-center mb-2">WonderToysHub</h1>
                            <p className="text-gray-600 text-center mb-4">
                                Toy Marketplace Website
                            </p>
                            <p>
                                • Secure login system with email/password and Google sign-in.
                                • Home page with banner, toy gallery, and  Shop by Category section.
                                • All Toys, Single Toy Details, Add A Toy, and My Toys pages for browsing, adding, and
                                managing user toys.
                            </p>
                        </div>
                        <hr />
                        <div className="my-4 text-center">
                            <h1 className="text-lg font-bold mb-2">Technologies used:</h1>
                            <div className="flex flex-wrap gap-2 text-center items-center justify-center">
                                <button className="badge bg-blue-700 text-white p-3">HTML</button>
                                <button className="badge bg-blue-700 text-white p-3">CSS</button>
                                <button className="badge bg-blue-700 text-white p-3">Tailwind CSS</button>
                                <button className="badge bg-blue-700 text-white p-3">React</button>
                                <button className="badge bg-blue-700 text-white p-3">Node JS</button>
                                <button className="badge bg-blue-700 text-white p-3">Firebase</button>
                            </div>
                        </div>
                        <hr className="my-4" />
                        <div className=" mx-auto flex justify-center items-center gap-4 my-10">
                            <div className="flex gap-1">
                                <a
                                    href="https://wondertoyshub.web.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline hover:bg-blue-700 flex justify-center items-center"
                                >
                                    <BiLinkExternal className="text-2xl me-2" />
                                    <span>Live</span>
                                </a>
                                <a
                                    href="https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-Ap-Reborn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline hover:bg-blue-700 flex justify-center items-center"
                                >
                                    <BiLogoGithub className="text-2xl me-2 " />
                                    <span>Client</span>
                                </a>
                                <a
                                    href="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-server-side-Ap-Reborn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline hover:bg-blue-700 flex justify-center items-center"
                                >
                                    <BiLogoGithub className="text-2xl me-2" />
                                    <span>Server</span>
                                </a>
                            </div>
                        </div>


                    </div>



                </div>






                {/* project 3 */}
                <div data-aos="fade-up" className="hover:shadow-xl border">
                    <div className=" p-4 rounded-lg">

                        <div className="relative max-w-full h-72 overflow-hidden rounded-lg">
                            <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                                <img
                                    src={project3}
                                    alt=""
                                    className="w-full object-cover object-top rounded-lg"
                                />
                            </div>
                        </div>


                        <div className="my-4">
                            <h1 className="text-3xl font-bold text-center mb-2">Language Bridge</h1>
                            <p className="text-gray-600 text-center">
                                Online Graphic Design Learning Website
                            </p>
                            <p className="text-gray-600 text-center">
                                •  Language Bridge is a web app for learning graphic design with features like a navbar with
                                login/register options.
                                • A home page with a slide banner, instructor profiles, class listings, and a personalized
                                dashboard for users.
                            </p>
                        </div>
                        <hr />
                        <div className="my-4 text-center">
                            <h1 className="text-lg font-bold mb-2">Technologies used:</h1>
                            <div className="flex flex-wrap gap-2 text-center items-center justify-center">
                                <button className="badge bg-blue-700 text-white p-3">HTML</button>
                                <button className="badge bg-blue-700 text-white p-3">CSS</button>
                                <button className="badge bg-blue-700 text-white p-3">Tailwind CSS</button>
                                <button className="badge bg-blue-700 text-white p-3">React</button>
                                <button className="badge bg-blue-700 text-white p-3">Node JS</button>
                                <button className="badge bg-blue-700 text-white p-3">Firebase</button>
                                <button className="badge bg-blue-700 text-white p-3">MongoDB</button>

                            </div>
                        </div>
                        <hr className="my-4" />
                        <div className=" mx-auto flex justify-center items-center gap-4 my-10">
                            <div className="flex gap-1">
                                <a
                                    href="https://summer-camp-school-2722b.web.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline hover:bg-blue-700 flex justify-center items-center"
                                >
                                    <BiLinkExternal className="text-2xl me-2" />
                                    <span>Live</span>
                                </a>
                                <a
                                    href="https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-Ap-Reborn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline hover:bg-blue-700 flex justify-center items-center"
                                >
                                    <BiLogoGithub className="text-2xl me-2 " />
                                    <span>Client</span>
                                </a>
                                <a
                                    href="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-server-side-Ap-Reborn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline hover:bg-blue-700 flex justify-center items-center"
                                >
                                    <BiLogoGithub className="text-2xl me-2" />
                                    <span>Server</span>
                                </a>
                            </div>
                        </div>


                    </div>



                </div>
            </div>

        </div>
    );
};

export default Projects;