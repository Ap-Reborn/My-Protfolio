import { useEffect, useRef } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import {
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaFacebook,
    // FaInstagram,
    FaLinkedin,
    // FaBehanceSquare,
} from "react-icons/fa";
import emailjs from '@emailjs/browser';
import Aos from "aos";
const Contact = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_q5hps0i",
                "template_m301sup",
                form.current,
                "CRT-ROTXhN81IW0tR"
            )
            .then(
                (result) => {
                    console.log(result.text);

                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        text: "Your message has been sent successfully!",
                    });
                    form.current.reset(); // 
                },
                (error) => {
                    console.log(error.text);
                    Swal.fire({
                        icon: "error",
                        title: "Error",
                        text: "Oops... Something went wrong. Please try again later.",
                    });
                }
            );
    };
    return (
        <div id="contact-me" className='mt-32'>
            <SectionTitle heading={"Contact Me"}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className="bg-[#E3E7FA] w-full p-4 rounded-md flex justify-center items-center" style={{ backgroundImage: 'url("https://assets.website-files.com/5f22e66e441c16d7fcb742eb/5f2da8c3869d745b1397cbe5_map.svg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>                    <div className='bg-blue-800 text-white p-6 rounded-3xl' data-aos="fade-up">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Get in Touch
                    </h2>
                    <p className=" text-2xl mb-4">Feel free to reach out to me!</p>
                    <div className="flex items-center mb-4">
                        <FaPhone className=" mr-2" />
                        <span className="text-2xl">+8801816092151</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <FaEnvelope className=" mr-2" />
                        <a href="mailto:anonnaferdosh193@gmail.com" className="text-2xl">
                            ashrafulamin654@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center mb-4">
                        <FaMapMarkerAlt className=" mr-2" />
                        <span className="text-2xl">Chittagong, Bangladesh</span>
                    </div>
                    <div className="flex items-center justify-center mt-4 border p-4 rounded-xl">
                        <a
                            href="https://www.facebook.com/profile.php?id=100009899413901"
                            className=" text-3xl mr-4 hover:text-yellow-600"
                        >
                            <FaFacebook />
                        </a>

                        {/* <a href="https://www.instagram.com/anonna_ferdaus" className="text-3xl mr-4 hover:text-yellow-600">
                            <FaInstagram />
                        </a> */}
                        <a
                            href="https://www.linkedin.com/in/ashraful-amin-615330280/"
                            className=" text-3xl mr-4 hover:text-yellow-600"
                        >
                            <FaLinkedin />
                        </a>
                        {/* <a
                            href="https://www.behance.net/anonna_ferdaus"
                            className=" text-3xl mr-4 hover:text-yellow-600"
                        >
                            <FaBehanceSquare />
                        </a> */}
                    </div>
                </div>
                </div>
                <div className="card-body bg-[#E3E7FA]">
                    <div className=" p-8 rounded-md border bg-blue-800  ">
                        <form data-aos="fade-up" ref={form} onSubmit={sendEmail}>
                            <div className="mb-4">
                                <label className="text-white mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className="w-full px-3 py-2 border-blue-300 rounded-md"
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="text-white mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="w-full px-3 py-2 border-blue-300 rounded-md"
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="text-white mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    className="w-full px-3 py-2 border-blue-300 rounded-md"
                                    id="message"
                                    name="message"
                                    placeholder="Your Message"
                                    required
                                ></textarea>
                            </div>
                            <button
                                className="btn border-0 bg-red-800 text-white hover:text-blue-800  font-semibold py-2 px-4 rounded"
                                type="submit"
                            >
                                Lets Talk
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;