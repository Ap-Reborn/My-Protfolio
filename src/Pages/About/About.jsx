
const About = () => {
    return (
        <div id="about-me">
            <div data-aos="fade-right" className='grid md:grid-cols-2 lg:grid-cols-2 '>
                <div >
                    <img className='rounded mx-auto h-auto w-3/4' src="https://img.freepik.com/free-vector/professional-programmer-engineer-writing-code_3446-693.jpg?w=740&t=st=1688449656~exp=1688450256~hmac=a7606231055a9f9e95aa6c58afda284d8dbce1960dde8efb47a45e9b92fb5063" alt="" />
                </div>
                <div className='flex justify-center items-center'>
                    <div className='text-center md:text-left lg:text-left mt-4 px-3 md:mt-0 lg:mt-0 md:px-0 lg:px-0'>
                        <h1 className='text-4xl  font-bold text-blue-800'>About Me</h1>
                        <p className='my-4 text-xl pr-4'> I am Ashraful Amin, My Academic Qualification Hsc  from Open Univercity  in 2023. Then I started learning basic front end development from W3 school by my own interest. Then I also took an online course provided by Programming Hero to expand my knowledge in this field.
                            One of my strengths is my ability to communicate and collaborate effectively with others. I enjoy working as part of a team and I am always willing to learn new things. I can create attractive and user-friendly  websites.

                        </p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default About;