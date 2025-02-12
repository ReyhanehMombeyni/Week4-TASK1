import MainNav from "../MainNav/mainNav";
import Styles from "./nav.module.css"
import TopNav from "../TopNav/topNav";

const Nav = () => {
    return(
        <div className={Styles.container}>
            <TopNav />
            <MainNav />
        </div>
    )
}

export default Nav;