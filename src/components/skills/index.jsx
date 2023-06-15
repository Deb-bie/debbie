import SkillsData from "../../data/data.js"
import Skill from '../../assets/skills.svg'



const Skills = () => {
    return (
        <div id="skills" className="w-[100%] h-[100%] py-28 pb-24  overflow-hidden ">
            <div className="w-[100%] h-[100%] 4xs:px-2 3xs:px-6 sm:px-24 gap-y-4 flex flex-col justify-center content-center items-center ">
                <h1 className="w-[100%] text-3xl mb-12 flex flex-row justify-start ">Languages, Frameworks and Tools</h1>

                <div className="w-[100%] h-[100%] gap-y-12 flex 4xs:flex-col md:flex-row justify-between items-center content-center z-10 ">
                    <div className="4xs:w-[100%] sm:w-[30%] flex flex-row 4xs:justify-center sm:justify-start ">
                        <img src={Skill} alt="skills" className=" object-cover hover:transform hover:transition-500 hover:scale-110 cursor-pointer " />
                    </div>

                    <div className="4xs:w-[100%] md:w-[50%] gap-4 grid 4xs:grid-cols-2 3xs:grid-cols-3 2xs:grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5">
                        {
                            SkillsData.map((skill,id) => (
                                <div key={id} className="px-4 py-4 gap-y-2 flex flex-col justify-center content-center items-center">
                                <img src={skill.image} alt="python" className=" object-cover hover:transform hover:transition-500 hover:scale-90 cursor-pointer "  />
                                <p className="text-sm " >{skill.text}</p>

                            </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Skills;