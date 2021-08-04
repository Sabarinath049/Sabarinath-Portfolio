import ModeContext from '../../Context/index'
import './index.css'

const Education = () => {
    return(
    <ModeContext.Consumer>
        {value => {
            const {activeMode} = value
            const renderEducationContainer = () => {
                const mode = activeMode ? 'dark' : 'light'
                return(
                    <div className={`education-main-container ${mode}`}>
                        <div className="experience-container">
                        <h1 className="experience-heading-element">Experience</h1>
                            <div className="experience-item">
                                <div className="tech-role-container">
                                    <h3 className="role">Javascript Developer</h3>
                                    <h4 className="duration">May 2021 - July 2021</h4>
                                </div>
                                <h4 className="company-name">TV2Z</h4>
                                <p className="work">Developed TV apps UI with Lightning Js framework</p>
                                <p className="work">Built sample TV Metro Routing app that mostly focuses on routing part</p>
                                <p className="work">Used Lightning Animations for smoother User Experience</p>
                                <p className="work">Worked on Menu Transistions, Banners, Active Items</p>
                            </div>
                            <div className="project-item-margin experience-item">
                                <div className="tech-role-container">
                                    <h3 className="role">UI Developer</h3>
                                    <h4 className="duration">May 2021 - July 2021</h4>
                                </div>
                                <h4 className="company-name">Nukkad Shops</h4>
                                <p className="work">Developed UI for Mobile Apps and KIOSK, POS Devices</p>
                                <p className="work">Worked on Android Studio for Mobile UI</p>
                                <p className="work">Used Adobe XD, Figma, Sketch for designing UI</p>
                            </div>
                        </div>
                        <div className="education-container">
                            <h1 className="education-heading-element">Education</h1>
                            <div className="education-item">
                                <div className="education-role-container">
                                    <h3 className="education role">Bachelor of Computer Science and Engineering</h3>
                                    <h4 className="education-duration">2018-2021</h4>
                                </div>
                                <h4 className="company-name">Rajiv Gandhi University of Knowledge Technologies, Nuzvid</h4>
                                <p className="work">CGPA: 8/10</p>
                            </div>
                            <div className="education-item project-item-margin">
                                <div className="education-role-container">
                                        <h3 className="education role">Higher Secondary Education</h3>
                                        <h4 className="education-duration">2015-2017</h4>
                                </div>
                                <h4 className="company-name">Rajiv Gandhi University of Knowledge Technologies, Nuzvid</h4>
                                <p className="work">CGPA: 8/10</p>
                            </div>
                        </div>
                    </div>
                )
            }
            return renderEducationContainer()
        }}
    </ModeContext.Consumer>
    )
}

export default Education