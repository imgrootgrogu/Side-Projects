import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";


const items = [
    {
        id:1,
        title: "NASA Solar Data with SQL",
        img: "https://images.pexels.com/photos/41951/solar-system-emergence-spitzer-telescope-telescope-41951.jpeg?auto=compress&cs=tinysrgb&w=1200",
        desc: "Provide better data about the top 50 solar flares recorded so far than that shown by SpaceWeatherLive.com. ",
        address: "https://github.com/imgrootgrogu/School-projects/blob/main/DataScience/Scraping_NASA_solar.ipynb"

    },
    {
        id:2,
        title: "Baseball Game Analysis with Graghs",
        img: "https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=1200",
        desc: "Apply data wrangling and exploratory data analysis skills to baseball data.",
        address: "https://github.com/imgrootgrogu/School-projects/blob/main/DataScience/baseball%20game%20analysis.ipynb"
    
    },
    {
        id:3,
        title: "Nintendo and Rockstar Stock Price Prediction with NNW",
        img: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1200",
        desc: "This project utilized libraries such as pandas, seaborn, matplotlib, sci-kit learn, tensorflow, and streamlit for data prediction, manipulation, visualization, and web application production.",
        address: "https://github.com/imgrootgrogu/602_final_project"
    
    },
    {
        id:4,
        title: "Amazon Food Review Analysis with NLP",
        img: "https://images.pexels.com/photos/19736979/pexels-photo-19736979/free-photo-of-woman-looking-at-pictures-of-dishes-on-a-tablet.jpeg?auto=compress&cs=tinysrgb&w=1200",
        desc: "Focuses on natural language processing (NLP) by working on a basic text analysis task with the Amazon Fine Foods dataset.",
        address: "https://github.com/imgrootgrogu/School-projects/blob/main/DataScience/fine%20foods%20review.ipynb"
    
    },

];

const Single = ({item}) => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref, 
        // offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return <section>
        <div className="container">
          <div className="wrapper">
            <div className="imageContainer" ref={ref}><img src={item.img} alt="" /></div>
            <motion.div className="textContainer" style={{y}}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <a href={item.address}><button>More</button></a>
            </motion.div>
            </div>
        </div>
    </section>;

    
};

const Portfolio = () => {
    

    const ref= useRef();

    const {scrollYProgress} = useScroll({
        target: ref, 
        offset: ["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (

        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item)=>(
              <Single item={item} key={item.id} />
        ))}
        </div>
        
    );
    
};

export default Portfolio