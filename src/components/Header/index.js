import {Link} from 'react-router-dom'
import ModeContext from '../../Context/index'
import {BsMoon} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import {FaSchool, FaLaptopCode} from 'react-icons/fa'
import {BiMailSend} from 'react-icons/bi'
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
                        <BsMoon onClick={changeMode} className="mobile-nav-item"/>
                        <Link to="/" className={`nav-item ${mode}`}>Home</Link>
                        <Link to="/education" className={`nav-item ${mode}`}>Experience & Education</Link>
                        <Link to="/projects" className={`nav-item ${mode}`}>Projects</Link>
                        <Link to="/contact" className={`nav-item ${mode}`}>Contact</Link>
                    </div>
                    <div className="nav-mobile-container">
                        <BsMoon onClick={changeMode} className="mobile-nav-item" />
                        <Link to="/">
                            <AiFillHome className={`mobile-nav-item ${mode}`} />
                        </Link>
                        <Link to="/education">
                            <FaSchool className={`mobile-nav-item ${mode}`} />
                        </Link>
                        <Link to="/projects">
                            <FaLaptopCode className={`mobile-nav-item ${mode}`} />
                        </Link>
                        <Link to="/contact">
                            <BiMailSend className={`mobile-nav-item ${mode}`} />
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