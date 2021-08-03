import ModeContext from '../../Context/index'
import {AiOutlineLink} from 'react-icons/ai'
import { AiFillHtml5} from "react-icons/ai"
import { DiCss3,DiJavascript1, DiReact } from 'react-icons/di'
import './index.css'

const Projects = () => {
    return(
    <ModeContext.Consumer>
        {value=>{
            const {activeMode} = value
            const mode = activeMode ? "dark" : "light"
            const cardMode = mode === 'dark' ? 'project-item-dark' : 'project-item-light'
            const renderProjects = () => {
                return(
                <div className={`projects-main-container ${mode}`}>
                    <div className="projects-landing-section">
                        <div className="projects-landing-description">
                            <h1>Projects</h1>
                            <p className="projects-landing-description-paragraph">My projects makes use of vast variety of latest technology tools.</p>
                        </div>
                        <div className="projects-landing-image">
                            <h1>Image</h1>
                        </div>
                    </div>
                    <div className="project-list-container">
                        <div className={`${cardMode}`}>
                            <div className="card-heading-container">
                                <h3>Appointment</h3>
                                <AiOutlineLink className="link-item" />
                            </div>
                            <div className="project-technologies-container">
                                <div className="div">
                                    <h5 className="text">Html</h5>
                                    <AiFillHtml5 className="project-technology-item html" />
                                </div>
                                <div className="div">
                                    <h5 className="text">CSS</h5>
                                    <DiCss3 className="project-technology-item css" />
                                </div>
                                <div className="div">
                                    <h5 className="text">Javascript</h5>
                                    <DiJavascript1 className="project-technology-item js" />
                                </div>
                                <div className="div">
                                    <h5 className="text">React</h5>
                                    <DiReact className="project-technology-item react" />
                                </div>
                            </div>
                            <p className="project-card-description">A web App that store all the appointments at one place, loaded with new features such as starring, filternig.</p>
                        </div>
                        <div className={`${cardMode}`}>
                            <div className="card-heading-container">
                                <h3>Appointment</h3>
                                <AiOutlineLink className="link-item" />
                            </div>
                            <div className="project-technologies-container">
                                <div className="div">
                                    <h5 className="text">Html</h5>
                                    <AiFillHtml5 className="project-technology-item html" />
                                </div>
                                <div className="div">
                                    <h5 className="text">CSS</h5>
                                    <DiCss3 className="project-technology-item css" />
                                </div>
                                <div className="div">
                                    <h5 className="text">Javascript</h5>
                                    <DiJavascript1 className="project-technology-item js" />
                                </div>
                                <div className="div">
                                    <h5 className="text">React</h5>
                                    <DiReact className="project-technology-item react" />
                                </div>
                            </div>
                            <p className="project-card-description">A web App that store all the appointments at one place, loaded with new features such as starring, filternig.</p>
                        </div>
                        <div className={`${cardMode}`}>
                            <div className="card-heading-container">
                                <h3>Appointment</h3>
                                <AiOutlineLink className="link-item" />
                            </div>
                            <div className="project-technologies-container">
                                <div className="div">
                                    <h5 className="text">Html</h5>
                                    <AiFillHtml5 className="project-technology-item html" />
                                </div>
                                <div className="div">
                                    <h5 className="text">CSS</h5>
                                    <DiCss3 className="project-technology-item css" />
                                </div>
                                <div className="div">
                                    <h5 className="text">Javascript</h5>
                                    <DiJavascript1 className="project-technology-item js" />
                                </div>
                                <div className="div">
                                    <h5 className="text">React</h5>
                                    <DiReact className="project-technology-item react" />
                                </div>
                            </div>
                            <p className="project-card-description">A web App that store all the appointments at one place, loaded with new features such as starring, filternig.</p>
                        </div>
                    </div>
                </div>
            )}
            return(
                renderProjects()
            )
        }}
    </ModeContext.Consumer>
    )
}

export default Projects