import '../../styles/components/benefits.scss';
function Benefits() {
    return (
        <div className="benefits">
            <div className="benefits__wrapper">
                <div className="benefits__text">
                    <p
                        className="benefits__text__content"
                        data-animation="header"
                    >
                        Smart Investments,
                    </p>
                    <p
                        className="benefits__text__content"
                        data-animation="header"
                    >
                        Secure payments,
                    </p>
                    <p
                        className="benefits__text__content"
                        data-animation="header"
                    >
                        and expert guidance
                    </p>
                    <p className="benefits__text__content">
                        all in <span className="round"></span>ne place
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Benefits;
