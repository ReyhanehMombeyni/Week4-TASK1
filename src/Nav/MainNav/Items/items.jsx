import Styles from './items.module.css'
import Link from './Link/link';
const Items =() => {
    return(
        <ul className={Styles.container}>
            <li className={Styles.item}><Link /></li>
            <li className={Styles.item}><Link /></li>
            <li className={Styles.item}><Link /></li>
            <li className={Styles.item}><Link /></li>
            <li className={Styles.item}><Link /></li>
            <li className={Styles.item}><Link /></li>
        </ul>
    )
}
export default Items;