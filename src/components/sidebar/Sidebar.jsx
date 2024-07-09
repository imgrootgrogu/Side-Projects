import "./sidebar.scss"
import ToggleButton from "./toggleButton/ToggleButton"
import Links from "./links/Links"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

const variants = {
    open: {
        clipPath: "circle(1200px at 50px 50px)",
        transition:{
            type: "spring",
            stiffness: 20,
        }
    },
    closed: {
        clipPath: "circle(30px at 50px 50px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
};

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const sidebarRef = useRef(null);
    const closeSidebar = () => {
        setOpen(false);
    };

    const handleOutsideClick = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
          closeSidebar();
        }
      };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    []}, 
    
    );
    

    return <motion.div className="sidebar" ref={sidebarRef} animate={open ? "open" : "closed"}>
        <motion.div className="bg" variants={variants}>
            <Links/>
        </motion.div>
        <ToggleButton setOpen={setOpen}/>
    </motion.div>
    
}

export default Sidebar