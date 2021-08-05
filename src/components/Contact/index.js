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
            const iconMode = activeMode ? 'git-dark' : 'git-light'
                const renderContact = () => {
                    return(
                        <div className={`contact-main-container ${mode}`}>
                            <div>
                                <h1>Image</h1>
                            </div>
                            <div className='contact-details-container'>
                                <h1 className="contact-heading clearmargin">Contact Me</h1>
                                <p className="contact-description clearmargin">I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with MERN Development.</p>
                                <div className="social-tech-container clearmargin">
                                    <div className="div">
                                        <h5 className="text">Github</h5>
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
                                    <div className="div">
                                        <h5 className="text">Google</h5>
                                        <a href="mailto:tejachillapalli@gmail.com">
                                            <AiFillGoogleCircle className="icon-item google" />
                                        </a>
                                    </div>
                                    <div className="div">
                                        <h5 className="text">Instagram</h5>
                                        <a href="https://www.instagram.com/i.sabarinath/" target="_blank" rel="noreferrer">
                                            <AiFillInstagram className="icon-item instagram" />
                                        </a>
                                    </div>
                                </div>
                                <a href="mailto:tejachillapalli@gmail.com"><button type="button" className='button-light'>Drop a mail</button></a>
                                <h1 className="address-heading clearmargin">Address</h1>
                                <p className="address-description clearmargin">Guntur, AndhraPradesh - 522001</p>
                                <h1 className="address-heading clearmargin">Phone Number</h1>
                                <p className="address-description clearmargin">+91 8919974741</p>
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