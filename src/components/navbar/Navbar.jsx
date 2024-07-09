import { motion } from "framer-motion"
import "./navbar.scss"
import Sidebar from "../sidebar/Sidebar"


const Navbar = () => {
    return (
        <div className="navbar">
            
            <Sidebar/>
            <div className="wrapper">
                <motion.span 
                  initial={{opacity:0, scale:0.5}} 
                  animate={{opacity:1, scale:1}} 
                  transition={{duration:0.5}}
                  >
                    University of Maryland
                </motion.span>
                <div className="social">
                    <a href="https://github.com/imgrootgrogu/dc_projects"><img src="/github.png" alt="" /></a>
                    {/* <a href="#"><img src="/instagram.png" alt="" /></a>
                    <a href="#"><img src="/linkedin.png" alt="" /></a> */}
                    <a href="https://www.facebook.com/sophia.lee.9026"><img src="/facebook.png" alt="" /></a>
                </div>

            </div>
        </div>
    )
}

export default Navbar