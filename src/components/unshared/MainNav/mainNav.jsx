import Items from "../Items/items";
import Logo from "../../shared/Logo/logo";
import Styles from "./mainNav.module.css"

const MainNav = () => {
    return(
        <div className={Styles.container}>
            <Logo />
            <Items />
        </div>
    )
}
export default MainNav;