import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from "@fortawesome/fontawesome-free-solid"

function Home(){
        return (
            <div class="about-class">
                
                {/* About me */}
                <div class="row row-padding">
                    <div class="col-lg-8 col-centered">
                        <h1 class="h1-about">About me.</h1>
                        <p class="p-about">Hi! My name is Rourke, I am a Computer Science Graduate based in Melbourne. 
                        I am a passionate programmer and am particularly interested in software development, cloud computing and AI. </p>
                    </div>
                </div>

                {/* Skills heading */}
                <div class="row row-padding">
                    <div class="col-lg-8 col-centered">
                        <h1 class="h1-about">Skills</h1>
                    </div>
                </div>
                {/* Skills columns */}
                <div class="row row-padding">
                    <div class="col-md-4 col-padding">
                        <div class="card text-white bg-dark mb-3">
                            <div class="card-body">
                                <div class="icon-style">
                                    <FontAwesomeIcon icon={Icons.faCode}  size="3x"  />
                                </div>
                                <h2 class="h2-skill">Development</h2>
                                <p class="p-skills">Python, C++, C#, Java, Pascal</p>
                            </div>
                        </div>    
                    </div>
                    <div class="col-md-4 col-padding">
                    <div class="card text-white bg-dark mb-3">
                            <div class="card-body">
                                <div class="icon-style">
                                    <FontAwesomeIcon icon={Icons.faDatabase}  size="3x"  />
                                </div>
                                <h2 class="h2-skill">Web Development</h2>
                                <p class="p-skills">HTML, CSS, JavaScript, Java Springboot, Bootstrap, AngularJS, React.js, Vue.js, PHP, SQL</p>
                            </div>
                        </div> 
                    </div>
                    <div class="col-md-4 col-padding">
                    <div class="card text-white bg-dark mb-3">
                            <div class="card-body">
                            <div class="icon-style">
                                    <FontAwesomeIcon icon={Icons.faCodeBranch}  size="3x"  />
                                </div>
                                <h2 class="h2-skill">Dev Tools</h2>
                                <p class="p-skills">Git, Android Studio, Unity</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
}

export default Home;
