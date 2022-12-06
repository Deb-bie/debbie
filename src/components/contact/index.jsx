import ContactImage from "../../assets/cont.png"
import {MdOutlineMail} from "react-icons/md"
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"


const Contact = () => {
    return (
        <div id="contact" className="w-[100%] h-[100%] pt-24 pb-12  overflow-hidden">
            <div className="w-[100%] h-[100%] mb-8 4xs:px-2 3xs:px-6 sm:px-24 gap-y-8 flex 4xs:flex-col sm:flex-row justify-between content-center items-center ">
                <div className="4xs:w-[100%] sm:w-[50%] h-[100%] flex flex-row justify-center">
                    <img src={ContactImage} alt="contact" className="object-contain " />
                </div>

                <div className="4xs:w-[100%] sm:w-[50%] h-[100%] mb-32 flex flex-col justify-center content-center 4xs:items-center sm:items-start ">
                    <h1 className="text-4xl pb-12 ">Let's work together</h1>

                    <p className="w-[80%] text-base pb-12">
                        I am always happy to work on new projects while improving
                        on existing ones.
                    </p>

                    <div className="w-[80%] gap-y-4 text-3xl flex flex-wrap flex-row justify-evenly content-center items-center">
                        <a href="mailto:asamoahjaeldeborah@gmail.com" target="_blank" rel="noopener noreferrer">
                            <button className="p-2 text-blue-500 hover:duration-500 ease-in-out hover:scale-150 hover:bg-white-500"><MdOutlineMail /> </button>
                        </a>

                        <a href="https://github.com/Deb-bie" target="_blank" rel="noopener noreferrer">
                            <button className="p-2 text-blue-500 hover:duration-500 ease-in-out hover:scale-150 hover:bg-white-500">
                                <AiFillGithub />
                            </button>
                        </a>

                        <a href="https://www.linkedin.com/in/deborah-asamoah" target="_blank" rel="noopener noreferrer">
                            <button className="p-2 text-blue-500 hover:duration-500 ease-in-out hover:scale-150 hover:bg-white-500"><AiFillLinkedin /> </button>
                        </a>
                    </div>

                </div>
                
            </div>

            <hr />

            <p className="mt-8 text-base text-center ">
                Made with 💖 from &nbsp; 
                <span className="text-2xl font-['Dancing_Script'] ">debbie.A</span>
            </p>
        </div>
    )
}

export default Contact