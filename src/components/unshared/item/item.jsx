import Icon from '../../shared/Icon/icon';
import Styles from './item.module.css';

const Item =() => {
    return (
        <div className={Styles.container}>
            <div className={Styles.icon}>
                <Icon />
            </div>
            <h3>Holistic Learning Approach</h3>
            <p>Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.</p>
        </div>
    )
}
export default Item;