import CardSvg from './DebitCardsSvg';
import '../../styles/components/card.scss';

function DebitCards() {
    return (
        <div className="debit__cards">
            <div className="debit__cards__wrapper">
                <div className="debit__cards__title">
                    <p className="debit__cards__title__introduction__text">
                        introducing
                    </p>
                    <p
                        className="debit__cards__title__title"
                        data-animation="header"
                    >
                        RAFT&apos;s Next-Gen Cards
                    </p>
                    <p
                        className="debit__cards__title__description"
                        data-animation="paragraph"
                    >
                        Discover RAFT&apos;s latest innovation – our new cards.
                        Elevate your banking experience with cutting-edge
                        features, security, and unprecedented convenience.
                    </p>
                </div>
                <div className="debit__cards__card__wrapper">
                    <div className="debit__cards__card">
                        <CardSvg classname="card" />
                    </div>
                </div>

                <div className="debit__cards__perks">
                    <div className="debit__cards__perks__wrapper">
                        <div className="debit__cards__perks__items">
                            <div className="debit__cards__perk__item">
                                <svg
                                    width="24"
                                    height="25"
                                    viewBox="0 0 24 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7.5 3.875C7.5 2.83947 8.33947 2 9.375 2H9.75C11.8211 2 13.5 3.67893 13.5 5.75V7.625C13.5 8.66053 14.3395 9.5 15.375 9.5H17.25C19.3211 9.5 21 11.1789 21 13.25V16.625C21 17.6605 20.1605 18.5 19.125 18.5H9.375C8.33947 18.5 7.5 17.6605 7.5 16.625V3.875Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M15 5.75C15 4.43695 14.518 3.23648 13.7212 2.3159C17.1201 3.20377 19.7962 5.87988 20.6841 9.27881C19.7635 8.48204 18.5631 8 17.25 8H15.375C15.1679 8 15 7.83211 15 7.625V5.75Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M4.875 6.5H6V16.625C6 18.489 7.51104 20 9.375 20H16.5V21.125C16.5 22.1605 15.6605 23 14.625 23H4.875C3.83947 23 3 22.1605 3 21.125V8.375C3 7.33947 3.83947 6.5 4.875 6.5Z"
                                        fill="white"
                                    />
                                </svg>

                                <h3 data-animation="header">
                                    Contactless Technology
                                </h3>
                            </div>
                            <p
                                className="debit__cards__perk__item__description"
                                data-animation="paragraph"
                            >
                                Our new cards come equipped with contactless
                                technology, allowing you to make swift, secure
                                payments with a simple tap.
                            </p>
                        </div>
                        <div className="debit__cards__perks__items">
                            <div className="debit__cards__perk__item">
                                <svg
                                    width="24"
                                    height="25"
                                    viewBox="0 0 24 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4.5 4.25C2.84315 4.25 1.5 5.59315 1.5 7.25V17.75C1.5 19.4069 2.84315 20.75 4.5 20.75H19.5C21.1569 20.75 22.5 19.4069 22.5 17.75V7.25C22.5 5.59315 21.1569 4.25 19.5 4.25H4.5ZM8.625 7.25C7.38236 7.25 6.375 8.25736 6.375 9.5C6.375 10.7426 7.38236 11.75 8.625 11.75C9.86764 11.75 10.875 10.7426 10.875 9.5C10.875 8.25736 9.86764 7.25 8.625 7.25ZM4.75191 15.9528C5.3309 14.3765 6.84542 13.25 8.62496 13.25C10.4045 13.25 11.919 14.3765 12.498 15.9528C12.6271 16.3043 12.4771 16.6972 12.1466 16.8733C11.0958 17.4331 9.89627 17.75 8.62496 17.75C7.35364 17.75 6.15413 17.4331 5.10331 16.8733C4.77278 16.6972 4.62279 16.3043 4.75191 15.9528ZM15 8.75C14.5858 8.75 14.25 9.08579 14.25 9.5C14.25 9.91421 14.5858 10.25 15 10.25H18.75C19.1642 10.25 19.5 9.91421 19.5 9.5C19.5 9.08579 19.1642 8.75 18.75 8.75H15ZM14.25 12.5C14.25 12.0858 14.5858 11.75 15 11.75H18.75C19.1642 11.75 19.5 12.0858 19.5 12.5C19.5 12.9142 19.1642 13.25 18.75 13.25H15C14.5858 13.25 14.25 12.9142 14.25 12.5ZM15 14.75C14.5858 14.75 14.25 15.0858 14.25 15.5C14.25 15.9142 14.5858 16.25 15 16.25H18.75C19.1642 16.25 19.5 15.9142 19.5 15.5C19.5 15.0858 19.1642 14.75 18.75 14.75H15Z"
                                        fill="white"
                                    />
                                </svg>

                                <h3 data-animation="header">Personalization</h3>
                            </div>
                            <p
                                className="debit__cards__perk__item__description"
                                data-animation="paragraph"
                            >
                                Customize your card to reflect your unique
                                style. Choose from a range of designs that suit
                                your personality.
                            </p>
                        </div>
                        <div className="debit__cards__perks__items">
                            <div className="debit__cards__perk__item">
                                <svg
                                    width="24"
                                    height="25"
                                    viewBox="0 0 24 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12 2C9.10051 2 6.75 4.35051 6.75 7.25V10.25C5.09315 10.25 3.75 11.5931 3.75 13.25V20C3.75 21.6569 5.09315 23 6.75 23H17.25C18.9069 23 20.25 21.6569 20.25 20V13.25C20.25 11.5931 18.9069 10.25 17.25 10.25V7.25C17.25 4.35051 14.8995 2 12 2ZM15.75 10.25V7.25C15.75 5.17893 14.0711 3.5 12 3.5C9.92893 3.5 8.25 5.17893 8.25 7.25V10.25H15.75Z"
                                        fill="white"
                                    />
                                </svg>

                                <h3 data-animation="header">
                                    Enhanced Security
                                </h3>
                            </div>
                            <p
                                className="debit__cards__perk__item__description"
                                data-animation="paragraph"
                            >
                                Your peace of mind is our priority. Our cards
                                feature advanced security measures to protect
                                your transactions and data.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DebitCards;
