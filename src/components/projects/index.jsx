import Shortly from "../../assets/shortly.png"
import "./project.css"

const Projects = () => {
    return (
        <div id="projects" className="w-[100%] h-[100%] py-24 pb-24  overflow-hidden">
            <div className="w-[100%] h-[100%] 4xs:px-2 3xs:px-6 sm:px-24 gap-y-4 flex flex-col justify-center content-center items-center ">
                <h1 className=" text-2xl mb-6 flex flex-row justify-start  ">Projects</h1>

                <div className="4xs:w-[100%] sm:w-[100%] grid gap-8 4xs:grid-cols-1 xs:grid-cols-2 lg:grid-cols-2 ">
                    
                    <div className="glass w-[100%] h-[100%] py-8 px-12 flex flex-col justify-center items-center content-center ">
                        <div className="card w-[100%] h-[100%] ">
                            <img src={Shortly} alt="shortly" className="object-contain" />

                            <div className="info">
                                <button>V</button>
                                <button>M</button>
                            </div>
                        </div>

                        <div className="my-6 gap-y-4 flex flex-col justify-center items-center content-center">
                            <h1 className="text-base font-bold">Pine</h1>
                            <p className="text-sm "> Lorem ipsum is placeholder text commonly used 
                                in the graphic, print, and publishing industries for previewing 
                                layouts and visual mockups.
                            </p>
                            <p>ReactJs &nbsp; TailwindCss</p>
                        </div>
                    </div>



                    <div className="bg-blue-400 px-6 py-4 ">1</div>
                    <div className="bg-blue-400 px-6 py-4 ">1</div>
                    <div className="bg-blue-400 px-6 py-4 ">1</div>
                    <div className="bg-blue-400 px-6 py-4 ">1</div>
                </div>
            </div>
        </div>
    )
}

export default Projects