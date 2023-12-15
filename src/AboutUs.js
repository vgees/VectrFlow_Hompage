import React from "react";
import "./AboutUs.css";
import mission from "./public/mission.png";
import approach from "./public/Approach.png";
import vfe from "./public/freeflow.png";
import qa from "./public/quality.svg";
import collab from "./public/collaboration.svg";
import exp from "./public/expertise.svg";
const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="div">
                <div className="overlap">
                    <div className="frame-3">
                        <div className="frame-4">
                            <div className="text-wrapper-3">About Us</div>
                            <p className="p">
                                Welcome to VectrFlow, where we transform unstructured data into insightful narratives, unlocking the power of information for your Generative AI applications. <br></br> At VectrFlow, we understand the value of meaningful analysis and are dedicated to guiding our users through every step of the process to ensure relevance and accuracy.
                            </p>

                        </div>
                    </div>
                </div>
                <div className="group">
                    <div className="frame-5">
                        <div className="frame-6">
                            <div className="frame-7">
                                <div className="rectangle" />
                                <div className="text-wrapper-5">
                                    Mission Statement</div>
                            </div>
                        </div>
                        <p className="text-wrapper-6">
                            At the core of our mission is the commitment to convert unstructured data into clean, in-depth datasets, paving the way for the seamless integration of Generative AI applications. We believe in the potential of data to drive innovation, and our mission is to empower businesses with the tools they need to harness this potential fully.
                        </p>
                        <div className="overlap-2">

                            <img className="polygon" alt="Polygon" src={mission} />

                        </div>

                    </div>
                    <div className="overlap-3">
                        <div className="overlap-4">

                            <img className="polygon-2" alt="Polygon" src={approach} />

                        </div>

                        <div className="frame-15">
                            <div className="frame-16">
                                <div className="frame-17">
                                    <div className="rectangle-2" />
                                    <p className="text-wrapper-8">Our Approach</p>
                                </div>
                                <p className="text-wrapper-9">
                                    Unleashing Insights from Unstructured Data
                                    We specialize in the conversion of unstructured data into actionable insights. Our team collaborates closely with users, incorporating their input throughout the analysis process to guarantee the relevance of our findings. By focusing on understanding the unique requirements of each project, we ensure that our clients receive tailored solutions that align with their objectives</p>
                            </div>
                            {/* <div className="frame-8">
                                <div className="overlap-group-wrapper">
                                    <div className="overlap-group">
                                        <div className="ellipse" />
                                        <div className="ellipse-2" />
                                    </div>
                                </div>
                                <div className="text-wrapper-7">View More</div>
                            </div> */}
                        </div>
                    </div>
                    <div className="frame-18">
                        <div className="frame-6">
                            <div className="frame-7">
                                <div className="rectangle" />
                                <p className="text-wrapper-5">
                                    Free Flow of
                                    <br />
                                    Vector Embeddings
                                </p>
                            </div>

                            <p className="text-wrapper-10">
                                Once our initial analysis is complete, we go the extra mile with multiple quality checks. These tests are an integral part of our analysis package, ensuring the accuracy and reliability of the results. Our commitment to quality extends beyond the analysis phase, as we deliver the findings to our clients with a certification of the entire process.
                            </p>

                        </div>
                        {/* <div className="frame-8">
                            <div className="overlap-group-wrapper">
                                <div className="overlap-group">
                                    <div className="ellipse" />
                                    <div className="ellipse-2" />
                                </div>
                            </div>
                            <div className="text-wrapper-7">View More</div>
                        </div> */}
                    </div>
                    <div className="overlap-wrapper">
                        <div className="overlap-5">

                            <img className="polygon-3" alt="Polygon" src={vfe} />

                        </div>
                    </div>

                </div>
                <div className="frame-25">
                    <div className="frame-26">
                        <div className="text-wrapper-11">Why choose VectrFlow?</div>
                        {/* <img className="frame-23" alt="Frame" src="frame-11.svg" /> */}
                    </div>
                    <div className="frame-27">
                        <div className="frame-28">
                            <img className="frame-29" alt="Frame" src={exp} />
                            <div className="frame-30">
                                <div className="text-wrapper-14">Expertise</div>
                                <p className="text-wrapper-15">
                                    Our team comprises experts in data analysis and Generative AI, ensuring that you receive top-notch insights for your applications.
                                </p>
                            </div>
                        </div>
                        <div className="frame-28">
                            <img className="frame-31" alt="Frame" src={collab} />
                            <div className="frame-30">
                                <div className="text-wrapper-14">Collaboration</div>
                                <p className="text-wrapper-15">
                                    We believe in working hand-in-hand with our clients, fostering a collaborative approach to address unique challenges and achieve common goals.
                                </p>
                            </div>
                        </div>
                        <div className="frame-28">
                            <img className="frame-32" alt="Frame" src={qa} />
                            <div className="frame-30">
                                <div className="text-wrapper-14">Quality Assurance</div>
                                <p className="text-wrapper-15">
                                    Our rigorous quality checks and certification process are designed to instill confidence in the accuracy and reliability of our results.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rectangle-3" />
            </div>
        </div>
    );
};

export default AboutUs;
