import { IoChevronForward } from 'react-icons/io5';
import gridBackground from '/assets/Grid.svg';
import '/src/styles/components/hero.scss';

function Hero() {
    return (
        <section className="hero">
            <div className="hero__Wrapper">
                <div className="hero__content">
                    <div className="hero__content__gridBackground">
                        <figure>
                            <img
                                className="hero__content__gridBackground__image"
                                src={gridBackground}
                                alt="grid background"
                            />
                        </figure>
                    </div>
                    <div className="hero__content__wrapper">
                        <div className="hero__content__marquee">
                            <div className="hero__content__marquee__wrapper">
                                <p className="hero__content__marquee__text__paragraph">
                                    Introducing Raft cards
                                </p>
                                <IoChevronForward size={'2rem'} />
                            </div>
                        </div>
                        <div className="hero__content__title">
                            <div className="hero__content__title_text">
                                <p>Building the future of banking</p>
                            </div>
                        </div>
                        <div className="hero__content__title__description">
                            <div className="hero__content__title__description__text">
                                <p>
                                    Experience the future of banking with RAFT.
                                    We are here to empower your financial
                                    journey
                                </p>
                            </div>
                        </div>
                        <button className="hero__content__button">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
