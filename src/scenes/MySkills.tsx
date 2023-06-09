import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";



const MySkills = () => {
    const isAboveMediaScreens = useMediaQuery("(min-width:1060px)");
    return (
        <section id="skills" className="pt-10 pb-24">
            {/* HEADER AND IMAGE SECTION */}
           <div className="md:flex md:justify-between md:gap-16 mt-32">
                <motion.div className="md:w-1/3" 
                            initial="hidden" 
                            whileInView="visible" 
                            viewport={{once: true, amount: 0.5}}
                            transition={{duration: 0.5}}
                            variants={{
                                hidden: {opacity: 0, x: -50},
                                visible: {opacity: 1, x: 0},
                            }}>
                    <p className="font-payfair font-semibold text-4xl md-5">
                      MY <span className="text-red">SKILLS</span>
                    </p>  
                    <LineGradient width="w-1/3"/>  
                    <p className="mt-10 mb-7">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p>                      
                </motion.div>
               <div className="mt-16 md:mt-0">
                 {isAboveMediaScreens ? (
                    <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 
                                before:w-full before:h-full
                                before:border-2 before:border-blue before:z-[-1]">

                    <img alt="skills" 
                         src="../assets/skills-image.png" 
                         className="z-10"/>
                </div>
                 ) : (
                    <img alt="skills" 
                         src="../assets/skills-image.png" 
                         className="z-10"/>
                 )}
              </div>
           </div>
           {/* SKILLS SECTION */}
           <div className="md:flex md:justify-between mt:16 gap-32">
             {/* EXPERIENCE */}
             <motion.div className="md:w-1/3 mt:10" 
                            initial="hidden" 
                            whileInView="visible" 
                            viewport={{once: true, amount: 0.5}}
                            transition={{duration: 0.5}}
                            variants={{
                                hidden: {opacity: 0, y: 50},
                                visible: {opacity: 1, y: 0},
                            }}>
                <div className="relative h-32">
                    <div className="z-10">
                       <p className="font-playfair font-semibold text-5xl ">01</p>
                       <p className="font-playfair font-semibold text-3xl mt-3">
                        Experience
                       </p>
                    </div>
                    <div className="w-1/2 md-w3/4 bg-blue absolute right-0 top-0 z-[-1]"/>
                </div>                
               <p className="mt-5">
                 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               </p>
             </motion.div>

              {/* Innovative */}
              <motion.div className="md:w-1/3 mt:10" 
                            initial="hidden" 
                            whileInView="visible" 
                            viewport={{once: true, amount: 0.5}}
                            transition={{delay: 0.2, duration: 0.5}}
                            variants={{
                                hidden: {opacity: 0, y: 50},
                                visible: {opacity: 1, y: 0},
                            }}>
                <div className="relative h-32">
                    <div className="z-10">
                       <p className="font-playfair font-semibold text-5xl ">02</p>
                       <p className="font-playfair font-semibold text-3xl mt-3">
                        Innovative
                       </p>
                    </div>
                    <div className="w-1/2 md-w3/4 bg-red absolute right-0 top-0 z-[-1]"/>
                </div>                
               <p className="mt-5">
               Phasellus sit amet risus dapibus, feugiat mauris nec, rhoncus massa. 
               Proin eget commodo nulla. Cras vel laoreet urna. Maecenas suscipit lorem id consectetur malesuada.
               </p>
             </motion.div>

             {/* IMAGINATIVE */}
             <motion.div className="md:w-1/3 mt:10" 
                            initial="hidden" 
                            whileInView="visible" 
                            viewport={{once: true, amount: 0.5}}
                            transition={{delay: 0.4, duration: 0.5}}
                            variants={{
                                hidden: {opacity: 0, y: 50},
                                visible: {opacity: 1, y: 0},
                            }}>
                <div className="relative h-32">
                    <div className="z-10">
                       <p className="font-playfair font-semibold text-5xl ">03</p>
                       <p className="font-playfair font-semibold text-3xl mt-3">
                       Imaginative
                       </p>
                    </div>
                    <div className="w-1/2 md-w3/4 bg-yellow absolute right-0 top-0 z-[-1]"/>
                </div>                
               <p className="mt-5">
               Vivamus ornare tortor nisi, a hendrerit tellus rutrum et. 
               Quisque et felis id massa tincidunt porta sit amet at augue. 
               Ut a vehicula erat, eu molestie mauris. Sed a feugiat arcu.
               </p>
             </motion.div>
           </div>
        </section>
    )
}

export default MySkills