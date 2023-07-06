import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
    const [backToTopBtn, setBackToTpBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setBackToTpBtn(true)
            } else {
                setBackToTpBtn(false)
            }
        })
    }, [])


    const scrollUp = () => {
        window.scrollTo({                             
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <div>
            {
                backToTopBtn && (
                    <button onClick={scrollUp} className="fixed bottom-12 right-12 text-3xl w-12 h-12 btn btn-circle bg-blue-700 text-white hover:bg-blue-500">
                        <FaArrowUp></FaArrowUp>
                    </button>
                )
            }
        </div>
    );
};

export default BackToTop;