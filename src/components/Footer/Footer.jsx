import '../../styles/components/footer.scss';
import { IoChevronForward } from 'react-icons/io5';
import logoImage from '/assets/logo.svg';
import { useState } from 'react';

function Footer() {
    const { open, setOpen } = useState(false);
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
                        <div className="footer__question__wrapper">
                            <p>How do I create an account with RAFT?</p>
                            <IoChevronForward className="footer__question__icon" />
                        </div>
                        {open && (
                            <div className="footer__question__answer">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Esse nihil quaerat libero non
                                deserunt ab temporibus, accusamus laboriosam
                                alias, ex, illum aut tempore quidem expedita
                                molestias nisi accusantium similique? Dolorem!
                            </div>
                        )}
                    </div>
                    <div className="footer__question">
                        <div className="footer__question__wrapper">
                            <p>How do I create an account with RAFT?</p>
                            <IoChevronForward className="footer__question__icon" />
                        </div>
                        {open && (
                            <div className="footer__question__answer">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Esse nihil quaerat libero non
                                deserunt ab temporibus, accusamus laboriosam
                                alias, ex, illum aut tempore quidem expedita
                                molestias nisi accusantium similique? Dolorem!
                            </div>
                        )}
                    </div>
                    <div className="footer__question">
                        <div className="footer__question__wrapper">
                            <p>How do I create an account with RAFT?</p>
                            <IoChevronForward className="footer__question__icon" />
                        </div>
                        {open && (
                            <div className="footer__question__answer">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Esse nihil quaerat libero non
                                deserunt ab temporibus, accusamus laboriosam
                                alias, ex, illum aut tempore quidem expedita
                                molestias nisi accusantium similique? Dolorem!
                            </div>
                        )}
                    </div>
                    <div className="footer__question">
                        <div className="footer__question__wrapper">
                            <p>How do I create an account with RAFT?</p>
                            <IoChevronForward className="footer__question__icon" />
                        </div>
                        {open && (
                            <div className="footer__question__answer">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Esse nihil quaerat libero non
                                deserunt ab temporibus, accusamus laboriosam
                                alias, ex, illum aut tempore quidem expedita
                                molestias nisi accusantium similique? Dolorem!
                            </div>
                        )}
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
                                            <p data-animation="header">
                                                Our Company
                                            </p>
                                            <p data-animation="header">
                                                Careers
                                            </p>
                                            <p data-animation="header">
                                                Press Kits
                                            </p>
                                        </div>
                                    </div>
                                    <div className="footer__Info__item__info__content">
                                        <h3>Legal</h3>
                                        <div className="footer__info__Item__content__text">
                                            <p data-animation="header">
                                                Terms of use
                                            </p>
                                            <p data-animation="header">
                                                Privacy Policy
                                            </p>
                                            <p data-animation="header">
                                                About Us
                                            </p>
                                        </div>
                                    </div>
                                    <div className="footer__Info__item__info__content">
                                        <h3 data-animation="header">Support</h3>
                                        <div className="footer__info__Item__content__text">
                                            <p data-animation="header">
                                                Contact Us
                                            </p>
                                            <p data-animation="header">FAQ</p>
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

// get all the accordion

// loop and check if the current item is the clicked one

// if true, only show that one

export default Footer;
