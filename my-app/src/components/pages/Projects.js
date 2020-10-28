import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from "@fortawesome/fontawesome-free-solid"

function Projects() {
    return (
        <div class="proj-class">
            <h1 class="h1-proj">Projects</h1>
            <div class="tbl-container">
                <table class="table table-dark proj-table" id="proj-tbl">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col" class="tbl-link">Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Orientation Web App</th>
                            <td>Re-designed and developed Orientation Web Application for University as a final year project with a team of students.</td>
                            <td class="tbl-link"><button class="proj-btn">View</button></td>
                        </tr>
                        <tr>
                            <th scope="row">Tool Management System</th>
                            <td>Built an Internal Tool Management System with a team as part of an international internship program.</td>
                            <td class="tbl-link"><button class="proj-btn">View</button></td>
                        </tr>
                        <tr>
                            <th scope="row">Example</th>
                            <td>Example description of project I have built.</td>
                            <td class="tbl-link"><button class="proj-btn">View</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default Projects;