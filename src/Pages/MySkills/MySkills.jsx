import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import web from '../../assets/web.json';
import Lottie from 'lottie-react';
const Skills = [
    {
        imageSrc: 'https://cdn-icons-png.flaticon.com/512/732/732212.png',
        title: 'HTML',
    },
    {
        imageSrc: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
        title: 'CSS',
    },
    {
        imageSrc: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
        title: 'Javascript',
    },
    {
        imageSrc: 'https://cdn-icons-png.flaticon.com/512/5968/5968672.png',
        title: 'Bootstrap',
    },
    {
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png',
        title: 'Tailwind CSS',
    },
    {
        imageSrc: 'https://cdn-icons-png.flaticon.com/512/919/919851.png',
        title: 'React',
    },
    {
        imageSrc: 'https://cdn-icons-png.flaticon.com/512/919/919825.png',
        title: 'Node JS',
    },

    {
        imageSrc: 'https://cdn.iconscout.com/icon/free/png-256/free-mongodb-3629020-3030245.png',
        title: 'MongoDB',
    },
    {
        imageSrc: 'https://cdn.iconscout.com/icon/free/png-256/free-firebase-3628772-3030134.png',
        title: 'Firebase',
    },

    // {
    //     imageSrc: 'https://cdn-icons-png.flaticon.com/512/5968/5968472.png',
    //     title: 'Adobe Illustrator',
    // },
    // {
    //     imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png',
    //     title: 'Adobe PhotoShop',
    // },
    {
        imageSrc: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png',
        title: 'Figma',
    },
    {
        imageSrc: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
        title: 'GitHub',
    }
];
const MySkills = () => {
    return (
        <div id="my-skills" className="my-32">
            <SectionTitle heading={"My Skills"}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mt-10">

                <div className="grid  grid-cols-4 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    {
                        Skills.map((skill, index) => (
                            <div data-aos="zoom-in" key={index} className="border  pt-4   flex justify-center items-center  shadow-lg  hover:bg-[#E3E7FA] hover:scale-105 transition-all transform duration-300">
                                <div>
                                    <img className="w-1/4 mx-auto"
                                        src={skill.imageSrc}
                                        alt=""
                                    />
                                    <h1 className="text-md md:text-xl lg:text-xl font-bold text-center my-4">{skill.title}</h1>
                                </div>
                            </div>
                        ))
                    }

                </div>
                <div className=" ">
                    <Lottie animationData={web}></Lottie>
                </div>
            </div>

        </div>
    );
};

export default MySkills;