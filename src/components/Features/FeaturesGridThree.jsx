import services from '/assets/Group-8.svg';
import './gridThree.scss';

function FeaturesGridThree() {
    return (
        <>
            <div
                className="features__grid--3 features__grid__item__contents"
                width={100}
            >
                <figure>
                    <img src={services} alt="" />
                </figure>
            </div>
            <div className="features__grid__item__text">
                <h3>Financial Planning</h3>
                <p>
                    <span>
                        Achieve your financial dreams with our comprehensive
                        financial planning
                    </span>
                    <span>services, guiding you toward a secure future.</span>
                </p>
            </div>
        </>
    );
}

export default FeaturesGridThree;
