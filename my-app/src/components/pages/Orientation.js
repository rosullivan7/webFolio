import React from 'react'
import ReactPlayer from "react-player"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from "@fortawesome/fontawesome-free-solid"

function Orientation() {
    return (
        <div class="orientation-class">
            <h1 class="h1-orientation">Orientation Web App re-design for Swinburne</h1>

            <div class="container">
                
                {/* OVERVIEW */}
                <div class="row">

                    <div class="col">
                        <h1>Overview</h1>
                    </div>
                    <div class="col">
                        <p>
                            Created for a University final year project, the main driving force behind the creation
                            of this project was the lack of design and clarity in the current orientation website.
                            The ultimate purpose of the website is to provide students useful information about orientation
                            and getting started at University, as well as incentivise students to attend their relevant social
                            and academic events.
                        </p>
                        <p>
                            Key deliverables include:
                        </p>
                        <p>
                            Responsive design, user-friendly, gamified features,
                            simple aesthetic design, functional login and setup pages and categorised events.
                        </p>

                    </div>

                </div>
                {/* VIDEO */}
                <div class="row">
                    <div class="col">
                        <ReactPlayer url="https://youtu.be/OL7AHU8zhMQ"/>
                    </div>
                    <div class="col">
                        <h1>Project Presentation</h1>
                        <p>See the implementation of key features and the transformation from old website. </p>

                    </div>

                </div>

                <div class="row">
                    <div class="col">
                    </div>
                    <div class="col"></div>

                </div>
                    
                    <h1>Process</h1>

                </div>
            

        </div>
       
    )
}


export default Orientation;