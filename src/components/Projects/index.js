import ModeContext from '../../Context/index'
import {AiOutlineLink} from 'react-icons/ai'
import AddressImg from './AddressImg'
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
                            <h1 className="project-heading">Projects</h1>
                            <p className="projects-landing-description-paragraph">My projects makes use of vast variety of latest technology tools.</p>
                        </div>
                        <div className="projects-landing-image">
                            <AddressImg />
                        </div>
                    </div>
                    <div className="project-list-container">
                        <div className={`${cardMode}`}>
                            <div className="card-heading-container">
                                <h3 className="project-card-heading">Appointment</h3>
                                <AiOutlineLink className="link-item" />
                            </div>
                            <div className="tech-names">
                                <p className="tech-item html">HTML</p>
                                <p className="tech-item css">CSS</p>
                                <p className="tech-item js">Javascript</p>
                                <p className="tech-item react">React</p>
                            </div>
                            <p className="project-card-description">A web App that store all the appointments at one place, loaded with new features such as starring, filternig.</p>
                        </div>
                        <div className={`${cardMode}`}>
                            <div className="card-heading-container">
                                <h3 className="project-card-heading">Appointment</h3>
                                <AiOutlineLink className="link-item" />
                            </div>
                            <div className="tech-names">
                                <p className="tech-item html">HTML</p>
                                <p className="tech-item css">CSS</p>
                                <p className="tech-item js">Javascript</p>
                                <p className="tech-item react">React</p>
                            </div>
                            <p className="project-card-description">A web App that store all the appointments at one place, loaded with new features such as starring, filternig.</p>
                        </div>
                        <div className={`${cardMode}`}>
                            <div className="card-heading-container">
                                <h3 className="project-card-heading">Appointment</h3>
                                <AiOutlineLink className="link-item" />
                            </div>
                            <div className="tech-names">
                                <p className="tech-item html">HTML</p>
                                <p className="tech-item css">CSS</p>
                                <p className="tech-item js">Javascript</p>
                                <p className="tech-item react">React</p>
                            </div>
                            <p className="project-card-description">A web App that store all the appointments at one place, loaded with new features such as starring, filternig.</p>
                        </div>
                        <div className={`${cardMode}`}>
                            <div className="card-heading-container">
                                <h3 className="project-card-heading">Appointment</h3>
                                <AiOutlineLink className="link-item" />
                            </div>
                            <div className="tech-names">
                                <p className="tech-item html">HTML</p>
                                <p className="tech-item css">CSS</p>
                                <p className="tech-item js">Javascript</p>
                                <p className="tech-item react">React</p>
                            </div>
                            <p className="project-card-description">A web App that store all the appointments at one place, loaded with new features such as starring, filternig.</p>
                        </div>
                        <div className={`${cardMode}`}>
                            <div className="card-heading-container">
                                <h3 className="project-card-heading">Appointment</h3>
                                <AiOutlineLink className="link-item" />
                            </div>
                            <div className="tech-names">
                                <p className="tech-item html">HTML</p>
                                <p className="tech-item css">CSS</p>
                                <p className="tech-item js">Javascript</p>
                                <p className="tech-item react">React</p>
                            </div>
                            <p className="project-card-description">A web App that store all the appointments at one place, loaded with new features such as starring, filternig.</p>
                        </div>
                        <div className={`${cardMode}`}>
                            <div className="card-heading-container">
                                <h3 className="project-card-heading">Appointment</h3>
                                <AiOutlineLink className="link-item" />
                            </div>
                            <div className="tech-names">
                                <p className="tech-item html">HTML</p>
                                <p className="tech-item css">CSS</p>
                                <p className="tech-item js">Javascript</p>
                                <p className="tech-item react">React</p>
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