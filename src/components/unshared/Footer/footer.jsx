import Contact from '../../shared/Contact/contact';
import Icon from '../../shared/Icon/icon';
import Styles from './footer.module.css';

import logoImg from '../../../assets/Logo.svg';
import Access from '../../shared/Quick Access/access';

const Footer = () => {
    return(
        <footer className={Styles.container}>
            <div className={Styles.topPart}>
                <div className={Styles.leftSide}>
                    <img src={logoImg} alt="" />
                    <p>We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
                    <div className={Styles.contact}>
                        <Contact />
                        <Contact />
                        <Contact />
                    </div>
                </div>
                <div className={Styles.rightSide}>
                    <Access />
                    <Access />
                    <Access />
                    <Access />
                </div>
            </div>
            <div className={Styles.middlePart}>
                <ul>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                    <li>Cookie Policy</li>
                </ul>
                <div className={Styles.icons}>
                    <Icon />
                    <Icon />
                    <Icon />
                </div>
            </div>
            <div className={Styles.bottomPart}>
                Copyright © [2023] Little Learners Academy. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer;
