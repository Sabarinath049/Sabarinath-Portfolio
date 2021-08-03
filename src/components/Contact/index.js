import ModeContext from '../../Context/index'
import {AiFillGithub, AiFillLinkedin, AiFillGoogleCircle, AiFillInstagram} from 'react-icons/ai'

import './index.css'

const Contact = () => {
    return(
        <ModeContext.Consumer>
            {value=>{
            const {activeMode} = value
            const mode = activeMode ? "dark" : "light"
            const buttonMode = activeMode ? 'dark-button mail-button-dark' : 'light-button mail-button-light'
                const renderContact = () => {
                    return(
                        <div className={`contact-main-container ${mode}`}>
                            <div>
                                <h1>Image</h1>
                            </div>
                            <div className='contact-details-container'>
                                <h1 className="contact-heading">Contact Me</h1>
                                <p className="contact-description setlineheight">I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with MERN Development.</p>
                                <div className="social-tech-container">
                                    <AiFillGithub  className="icon-item" />
                                    <AiFillLinkedin className="icon-item linkedin" />
                                    <AiFillGoogleCircle className="icon-item google" />
                                    <AiFillInstagram className="icon-item instagram" />
                                </div>
                                <a href="mailto:tejachillapalli@gmail.com"><button type="button" className={`mail-button ${buttonMode}`}>Drop a mail</button></a>
                                <h1 className="contact-heading setlineheight">Address</h1>
                                <p className="contact-description setlineheight">Guntur, AndhraPradesh - 522001</p>
                                <h1 className="contact-heading setlineheight">Phone Number</h1>
                                <p className="contact-description setlineheight">+91 8919974741</p>
                            </div>
                        </div>
                    )
                }
                return(
                    renderContact()
                )
            }}
        </ModeContext.Consumer>
    )
}

export default Contact