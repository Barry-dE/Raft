import '../../styles/components/features.scss';
// import GridOneSvg from '../../assets/Vector_features.svg';
import GridOne from './GridOne';
import GridTwo from './GridTwo';

function Features() {
    return (
        <section className="features">
            <div className="features_wrapper">
                <div className="features_text">
                    <p className="features_text_title">
                        <span>Elevate Your Financial</span>
                        <span>Journey with RAFT</span>
                    </p>
                    <p className="features_text_title_description">
                        <span className="block">
                            RAFT offers a world of financial possibilities. From
                            investments to payments,
                        </span>
                        <span className="block">
                            we&apos;ve got you covered. Join us and unlock your
                            financial potential today.
                        </span>
                    </p>
                </div>
                <div className="features_grid_layouts">
                    <div className="features_grid_layouts_wrapper">
                        <div className="features_grid_layout">
                            <div className="features_grid_layout_wrapper">
                                <div className="features_grid_layout_item features_grid_layout_item--1">
                                    <figure>
                                        <img
                                            className="features_grid_background--1"
                                            // src={GridOneSvg}
                                            alt="Grid background"
                                            width={400}
                                        />
                                    </figure>
                                    <div className="features_grid_content">
                                        <div className="features_grid_content_wrapper">
                                            <GridOne />
                                        </div>
                                    </div>
                                </div>
                                {/* here */}
                                <GridTwo />
                                {/* here */}
                                <div className="features_grid_layout_item features_grid_layout_item--3">
                                    <figure>
                                        <img
                                            className="features_grid_background--3"
                                            // src={GridOneSvg}
                                            alt="Grid background"
                                        />
                                    </figure>
                                </div>
                                <div className="features_grid_layout_item features_grid_layout_item--4">
                                    <figure>
                                        <img
                                            className="features_grid_background--4"
                                            // src={GridOneSvg}
                                            alt="Grid background"
                                        />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Features;
