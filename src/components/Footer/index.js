import ModeContext from '../../Context/index'
import './index.css'

const Footer = () => {
    return(
        <ModeContext.Consumer>
            {value=>{
                const {activeMode} = value
                const mode = activeMode ? "dark" : "light"
                const renderFooter = () => {
                    return(
                        <div className={`footer-container ${mode}`}>
                            <h4>Made by Sabarinath</h4>
                        </div>
                    )
                }
                return(
                    renderFooter()
                )
            }}
        </ModeContext.Consumer>
    )
}

export default Footer