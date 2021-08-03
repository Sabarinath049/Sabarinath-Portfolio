import ModeContext from '../../Context/index'
import {AiFillGithub, AiFillLinkedin, AiFillHtml5} from 'react-icons/ai'
import {BsFillBootstrapFill} from 'react-icons/bs'
import { DiCss3,DiJavascript1, DiReact, DiNodejsSmall, DiSqllite } from 'react-icons/di'
import {RiNpmjsFill} from 'react-icons/ri'
import './index.css'

const Home = () => {
    return(
        <ModeContext.Consumer>
            {value=>{
                const {activeMode} = value
                const mode = activeMode ? 'dark' : 'light'
                const modePerson = activeMode ? 'light' : 'dark'
                const buttonMode = activeMode ? 'dark-button mail-button-dark' : 'light-button mail-button-light'
                const renderHome = () => {
                    return(
                        <div className={`home-main-container ${mode}`}>
                            <div className="introduction-main-container">
                                <div className="intro-container">
                                    <h1 className="intro-heading setlineheight">Namaste!</h1>
                                    <div className="myself">
                                        <h1 className="setlineheight">I'm</h1>
                                        <div className="name">
                                            <h2 className="setlineheight">Sabari Nath</h2>
                                            <h2 className={`setlineheight person ${modePerson}`}>Person</h2>
                                        </div>
                                    </div>
                                    <div className="typewriter">
                                        <h1>Fullstack Developer</h1>
                                    </div>
                                    <p className="intro-description">I enjoy building everthing from scratch, with every line of code, I strive to make the web a beautiful place.</p>
                                </div>
                                <div className="home-image-container">
                                    <h1>Image</h1>
                                </div>
                            </div>
                            <div className="social-icons-container">
                                <AiFillGithub className="icon-item" />
                                <AiFillLinkedin className="icon-item linkedin" />
                            </div>
                            <div className="resume-container">
                                <button type="button" className={`mail-button ${buttonMode}`}>Contact me</button>
                                <button type="button" className={`mail-button ${buttonMode}`}>See my resume</button>
                            </div>
                            <h1>What I Do?</h1>
                            <div className="webdev-container">
                                <div>
                                    <h1>Image</h1>
                                </div>
                                <ul className="webdev-description">
                                    <li><h1>Web Development</h1></li>
                                    <li>
                                        <div className="technology-container">
                                            <AiFillHtml5 className="technology-item html" />
                                            <DiCss3 className="technology-item css" />
                                            <BsFillBootstrapFill className="technology-item bootstrap" />
                                            <DiJavascript1 className="technology-item js" />
                                            <DiReact className="technology-item react" />
                                            <DiNodejsSmall className="technology-item node" />
                                            <DiSqllite className="technology-item sql" />
                                            <RiNpmjsFill className="technology-item npm" />
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
