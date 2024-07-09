import "./about me.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const textVariants = {
    initial: {
        y: 300,
        opacity: 0,

    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }

    },

}

const Aboutme = () => {
    const ref = useRef();

    const isInView = useInView(ref, { margin: "100px"});

    return (
        <motion.div className="aboutme"
                    variants={textVariants}
                    initial="initial"
                    ref={ref}
                    animate={isInView && "animate"}>
            <motion.div className="textContainer" variants={textVariants}>
                <motion.h1 variants={textVariants} whileHover={{color: "#88cff1"}}>Lens Passion</motion.h1>
                <motion.p variants={textVariants} whileHover={{color: "#ffcccb"}}>Beyond the realms of coding and engineering, I find joy and creative fulfillment through my passion for photography. Capturing moments has become a delightful pastime, allowing me to freeze the beauty of life in each frame. 
                
                </motion.p>

            </motion.div>
            <div className="imageContainer">
                <img src="/DSC_8007_edited.jpg" alt=""/>
                <img src="/2022 snow7.jpg" alt=""/>
                <img src="/wuhanbridge.jpg" alt=""/>
                <img src="/dana.jpg" alt=""/>
                <img src="/xiongchudadao.jpg" alt=""/>
                <img src="/chongqing.jpg" alt=""/>
                <img src="/shangrila.jpg" alt=""/>
                <img src="/osaka.jpg" alt=""/>
                <img src="/grass.jpg" alt=""/>

            </div>

        </motion.div>
    )
}

export default Aboutme