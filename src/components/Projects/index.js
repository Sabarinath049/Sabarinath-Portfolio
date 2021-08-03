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
                            <h1 className="projects-heading clearmargin">Projects</h1>
                            <p className="projects-description clearmargin">My projects makes use of vast variety of latest technology tools. </p>
                        </div>
                        <div className="project-image-container">
                            <h1>Hello</h1>
                        </div>
                    </div>
                    <div className="projects-list-container">
                        <div className={`${cardMode}`}>
                            <div className="heading-container">
                                <h1 className="project-item-heading clearmargin">Appointments App</h1>
                                <FontAwesomeIcon icon={faLink} className="link-item clearmargin"/>
                            </div>
                            <div className="technology-container">
                                <div className="div">
                                    <h5 className="text">Html</h5>
                                    <AiFillHtml5 className="technology-item html" />
                                </div>
                                <div className="div">
                                    <h5 className="text">CSS</h5>
                                    <DiCss3 className="technology-item css" />
                                </div>
                                <div className="div">
                                    <h5 className="text">Javascript</h5>
                                    <DiJavascript1 className="technology-item js" />
                                </div>
                                <div className="div">
                                    <h5 className="text">React</h5>
                                    <DiReact className="technology-item react" />
                                </div>
                            </div>
                            <p className="project-description clearmargin">A web App that store all the appointments at one place, loaded with new features such as starring, filternig.</p>
                        </div>
                        <div className={`${cardMode}`}>
                            <div className="heading-container">
                                <h1 className="project-item-heading clearmargin">Appointments App</h1>
                                <FontAwesomeIcon icon={faLink} className="link-item clearmargin"/>
                            </div>
                            <div className="technology-container">
                                <div className="div">
                                    <h5 className="text">Html</h5>
                                    <AiFillHtml5 className="technology-item html" />
                                </div>
                                <div className="div">
                                    <h5 className="text">CSS</h5>
                                    <DiCss3 className="technology-item css" />
                                </div>
                                <div className="div">
                                    <h5 className="text">Javascript</h5>
                                    <DiJavascript1 className="technology-item js" />
                                </div>
                                <div className="div">
                                    <h5 className="text">React</h5>
                                    <DiReact className="technology-item react" />
                                </div>
                            </div>
                            <p className="project-description clearmargin">A web App that store all the appointments at one place, loaded with new features such as starring, filternig.</p>
                        </div>
                        <div className={`${cardMode}`}>
                            <div className="heading-container">
                                <h1 className="project-item-heading clearmargin">Appointments App</h1>
                                <FontAwesomeIcon icon={faLink} className="link-item clearmargin"/>
                            </div>
                            <div className="technology-container">
                                <div className="div">
                                    <h5 className="text">Html</h5>
                                    <AiFillHtml5 className="technology-item html" />
                                </div>
                                <div className="div">
                                    <h5 className="text">CSS</h5>
                                    <DiCss3 className="technology-item css" />
                                </div>
                                <div className="div">
                                    <h5 className="text">Javascript</h5>
                                    <DiJavascript1 className="technology-item js" />
                                </div>
                                <div className="div">
                                    <h5 className="text">React</h5>
                                    <DiReact className="technology-item react" />
                                </div>
                            </div>
                            <p className="project-description clearmargin">A web App that store all the appointments at one place, loaded with new features such as starring, filternig.</p>
                        </div>
                        <div className={`${cardMode}`}>
                            <div className="heading-container">
                                <h1 className="project-item-heading clearmargin">Appointments App</h1>
                                <FontAwesomeIcon icon={faLink} className="link-item clearmargin"/>
                            </div>
                            <div className="technology-container">
                                <div className="div">
                                    <h5 className="text">Html</h5>
                                    <AiFillHtml5 className="technology-item html" />
                                </div>
                                <div className="div">
                                    <h5 className="text">CSS</h5>
                                    <DiCss3 className="technology-item css" />
                                </div>
                                <div className="div">
                                    <h5 className="text">Javascript</h5>
                                    <DiJavascript1 className="technology-item js" />
                                </div>
                                <div className="div">
                                    <h5 className="text">React</h5>
                                    <DiReact className="technology-item react" />
                                </div>
                            </div>
                            <p className="project-description clearmargin">A web App that store all the appointments at one place, loaded with new features such as starring, filternig.</p>
                        </div>
                        <div className={`${cardMode}`}>
                            <div className="heading-container">
                                <h1 className="project-item-heading clearmargin">Appointments App</h1>
                                <FontAwesomeIcon icon={faLink} className="link-item clearmargin"/>
                            </div>
                            <div className="technology-container">
                                <div className="div">
                                    <h5 className="text">Html</h5>
                                    <AiFillHtml5 className="technology-item html" />
                                </div>
                                <div className="div">
                                    <h5 className="text">CSS</h5>
                                    <DiCss3 className="technology-item css" />
                                </div>
                                <div className="div">
                                    <h5 className="text">Javascript</h5>
                                    <DiJavascript1 className="technology-item js" />
                                </div>
                                <div className="div">
                                    <h5 className="text">React</h5>
                                    <DiReact className="technology-item react" />
                                </div>
                            </div>
                            <p className="project-description clearmargin">A web App that store all the appointments at one place, loaded with new features such as starring, filternig.</p>
                        </div>
                        <div className={`${cardMode}`}>
                            <div className="heading-container">
                                <h1 className="project-item-heading clearmargin">Appointments App</h1>
                                <FontAwesomeIcon icon={faLink} className="link-item clearmargin"/>
                            </div>
                            <div className="technology-container">
                                <div className="div">
                                    <h5 className="text">Html</h5>
                                    <AiFillHtml5 className="technology-item html" />
                                </div>
                                <div className="div">
                                    <h5 className="text">CSS</h5>
                                    <DiCss3 className="technology-item css" />
                                </div>
                                <div className="div">
                                    <h5 className="text">Javascript</h5>
                                    <DiJavascript1 className="technology-item js" />
                                </div>
                                <div className="div">
                                    <h5 className="text">React</h5>
                                    <DiReact className="technology-item react" />
                                </div>
                            </div>
                            <p className="project-description clearmargin">A web App that store all the appointments at one place, loaded with new features such as starring, filternig.</p>
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