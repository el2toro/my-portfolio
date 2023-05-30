import { useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import { motion } from "framer-motion";

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreen = useMediaQuery('(min-width: 1060px)')

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0) setIsTopOfPage(true)
      if(window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll)
    return window.removeEventListener("scroll", handleScroll)
  }, []);

   return (
    <div className="app bg-deep-blue">
      <Navbar isTopOfPage={isTopOfPage} 
              selectedPage={selectedPage} 
              setSelectedPage={setSelectedPage}
      />

      <div className="w5/6 mx-auto md:h-full">
        {isAboveMediumScreen && (
          <DotGroup selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage} />
        )}
        <motion.div
          
          onViewportEnter={() => setSelectedPage("home")}
        >
          <Landing setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
