import Button from '../../shared/Button/button';
import Item from '../item/item';
import Styles from './benefits.module.css'

const Benefits = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.content}>
                <Button />
                <h1>Our Benefits</h1>
                <p>With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future.</p>
            </div>
            <div className={Styles.items}>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </div>
    )
}
export default Benefits;