import {AiFillGithub} from "react-icons/ai"
import {IoEyeSharp} from "react-icons/io5"
import ProjectsData from "../../data/projectsData.js"



import "./project.css"


const Projects = () => {
    return (
        <div id="projects" className="w-[100%] h-[100%] py-24 pb-24  overflow-hidden">
            <div className="w-[100%] h-[100%] 4xs:px-2 3xs:px-6 sm:px-24 gap-y-4 flex flex-col justify-center content-center items-center ">
                <h1 className="w-[100%] text-3xl mb-6 flex flex-row justify-start items-start content-center  ">Projects</h1>

                <div className="4xs:w-[100%] sm:w-[100%] grid gap-8 4xs:grid-cols-1 lg:grid-cols-2 ">
                    {
                        ProjectsData.map((project, id) => (
                            <div key={id} className="glass w-[100%] h-[100%] p-8 flex flex-col justify-center items-center content-center ">
                                <div className="card w-[100%] h-[100%] ">
                                    <img src={project.image} alt="project" className="object-contain" />
        
                                    <div className="info">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:duration-500  hover:scale-90 " >
                                            <button><AiFillGithub /> </button>
                                        </a>
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="hover:duration-500  hover:scale-90 " >
                                            <button><IoEyeSharp /> </button>
                                        </a>
                                    </div>
                                </div>
        
                                <div className="my-6 gap-y-4 4xs:px-2 sm:px-6 md:px-12 leading-[40px] flex flex-col justify-center items-center content-center">
                                    <h1 className="text-base font-bold">{project.title}</h1>
                                    <p className="text-sm ">{project.desc} </p>
                                    <p>
                                        {
                                            project.stack.map((item, id) => (
                                                <span key={id}>✨ {item.one} &nbsp; </span>
                                            ))
                                        }
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects