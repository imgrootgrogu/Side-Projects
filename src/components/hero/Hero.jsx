import "./hero.scss"
import { motion } from "framer-motion"

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,

    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }

    },
    scrollButton:{
        opacity: 0,
        y: 10,
        transition:{
            duration: 2,
            repeat: Infinity
        }
    }
}

const sliderVariants = {
    initial: {
        x: 0, 
    },
    animate: {
        x: "-430%",
        repeat: Infinity,
        repeatType: "mirror",
        transition: {
            duration: 20,
        },

    },
}

const Hero = () => {
    return (
        <div className="hero">
          <div className="wrapper">
            <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                <motion.h2 variants={textVariants}>QIONG LI</motion.h2>
                <motion.h1 variants={textVariants}>Machine Learning and AI Engineer</motion.h1>
                {/* <motion.div className="buttons" variants={textVariants}>
                    <motion.button variants={textVariants}>See the Latest Work</motion.button>
                    <motion.button variants={textVariants}>Contact Me</motion.button>
                </motion.div> */}
                <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
            </motion.div>
          </div>  
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                Cat Lover and Tech Ethusiast
                
            </motion.div> 
            <div className="imageContainer">
                <img src="/studio-ghibli.png" alt="" />
            </div>

         
        </div>
    )
}

export default Hero