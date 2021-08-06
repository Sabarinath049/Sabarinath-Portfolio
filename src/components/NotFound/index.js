import ModeContext from '../../Context/index'
import NotFoundLottie from "./NotFoundLottie";
import './index.css'

const NotFound = () => {
    return(
        <ModeContext.Consumer>
            {value=>{
                const {activeMode} = value
                const mode = activeMode ? 'dark' : 'light'
                const renderNotFound = () => {
                    return(
                        <div className={`notfound-main-container ${mode}`}>
                            <div className="notfound-lottie">
                                <NotFoundLottie />
                            </div>
                        </div>
                    )
                }
                return renderNotFound()
            }}
        </ModeContext.Consumer>
    )
}

export default NotFound