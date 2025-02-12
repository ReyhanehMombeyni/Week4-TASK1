import Styles from "./header.module.css"
import imgHeader from "../../../assets/Image Container.svg"

const Header = () => {
    return(
        <header className={Styles.container}>
            <div className={Styles.leftSide}>
                <img src={imgHeader} alt="" />
            </div>
            <div className={Styles.rightSide}>
                <p className={Styles.welcome}>Welcome to Little Learners Academy</p>
                <h1 className={Styles.title}>Where Young Minds Blossom and <span>Dreams Take Flight.</span></h1>
                <p className={Styles.desc}>Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>
                <div className={Styles.statistics}>
                    
                </div>
            </div>
        </header>
    )
}
export default Header;