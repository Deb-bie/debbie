

const Contact = () => {
    return (
        <div id="contact" className="w-[100%] h-[100%] pt-24 pb-12  overflow-hidden">
            <div className="w-[100%] h-[100%] mb-8 4xs:px-2 3xs:px-6 sm:px-24 gap-y-8 flex 4xs:flex-col sm:flex-row justify-between content-center items-center ">
                <div className="4xs:w-[100%] sm:w-[50%] h-[100%] flex">image</div>

                <div className="4xs:w-[100%] sm:w-[50%] h-[100%] mb-32 flex flex-col  ">
                    <h1 className="text-4xl pb-12 ">Let's work together</h1>

                    <p className="w-[80%] text-base pb-12">
                        I am always happy to work on new projects while improving
                        on existing ones.
                    </p>

                    <div className="w-[80%] gap-y-4 flex flex-wrap flex-row justify-evenly content-center items-center">
                        <button className="px-4 py-2 hover:bg-teal-200 border-2 border-teal-200 ">a</button>

                        <button className="px-4 py-2 hover:bg-teal-200 border-2 border-teal-200 ">b</button>

                        <button className="px-4 py-2 hover:bg-teal-200 border-2 border-teal-200 ">c</button>
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