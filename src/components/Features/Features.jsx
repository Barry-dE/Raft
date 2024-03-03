import '../../styles/components/features.scss';
import GridBackground from './GridBackground';
import FeaturesGridOne from './FeaturesGridOne';
import FeaturesGridThree from './FeaturesGridThree';

function Services() {
    return (
        <section className=".services">
            <div className="services__wrapper">
                <div className="services__text">
                    <div className="services__text__title">
                        <p>Elevate Your Financial </p>
                        <p> Journey with RAFT</p>
                    </div>
                    <div className="services__text__description">
                        <p>
                            RAFT offers a world of financial possibilities. From
                            investments to payments, we&apos;ve got you covered.
                            Join us and unlock your financial potential today.
                        </p>
                    </div>
                </div>
                <div className="services__gridLayout">
                    <div className="services__gridLayout__wrapper">
                        <div className="services__grid__item services__grid__item--1">
                            <GridBackground />
                            <FeaturesGridOne />
                        </div>
                        <div className="services__grid__item services__grid__item--2">
                            <GridBackground />
                        </div>
                        <div className="services__grid__item services__grid__item--3">
                            <GridBackground />
                            <FeaturesGridThree />
                        </div>
                        <div className="services__grid__item services__grid__item--4">
                            <GridBackground />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Services;
