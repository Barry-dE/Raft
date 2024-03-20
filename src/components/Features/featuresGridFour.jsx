import './gridFour.scss';
import wangCard from '/assets/wang.jpg';

function FeaturesGridFour() {
    return (
        <div className="features__grid__four">
            <div className="features__grid__four">
                <div className="features__grid__four__card">
                    <figure>
                        <img src={wangCard} alt="a card of wang" />
                    </figure>
                </div>

                <div className="features__grid__text features__grid__item__text">
                    <h3>Wealth Management</h3>
                    <p>
                        Make informed decisions for your financial future with
                        our wealth management expertise.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default FeaturesGridFour;
