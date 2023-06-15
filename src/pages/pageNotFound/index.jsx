import React from 'react'
import NotFound from "../../assets/404.svg"
import { Link } from 'react-router-dom'





const PageNotFound = () => {
  return (
    <div className="w-[100%] h-[100vh] flex flex-col align-middle content-center justify-center bg-[#dcedc82e] xl:px-[5vw] 2xl:px-[10vw] ">
        <div>
            <img src={NotFound} alt='pagenotfound' className='w-[100%] h-[50%] mt-20 '  />
            <p className='text-[18px] mt-20 text-center'>The page you are looking for is not available.... Click
                <span className='text-[blue] cursor-pointer' >
                    <Link to="/"> here </Link>
                </span> 
                to go back to the main page
            </p>
        </div>
    </div>
  )
}

export default PageNotFound