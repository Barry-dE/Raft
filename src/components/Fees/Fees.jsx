import bankNotes from '/assets/banknotes.png';
import arrowsRightLeft from '/assets/arrows-right-left.png';
import circlestack from '/assets/circle-stack.png';
import moneySend from '/assets/money-send.svg';
import moneyRecieved from '/assets/money-recive.svg';
import Fee_img from '/assets/Fee_img.png';
import '/src/styles/components/fees.scss';

function Fees() {
    return (
        <div className="fees">
            <div className="fees__wrapper">
                <div className="fees__text">
                    <div className="fees__text__title">
                        <p data-animation="header">
                            Your Financial Freedom, Your Way
                        </p>
                    </div>
                    <div className="fees__text__description">
                        <p data-animation="paragraph">
                            We believe that managing your finances should be
                            effortless and cost-effective, That is why we offer
                            you the freedom you deserve
                        </p>
                    </div>
                </div>
                <div className="fees__gallery__media">
                    <figure>
                        <img
                            src={Fee_img}
                            alt="people sending and recieving money"
                            width={300}
                            className="fees__gallery__media__image"
                        />
                    </figure>
                    <div className="fees__gallery__media__icons">
                        <div className="fees__gallery__media__icon fees__gallery__media__icon--left">
                            <div className="fees__gallery__media__icon__green">
                                <figure>
                                    <img src={moneySend} alt="Money sent" />
                                </figure>
                            </div>
                            <div className="fees__gallery__media__icon__text">
                                <p className="first-child">Sent</p>
                                <p className="second-child">$250.12</p>
                            </div>
                        </div>
                        <div className="fees__gallery__media__icon fees__gallery__media__icon--right">
                            <div className="fees__gallery__media__icon__red">
                                <figure>
                                    <img
                                        src={moneyRecieved}
                                        alt="Money received"
                                    />
                                </figure>
                            </div>
                            <div className="fees__gallery__media__icon__text">
                                <p className="first-child">Recieved</p>
                                <p className="second-child">$250.12</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fees__perks">
                    <div className="fees__perks__wrapper">
                        <div className="fees__perks__items">
                            <div className="fees__perks__item__icon">
                                <figure>
                                    <img src={bankNotes} alt="" />
                                </figure>
                                <h3
                                    className="fees_perks__item__title"
                                    data-animation="header"
                                >
                                    No minimum balance fees
                                </h3>
                            </div>

                            <p className="fees__perks__item__description">
                                Say goodbye to minimum balance fees. Your
                                account, your balance—no hidden charges
                            </p>
                        </div>
                        <div className="fees__perks__items">
                            <div className="fees__perks__item__icon">
                                <figure>
                                    <img src={circlestack} alt="" />
                                </figure>
                                <h3
                                    className="fees_perks__item__title"
                                    data-animation="header"
                                >
                                    No monthly fees
                                </h3>
                            </div>

                            <p className="fees__perks__item__description">
                                Bank with us without worrying about monthly
                                fees. Keep more of your money where it
                                belongs—in your account
                            </p>
                        </div>
                        <div className="fees__perks__items">
                            <div className="fees__perks__item__icon">
                                <figure>
                                    <img src={arrowsRightLeft} alt="" />
                                </figure>
                                <h3
                                    className="fees_perks__item__title"
                                    data-animation="header"
                                >
                                    No bank transfer fees
                                </h3>
                            </div>

                            <p className="fees__perks__item__description">
                                Seamlessly transfer funds without the extra
                                cost. Send and receive money with zero bank
                                transfer fees.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Fees;
