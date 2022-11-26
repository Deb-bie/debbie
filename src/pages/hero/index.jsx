import React from 'react'
import AboutImage from "../../assets/about.png"


const Hero = () => {
  return (
    <div id="about" className="w-[100%] h-[100%] z-0 overflow-hidden ">
        <div className="w-[100%] h-[100%] 4xs:px-2 3xs:px-6 sm:px-24 4xs:mt-0 sm:mt-12 sm:mb-12 gap-y-12 flex 4xs:flex-col-reverse md:flex-row justify-between  ">
            <div className="4xs:w-[100%] sm:w-[50%] flex flex-col justify-center gap-4">
                <p className="mb-4 text-4xl 4xs:text-center ">Hi, I'm Deborah 👋🏽</p>
                <p className="text-xl my-4 leading-[40px] ">A fullstack developer with experience in building web and mobile applications using modern technologies. </p>
                <p className="text-base leading-[30px] ">
                    I have a computer engineering background with  proficiency in Python and JavaScript 
                    (ReactJs). I have worked with Agile Project Management and I'm interested in Java 🙃 
                    and volunteering in tech communities 😍.
                </p>
            </div>

            <div className="4xs:w-[100%] sm:w-[40%] flex flex-row justify-center items-start content-center">
                <img src={AboutImage} alt="about" className="object-contain" />
            </div>
        </div>
    </div>
  )
}

export default Hero