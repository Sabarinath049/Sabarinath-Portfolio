import {Link} from 'react-router-dom'
import ModeContext from '../../Context/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSchool, faLaptopCode, faEnvelope, faMoon } from '@fortawesome/free-solid-svg-icons'
import './index.css'

const Header =  () => (

    <ModeContext.Consumer>{value=>{
        const {activeMode, changeMode} = value
        const mode = activeMode ? "dark" : "light"
        const renderHeader = () => {
            const name = "<Sabarinath />"
            return(
                <div className={`header-container ${mode}`}>
                    <div>
                        <h1 className="heading">{name}</h1>
                    </div>
                    <div className="nav-container">
                        <FontAwesomeIcon icon={faMoon} className={`icon nav-item ${mode}`} onClick={changeMode}></FontAwesomeIcon>
                        <Link to="/" className={`nav-item ${mode}`}>Home</Link>
                        <Link to="/education" className={`nav-item ${mode}`}>Experience & Education</Link>
                        <Link to="/projects" className={`nav-item ${mode}`}>Projects</Link>
                        <Link to="/contact" className={`nav-item ${mode}`}>Contact</Link>
                    </div>
                    <div className="nav-mobile-container">
                        <FontAwesomeIcon icon={faMoon} className={`icon nav-item ${mode}`} onClick={changeMode}></FontAwesomeIcon>
                        <Link to="/">
                            <FontAwesomeIcon className={`nav-item ${mode}`} icon={faHome} />
                        </Link>
                        <Link to="/education">
                            <FontAwesomeIcon className={`nav-item ${mode}`} icon={faSchool} />
                        </Link>
                        <Link to="/projects">
                            <FontAwesomeIcon className={`nav-item ${mode}`} icon={faLaptopCode} />
                        </Link>
                        <Link to="/contact">
                            <FontAwesomeIcon className={`nav-item ${mode}`} icon={faEnvelope} />
                        </Link>
                    </div>
                </div>
            )
        }
        return(
            renderHeader()
        )

    }}</ModeContext.Consumer>
)

export default Header