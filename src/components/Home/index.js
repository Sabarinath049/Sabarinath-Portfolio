import ModeContext from '../../Context/index'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
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
                                    <li>⚡ Building responsive websites using HTML5, CSS3, BootStrap5, Flexbox, ReactJS & NodeJS</li>
                                    <li>⚡ Developing Web Apps using ReactJs</li>
                                    <li>⚡ Handling Backend with NodeJS</li>
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
