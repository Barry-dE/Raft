import '../../styles/components/footer.scss';
import { IoChevronForward } from 'react-icons/io5';
import logoImage from '/assets/logo.svg';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <div className="footer__header">
                    <p className="footer__header__text" data-animation="header">
                        Frequently asked questions
                    </p>
                </div>
                <div className="footer__questions">
                    <div className="footer__question">
                        <p>How do I create an account with RAFT?</p>
                        <IoChevronForward className="footer__question__icon" />
                    </div>
                    <div className="footer__question">
                        <p>
                            How does RAFT ensure the security of my financial
                            data?
                        </p>
                        <IoChevronForward className="footer__question__icon" />
                    </div>
                    <div className="footer__question">
                        <p>
                            What types of transactions can I perform with RAFT?
                        </p>
                        <IoChevronForward className="footer__question__icon" />
                    </div>
                    <div className="footer__question">
                        <p>
                            What benefits does RAFT offer for wealth management?
                        </p>
                        <IoChevronForward className="footer__question__icon" />
                    </div>
                </div>
                <div className="footer__info">
                    <div className="footer__info__wrapper">
                        <div className="footer__info__logo">
                            <figure>
                                <img src={logoImage} alt="" />
                            </figure>
                            <p>Raft</p>
                        </div>
                        <div className="footer__info__items">
                            <div className="footer__info__item">
                                <div className=" footer__info__item__qrcode">
                                    qr code
                                </div>
                                <div className="footer__info__item__info">
                                    <div className="footer__Info__item__info__content">
                                        <h3>About Us</h3>
                                        <div className="footer__info__Item__content__text">
                                            <p>Our Company</p>
                                            <p>Careers</p>
                                            <p>Press Kits</p>
                                        </div>
                                    </div>
                                    <div className="footer__Info__item__info__content">
                                        <h3>Legal</h3>
                                        <div className="footer__info__Item__content__text">
                                            <p>Terms of use</p>
                                            <p>Privacy Policy</p>
                                            <p>About Us</p>
                                        </div>
                                    </div>
                                    <div className="footer__Info__item__info__content">
                                        <h3>Support</h3>
                                        <div className="footer__info__Item__content__text">
                                            <p>Contact Us</p>
                                            <p>FAQ</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer__info__item">
                                <div className="footer__info__item__locale">
                                    <p>English United Kingdom</p>
                                    <IoChevronForward className="footer__question__icon" />
                                </div>
                                <div className="footer__info__item__company">
                                    <p>C Raft Corp, LLC.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
