import Styles from './logo.module.css'
import logoImg from "../../../assets/Logo Container.svg"
const Logo = () => {
    return (
        <div className={Styles.container}>
            <img src={logoImg} alt="Logo Container" className={Styles.logoImg} />
        </div>
    )
}

export default Logo;