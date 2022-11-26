import Frontend from "../../assets/fe.png";
import Backend from "../../assets/be.png";
import Mobile from "../../assets/mobile.png";
import And from "../../assets/and.jpg"
import { motion } from "framer-motion";
import SkillsData from "../../data/data.js"



const Skills = () => {
    return (
        <div id="skills" className="w-[100%] h-[100%] py-28 pb-24  overflow-hidden ">
            <div className="w-[100%] h-[100%] 4xs:px-2 3xs:px-6 sm:px-24 gap-y-4 flex flex-col justify-center content-center items-center ">
                <h1 className="w-[100%] text-3xl mb-12 flex flex-row justify-start ">Languages, Frameworks and Tools</h1>

                <div className="w-[100%] h-[100%] gap-y-12 flex 4xs:flex-col md:flex-row justify-between items-center content-center z-10 ">
                    <div className="4xs:w-[100%] sm:w-[50%] flex flex-row 4xs:justify-center sm:justify-start ">
                        <motion.div
                            initial={{ rotate: 45 }}
                            whileInView={{ rotate: 0 }}
                            viewport={{ margin: "-40px" }}
                            transition={{ duration: 3.5, type: "spring" }}
                            className="relative w-[70vw] md:w-[25vw] h-[70vw] sm:h-[40vw] md:h-[25vw] 4xs:mt-12 sm:mt-0 rounded-[100%] shadow-2xl bg-white z-20  "
                        >
                            <div className="w-[30%] h-[30%]  rounded-[100%] border-[2px] border-[#ebebeb] flex items-center justify-center bg-none shadow-xl bg-white absolute -top-[20%] left-[33%] hover:transform hover:transition-500 hover:scale-90 cursor-pointer">
                                <img src={Frontend} alt="" className=" transform scale-[0.8] " />
                            </div>

                            <div className="w-[30%] h-[30%] rounded-[100%] border-[2px] border-[#ebebeb] flex items-center justify-center bg-none shadow-xl bg-white absolute top-[45%] -left-[13%] hover:transform hover:transition-500 hover:scale-90 cursor-pointer">
                                <img src={Backend} alt="" className="transform scale-[0.8]" />
                            </div>

                            <div className="w-[50%] h-[45%] rounded-[100%] border-[2px] border-[#ebebeb] flex items-center justify-center bg-none shadow-xl bg-white absolute top-[26%] left-[24%] hover:transform hover:transition-500 hover:scale-90 cursor-pointer">
                                <img src={And} alt="" className="transform scale-[0.8]" />
                            </div>{" "}

                            <div className="w-[30%] h-[30%] rounded-[100%] border-[2px] border-[#ebebeb] flex items-center justify-center bg-none shadow-xl bg-white absolute top-[45%] left-[81%] hover:transform hover:transition-500 hover:scale-90 cursor-pointer">
                                <img src={Mobile} alt="" className=" transform scale-[0.8] rounded-[100%] " />
                            </div>
                        </motion.div>
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