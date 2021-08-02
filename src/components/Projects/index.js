import ModeContext from '../../Context/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, } from '@fortawesome/free-solid-svg-icons'
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
                    <div className="project-container">
                        <div className="project-heading-container">
                            <h1 className="projects-heading">Projects</h1>
                            <p className="projects-description">My projects makes use of vast variety of latest technology tools. </p>
                        </div>
                        <div className="project-image-container">
                            <h1>Hello</h1>
                        </div>
                    </div>
                    <div className="projects-list-container">
                        <div className={`${cardMode}`}>
                            <div className="heading-container">
                                <h1 className="project-item-heading">Appointments App</h1>
                                <FontAwesomeIcon icon={faLink} className="link-item"/>
                            </div>
                            <div className="technology-container">
                                <AiFillHtml5 className="technology-item html" />
                                <DiCss3 className="technology-item css" />
                                <DiJavascript1 className="technology-item js" />
                                <DiReact className="technology-item react" />
                            </div>
                            <p className="project-description">A web App that store all the appointments at one place, loaded with new features such as starring, filternig.</p>
                        </div>
                        <div className={`${cardMode}`}>
                            <div className="heading-container">
                                <h1 className="project-item-heading">Appointments App</h1>
                                <FontAwesomeIcon icon={faLink} className="link-item"/>
                            </div>
                            <div className="technology-container">
                                <AiFillHtml5 className="technology-item html" />
                                <DiCss3 className="technology-item css" />
                                <DiJavascript1 className="technology-item js" />
                                <DiReact className="technology-item react" />
                            </div>
                            <p className="project-description">A web App that store all the appointments at one place, loaded with new features such as starring, filternig.</p>
                        </div>
                        <div className={`${cardMode}`}>
                            <div className="heading-container">
                                <h1 className="project-item-heading">Appointments App</h1>
                                <FontAwesomeIcon icon={faLink} className="link-item"/>
                            </div>
                            <div className="technology-container">
                                <AiFillHtml5 className="technology-item html" />
                                <DiCss3 className="technology-item css" />
                                <DiJavascript1 className="technology-item js" />
                                <DiReact className="technology-item react" />
                            </div>
                            <p className="project-description">A web App that store all the appointments at one place, loaded with new features such as starring, filternig.</p>
                        </div>
                        <div className={`${cardMode}`}>
                            <div className="heading-container">
                                <h1 className="project-item-heading">Appointments App</h1>
                                <FontAwesomeIcon icon={faLink} className="link-item"/>
                            </div>
                            <div className="technology-container">
                                <AiFillHtml5 className="technology-item html" />
                                <DiCss3 className="technology-item css" />
                                <DiJavascript1 className="technology-item js" />
                                <DiReact className="technology-item react" />
                            </div>
                            <p className="project-description">A web App that store all the appointments at one place, loaded with new features such as starring, filternig.</p>
                        </div>
                        <div className={`${cardMode}`}>
                            <div className="heading-container">
                                <h1 className="project-item-heading">Appointments App</h1>
                                <FontAwesomeIcon icon={faLink} className="link-item"/>
                            </div>
                            <div className="technology-container">
                                <AiFillHtml5 className="technology-item html" />
                                <DiCss3 className="technology-item css" />
                                <DiJavascript1 className="technology-item js" />
                                <DiReact className="technology-item react" />
                            </div>
                            <p className="project-description">A web App that store all the appointments at one place, loaded with new features such as starring, filternig.</p>
                        </div>
                        <div className={`${cardMode}`}>
                            <div className="heading-container">
                                <h1 className="project-item-heading">Appointments App</h1>
                                <FontAwesomeIcon icon={faLink} className="link-item"/>
                            </div>
                            <div className="technology-container">
                                <AiFillHtml5 className="technology-item html" />
                                <DiCss3 className="technology-item css" />
                                <DiJavascript1 className="technology-item js" />
                                <DiReact className="technology-item react" />
                            </div>
                            <p className="project-description">A web App that store all the appointments at one place, loaded with new features such as starring, filternig.</p>
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