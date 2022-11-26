import {useState} from "react"
import {Link as LinkS} from "react-scroll"
import {motion} from "framer-motion"
import NavData from "../../data/navData.js"

import "./navbar.css"



const Path = (props) => (
    <motion.path
        fill="transparent"
        strokeLinecap="round"
        strokeWidth="3"
        {...props}
    />
);


const variants = {
    show: {
      transform: "translateX(0em)",
      opacity: 1,
    },
    hide: {
      transform: "translateX(-5em)",
      opacity: 0,
    },
};

const transition = { 
    duration: 0.3 
};

const menuVariants = {
    open: {
      transform: "translateX(-3%)",
    },
    closed: {
      transform: "translateX(103%)",
    },
};
  
const menuTransition = {
    type: "spring",
    duration: 2,
    stiffness: 33,
    delay: 0.1,
};


const itemsVariants = {
    show: {
        ...variants.show,
        transition: {
            delay: 0.3,
            duration: 0.2
        }
    },
    hide: {
        ...variants.hide,
        transition: {
            delay: 0.05,
            duration: 0.05
        }
    }
}




const Navbar = () => {

    const [mobile, setMobile] = useState(false)
    const handleMobile = () => {setMobile(!mobile)}

    return (
        <div className="w-[100%] h-[80px] sticky top-0 z-50 overflow-clip 4xs:bg-white sm:bg-[rgba(255,255,255,0.2)] shadow-[0_4px_30px rgba(0,0,0,0.1)] sm:backdrop-blur overflow-hidden">
            <div className="w-[100%] h-[100%] 4xs:px-2 3xs:px-6 sm:px-24 flex flex-row justify-between content-center items-center">
                <div  className="flex font-['Dancing_Script'] font-bold text-4xl cursor-pointer ">
                    <LinkS 
                        to="about"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                    >
                        debbie.A
                    </LinkS>
                </div>

                <ul className="sm:w-[60%] lg:w-[40%] font-['Poppins'] 4xs:hidden sm:flex flex-row justify-evenly cursor-pointer ">
                    {
                        NavData.map((nav, id) => (
                            <li className="item transform transition duration-500 hover:scale-125 hover:text-red-500">
                                <LinkS
                                    key={id}
                                    to={nav.to}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={nav.offset}
                                    activeclassname="active"
                                >
                                    {nav.value}
                            </LinkS>
                        </li>
                        ))
                    }
                </ul>


                <div className="4xs:flex sm:hidden" >
                    <button onClick={() => handleMobile()} className="z-20 " >
                        <svg width="23" height="23" viewBox="0 0 23 23">
                            <Path
                                animate={mobile ? "open" : "closed"}
                                initial={false}
                                variants={{
                                    closed: { d: "M 2 2.5 L 20 2.5", stroke: "hsl(0, 0%, 0%)" },
                                    open: { 
                                        d: "M 3 16.5 L 17 2.5", 
                                        stroke: "hsl(0, 0%, 0%)",
                                    },
                                }}
                                transition={transition}
                            />

                            <Path
                                d="M 2 9.423 L 20 9.423"
                                stroke="hsl(0, 0%, 0%)"
                                animate={mobile ? "open" : "closed"}
                                initial={false}
                                variants={{
                                    closed: { opacity: 1 },
                                    open: { 
                                        opacity: 0,
                                    },
                                }}
                                transition={transition}
                            />
                                
                            <Path
                                animate={mobile ? "open" : "closed"}
                                initial={false}
                                variants={{
                                    closed: { d: "M 2 16.346 L 20 16.346", stroke: "hsl(0, 0%, 0%)" },
                                    open: { 
                                        d: "M 3 2.5 L 17 16.346", 
                                        stroke: "hsl(0, 0%, 0%)" ,
                                    },
                                }}
                                transition={transition}
                            />
                        </svg>
                    </button>

                    <motion.div
                        initial={false}
                        animate={mobile ? "open" : "closed"} 
                        variants={menuVariants}
                        transition={menuTransition}
                        className="
                        4xs:w-[103vw] md:w-[50vw] h-full bg-white z-10 fixed overflow-auto top-0 left-0 transform translate-x-0  " 
                        >

                        <div className='flex flex-col mt-4'>
                            <div className="w-full flex flex-col">
                                <ul className="py-12 pl-[30px] w-full flex flex-col ">

                                    {
                                        NavData.map((nav, id)=> (
                                            <LinkS 
                                                key={id}
                                                to={nav.to}
                                                smooth={true}
                                                duration={nav.duration}
                                                spy={true}
                                                exact='true'
                                                offset={nav.offset}
                                                activeclassname="active"
                                                onClick={()=>handleMobile()}
                                            >
                                                <motion.li initial={false} animate={mobile ? "show" : "hide"} variants={itemsVariants} className="text-2xl h-[42px] flex items-center cursor-pointer mt-8 " >
                                                    {nav.value}
                                                </motion.li>
                                            </LinkS>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Navbar