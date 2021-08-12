import ModeContext from '../../Context/index'
import {AiOutlineLink, AiFillGithub} from 'react-icons/ai'
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
                                <h3 className="project-card-heading">NxtTrendz App</h3>
                                <a className="anchor" href="https://sabarinathnxttrendz.netlify.app" target="_blank" rel="noreferrer">
                                    <AiOutlineLink className={`link-item ${mode}`} />
                                </a>
                                <a className="anchor" href="https://github.com/Sabarinath049/NtxTrendz-Application" target="_blank" rel="noreferrer">
                                    <AiFillGithub className={`link-item ${mode}`} />
                                </a>
                            </div>
                            <div className="tech-names">
                                <p className="tech-item html">HTML</p>
                                <p className="tech-item css">CSS</p>
                                <p className="tech-item js">Javascript</p>
                                <p className="tech-item react">React</p>
                            </div>
                            <p className="project-card-description">It is an Ecommerce App that is used to add products into cart and checkout accordingly.</p>
                        </div>
                        <div className={`${cardMode}`}>
                            <div className="card-heading-container">
                                <h3 className="project-card-heading">Git Search</h3>
                                <a className="anchor" href="https://sabarinathgithubsearch.netlify.app" target="_blank" rel="noreferrer">
                                    <AiOutlineLink className={`link-item ${mode}`} />
                                </a>
                                <a className="anchor" href="https://github.com/Sabarinath049/GitSearch" target="_blank" rel="noreferrer">
                                    <AiFillGithub className={`link-item ${mode}`} />
                                </a>
                            </div>
                            <div className="tech-names">
                                <p className="tech-item html">HTML</p>
                                <p className="tech-item css">CSS</p>
                                <p className="tech-item js">Javascript</p>
                            </div>
                            <p className="project-card-description">We can search peeps who are present in git and get their details, repos, repo-stats.</p>
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