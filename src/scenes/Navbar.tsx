import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import useMediaQuery from '../hooks/useMediaQuery';

type Props = {
    page: string,
    selectedPage: string,
    setSelectedPage: any
}

const Link = ({page, selectedPage, setSelectedPage} : Props) => {
    const lowerCasePage = page.toLowerCase();
    return (
       <AnchorLink
       className={`${selectedPage === lowerCasePage ? "text-yellow" : ""}
       hover:text-yellow transition duration-500`}
       href={`#${lowerCasePage}`}
       onClick={() => setSelectedPage(lowerCasePage)}>
        {page}
       </AnchorLink>
    )
}

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}: any) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreen = useMediaQuery("(min-width: 768px)");
    const navBarBackground = isTopOfPage ? "" : "bg-red";
    return (
        <nav className={`${navBarBackground} z-40 w-full fixed top-0 py-6`}>
           <div className="flex items-center justify-between mx-auto w-5/6">
               <h4 className="font-playfair text-3xl font-bold">JE</h4>
               {/*Desktop Nav*/}
               {isAboveSmallScreen ? (
               <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
                <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Skills" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Testimonials" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
               </div>) : (
                <button className="rounded-full bg-red p-2" 
                    onClick={() => setIsMenuToggled(!isMenuToggled)}>
                    <img alt="menu-icon" src="../assets/menu-icon.svg"/>
                </button>
               )}
           </div>

           {/* MOBILE MENU POPUP */}
           {!isAboveSmallScreen && isMenuToggled && (
            <div className="fixed flex-col right-0 bottom-0 h-full bg-blue w-[300px]">
                {/* CLOSE ICON */}
                <div className="flex justify-end p-12">
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                       <img alt="menu-icon" src="../assets/close-icon.svg"/>
                    </button>                   
                </div>
                {/* MENU ISTEMS */}
                <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
                <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Skills" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Testimonials" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                </div>
            </div>
           )}
        </nav>
    )
}

export default Navbar;