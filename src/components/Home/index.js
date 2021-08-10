import ModeContext from '../../Context/index'
import {Link} from 'react-router-dom'
import {AiFillGithub, AiFillLinkedin, AiFillHtml5} from 'react-icons/ai'
import {BsFillBootstrapFill} from 'react-icons/bs'
import { DiCss3,DiJavascript1, DiReact, DiNodejsSmall, DiSqllite } from 'react-icons/di'
import {RiNpmjsFill} from 'react-icons/ri'
import AddressImg from './AddressImg'
import WebsiteLottie from './WebsiteLottie'
import './index.css'

const Home = props => {
    return(
        <ModeContext.Consumer>
            {value=>{
                const {activeMode} = value
                const mode = activeMode ? 'dark' : 'light'
                const modePerson = activeMode ? 'dark-person' : 'light-person'
                const iconMode = activeMode ? 'git-dark' : 'git-light'
                const renderHome = () => {
                    return(
                        <div className={`home-main-container ${mode}`}>
                            <div className="introduction-main-container">
                                <div className="intro-container">
                                    <h1 className="intro-heading setlineheight">Namaste!</h1>
                                    <div className="myself">
                                        <h1 className="setlineheight iam">I'm</h1>
                                        <div className="name">
                                            <h2 className="setlineheight myname">Sabari Nath</h2>
                                            <h2 className={`setlineheight person-background ${modePerson}`}>Person</h2>
                                        </div>
                                    </div>
                                    <div className="typewriter">
                                        <h1>Fullstack Developer</h1>
                                    </div>
                                    <p className="intro-description">I enjoy building everthing from scratch, with every line of code, I strive to make the web a beautiful place.</p>
                                    <div className="social-icons-container">
                                <div className="div">
                                    <h3 className="text">Github</h3>
                                    <a href="https://github.com/Sabarinath049" target="_blank" rel="noreferrer">
                                        <AiFillGithub className={`icon-item ${iconMode}`} />
                                    </a>
                                </div>
                                <div className="div">
                                    <h5 className="text">Linkedin</h5>
                                    <a href="https://www.linkedin.com/in/teja-c-944a53115/" target="_blank" rel="noreferrer">
                                        <AiFillLinkedin className="icon-item linkedin" />
                                    </a>
                                </div>
                            </div>
                            <div className="resume-container">
                                <Link to="/contact" ><button type="button" className="contactme-button-light margin">Contact me</button></Link>
                                <a href="https://docs.google.com/document/d/1S4LMpodBiXutWfh3a8vpswulXNH5PzO28zy4cNE69Ws/edit?usp=sharing" target="_blank" rel="noreferrer">
                                    <button type="button" className="contactme-button-light">See my resume</button>
                                </a>
                            </div>
                                </div>
                            <div className="home-image-container">
                                <AddressImg />
                            </div>
                            </div>
                            <h1 className="what-i-do">What I Do?</h1>
                            <div className="webdev-container">
                                <div>
                                    <WebsiteLottie />
                                </div>
                                <ul className="webdev-description">
                                    <li><h1 className="web-dev-heading">Web Development</h1></li>
                                    <li>
                                        <div className="technology-container">
                                            <div className="div">
                                                <h5 className="text">HTML</h5>
                                                <AiFillHtml5 className="technology-item html" />
                                            </div>
                                            <div className="div">
                                                <h5 className="text">CSS</h5>
                                                <DiCss3 className="technology-item css" />
                                            </div>
                                            <div className="div">
                                                <h5 className="text">Bootstrap</h5>
                                                <BsFillBootstrapFill className="technology-item bootstrap" />
                                            </div>
                                            <div className="div">
                                                <h5 className="text">Javascipt</h5>
                                                <DiJavascript1 className="technology-item js" />
                                            </div>
                                            <div className="div">
                                                <h5 className="text">React</h5>
                                                <DiReact className="technology-item react" />
                                            </div>
                                            <div className="div">
                                                <h5 className="text">Node</h5>
                                                <DiNodejsSmall className="technology-item node" />
                                            </div>
                                            <div className="div">
                                                <h5 className="text">SQLite</h5>
                                                <DiSqllite className="technology-item sql" />
                                            </div>
                                            <div className="div">
                                                <h5 className="text">NPM</h5>
                                                <RiNpmjsFill className="technology-item npm" />
                                            </div>
                                        </div>
                                    </li>
                                    <li className="li-item">⚡ Building responsive websites using HTML5, CSS3, BootStrap5, Flexbox, ReactJS & NodeJS</li>
                                    <li className="li-item">⚡ Developing Web Apps using ReactJs</li>
                                    <li className="li-item">⚡ Handling Backend with NodeJS</li>
                                    <li className="li-item">⚡ Verson controlling with Git</li>
                                </ul>
                            </div>
                        </div>
                    )
                }
                return(
                    renderHome()
                )
            }}
        </ModeContext.Consumer>
    )
}

export default Home
