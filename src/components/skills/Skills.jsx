import { useRef, useState } from "react";
import React from "react";
import "./skills.scss";
import { motion, useInView } from "framer-motion";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },

    animate:{
        x: 0,
        opacity: 1,
        y: 0,
        transition:{
            duration: 2,
            staggerChildren: 0.1,
        },
    },

}

const Skills = () => {
    const ref = useRef();

    const isInView = useInView(ref, { margin: "-100px"});
    return (
        <motion.div 
            className="skills" 
            variants={variants} 
            initial="initial" 
            ref={ref}
            animate={isInView && "animate"}>
            <motion.div className="textContainer"  variants={variants}>
                <p>Transforming data into insights and algorithms 
                    <br />molding models into solutions
                </p>
                <hr></hr>
            </motion.div>
            <motion.div className="titleContainer"  variants={variants}>

                <div className="title">
                    <img src="/equations.jpg" alt="" />
                    <h1><motion.b whileHover={{color: "aquamarine"}}>Unique</motion.b> Ideas</h1>
                </div>
                <div className="title">
                    <h1><motion.b whileHover={{color: "aquamarine"}}>Professional</motion.b> Skills.</h1>
                    <button><a href="https://github.com/imgrootgrogu">My Git Repo</a></button>
                </div>
            </motion.div>
            <motion.div className="listContainer"  variants={variants}>
                <motion.div className="box" whileHover={{background:"lightgray", color: "#ff7477"}}>
                    <h2>SQL</h2>
                    <div style={{ width: 100, height: 200 }}>
                        <CircularProgressbar 
                        value={90} 
                        text="90%"
                        styles={{
                            path:{
                                stroke: "#ffee93"
                            },
                            trail: {
                                stroke: '#d6d6d6',
                            },
                            text: {
                                fill: "white"
                            }
                        }}
                        />
                    </div>
                    <h2>Java Script</h2>
                    <div style={{ width: 100, height: 200 }}>
                        <CircularProgressbar value={60} text="60%" styles={{
                            path:{
                                stroke: "#abc4ff"
                            },
                            trail: {
                                stroke: '#d6d6d6',
                            },
                            text: {
                                fill: "white"
                            }
                        }}/>
                    </div>
                </motion.div>
                <motion.div className="box" whileHover={{background:"lightgray", color: "#ff7477"}}>
                    <h2>CSS</h2>
                    <div style={{ width: 100, height: 200 }}>
                        <CircularProgressbar value={60} text="60%" styles={{
                            path:{
                                stroke: "#b0efef"
                            },
                            trail: {
                                stroke: '#d6d6d6',
                            },
                            text: {
                                fill: "white"
                            }
                        }}/>
                    </div>
                    <h2>MATLAB</h2>
                    <div style={{ width: 100, height: 200 }}>
                        <CircularProgressbar value={75} text="75%" styles={{
                            path:{
                                stroke: "#f591cd"
                            },
                            trail: {
                                stroke: '#d6d6d6',
                            },
                            text: {
                                fill: "white"
                            }
                        }}/>
                    </div>
                </motion.div>
                <motion.div className="box" whileHover={{background:"lightgray", color: "#ff7477"}}>
                    <h2>Python</h2>
                    <div style={{ width: 100, height: 200 }}>
                        <CircularProgressbar value={90} text="90%" styles={{
                            path:{
                                stroke: "#fec8d8"
                            },
                            trail: {
                                stroke: '#d6d6d6',
                            },
                            text: {
                                fill: "white"
                            }
                        }}/>
                    </div>
                    <h2>HTML</h2>
                    <div style={{ width: 100, height: 200 }}>
                        <CircularProgressbar value={60} text="60%" styles={{
                            path:{
                                stroke: "#9fe481"
                            },
                            trail: {
                                stroke: '#d6d6d6',
                            },
                            text: {
                                fill: "white"
                            }
                        }}/>
                    </div>
                </motion.div>
                <motion.div className="box" whileHover={{background:"lightgray", color: "#ff7477"}}>
                    <h2>NLP</h2>
                    <div style={{ width: 100, height: 200 }}>
                        <CircularProgressbar value={80} text="80%" styles={{
                            path:{
                                stroke: "#90f1ef"
                            },
                            trail: {
                                stroke: '#d6d6d6',
                            },
                            text: {
                                fill: "white"
                            }
                        }}/>
                    </div>
                    <h2>CV</h2>
                    <div style={{ width: 100, height: 200 }}>
                        <CircularProgressbar value={70} text="70%" styles={{
                            path:{
                                stroke: "#dc95dd"
                            },
                            trail: {
                                stroke: '#d6d6d6',
                            },
                            text: {
                                fill: "white"
                            }
                        }}/>
                    </div>
                </motion.div>
                <motion.div className="box" whileHover={{background:"lightgray", color: "#ff7477"}}>
                    <h2>PMP</h2>
                    <div style={{ width: 100, height: 200 }}>
                        <CircularProgressbar value={95} text="95%" styles={{
                            path:{
                                stroke: "#c997c6"
                            },
                            trail: {
                                stroke: '#d6d6d6',
                            },
                            text: {
                                fill: "white"
                            }
                        }}/>
                    </div>
                    <h2>Tensorflow</h2>
                    <div style={{ width: 100, height: 200 }}>
                        <CircularProgressbar value={80} text="80%" styles={{
                            path:{
                                stroke: "#ffc894"
                            },
                            trail: {
                                stroke: '#d6d6d6',
                            },
                            text: {
                                fill: "white"
                            }
                        }}/>
                    </div>
                </motion.div>

            </motion.div>
        </motion.div>
    )
}

export default Skills