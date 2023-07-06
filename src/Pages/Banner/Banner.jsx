import { Typewriter } from "react-simple-typewriter";
import men from '../../assets/men.png';
const Banner = () => {
    return (
        <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-[#E3E7FA]">
            <div className="flex justify-center items-center">

                <div>
                    <div  >

                        <h1 className="text-5xl lg:text-5xl  my-20 lg:mb-8 md:mb-8 md:my-0 lg:my-0  font-extrabold text-blue-900 px-10 ">
                            I Am  {' '}
                            <span className="text-5xl lg:text-5xl  font-extrabold text-red-800 ">
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={[' Web Developer', 'Frontend Developer']}
                                    loop={10}
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}

                                />

                            </span>
                        </h1>
                    </div>
                    {/* <button className=" btn bg-red-800 w-full text-white hover:bg-blue-900">Download Resume</button> */}
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <img src={men} />
            </div>

        </div>
    </div>
    );
};

export default Banner;