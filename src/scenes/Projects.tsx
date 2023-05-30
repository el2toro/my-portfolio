import { motion } from "framer-motion"
import LineGradient from "../components/LineGradient"

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

const projectVariant = {
     hidden: { opacity: 0, scale: 0.8 },
     visible: { opacity: 1, scale: 1 }
}

const Project = ({title}: any) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
                           bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

   const projectTitle =  title.split(" ").join("-").toLowerCase();

   return (
    <motion.div variants={projectVariant} className="relative">
        <div className={overlayStyles}>
           <p className="text-2xl font-playfair">{title}</p>
           <p className="mt-7">
           Pellentesque et enim hendrerit, convallis metus ullamcorper, iaculis eros. 
           Morbi dolor nisi, dignissim vitae lorem eu, molestie pellentesque metus. 
           </p>
           <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle}/>
        </div>
    </motion.div>
   )
}

const Projects = () => {
    return (
        <section id="projects pt-48 pb-48">
          {/* HEADINGS */}
          <motion.div className="md:w-1/3 mx-auto text-center" 
                            initial="hidden" 
                            whileInView="visible" 
                            viewport={{once: true, amount: 0.5}}
                            transition={{duration: 0.5}}
                            variants={{
                                hidden: {opacity: 0, y: -50},
                                visible: {opacity: 1, y: 0},
                            }}>
                    <div>
                        <p className="font-payfair font-semibold text-4xl">
                           <span className="text-red">PRO</span>JECTS
                        </p> 
                    </div> 
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-1/3"/> 
                    </div> 
                    <p className="mt-10 mb-10">
                    In hac habitasse platea dictumst. 
                    Morbi in elit tincidunt, maximus lectus maximus, consectetur odio. 
                    Maecenas mattis egestas est. Duis a laoreet sem. 
                    </p>                      
           </motion.div>
           {/* PROJECTS */}
           <div className="flex justify-center">
                <motion.div className="sm:grid sm:grid-cols-3" 
                            initial="hidden" 
                            whileInView="visible" 
                            viewport={{once: true, amount: 0.5}}
                            variants={container}>
                    <div className="flex justify-center text-center items-center p-10 bg-red 
                                    max-p-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
                       BEATIFUL USER INTERFACE
                    </div>
                    <Project title="Project 1" />
                    <Project title="Project 2" />

                    { /* ROW 2 */}
                    <Project title="Project 3" />
                    <Project title="Project 4" />
                    <Project title="Project 5" />

                    { /* ROW 3 */}
                    <Project title="Project 6" />
                    <Project title="Project 7" /> 

                    <div className="flex justify-center text-center items-center p-10 bg-red 
                                    max-p-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
                       SMOOT USER EXPERIENCE
                    </div>
                </motion.div>
           </div>
        </section>
    )
}

export default Projects