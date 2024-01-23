import '../../styles/components/features.scss';
import GridOneSvg from '../../assets/Vector_features.svg';
import crypto from '../../assets/crypto.svg';
function GridTwo() {
    return (
        <div className="features_grid_layout_item features_grid_layout_item--2">
            <figure className="features_grid_layout_item_grid">
                <img
                    className="features_grid_background--2"
                    src={GridOneSvg}
                    alt="Grid background"
                    width={400}
                />
            </figure>
            <div className="features_grid_content_investing">
                <div className="features_grid_content_investing_wrapper">
                    <div className="features_grid_contents_content_wrapper">
                        <div className="features_grid_contents_content  features_grid_contents_content--1">
                            <figure className="features_grid_contents_content_svg ">
                                <img
                                    className="features_grid_contents_content_svg_icon"
                                    src={crypto}
                                    alt="cryptocurrency"
                                />
                            </figure>
                            <p>Cryptocurrency</p>
                        </div>
                        <div className="features_grid_contents_content">
                            <figure className="features_grid_contents_content_svg ">
                                <img
                                    className="features_grid_contents_content_svg_icon"
                                    src={crypto}
                                    alt="cryptocurrency"
                                />
                            </figure>
                            <p>Smart Portfolio Investing</p>
                        </div>
                        <div className="features_grid_contents_content">
                            <figure className="features_grid_contents_content_svg ">
                                <img
                                    className="features_grid_contents_content_svg_icon"
                                    src={crypto}
                                    alt="cryptocurrency"
                                />
                            </figure>
                            <p>Sustainable Investing</p>
                        </div>
                    </div>
                    <div className="features_grid_overlay"></div>
                    <div className="smart_investing">
                        <h3 className="smart_investing_title">
                            Smart Investing
                        </h3>
                        <p className="smart_investing_description">
                            <span>
                                Grow your wealth confidently with our
                                personalized investment
                            </span>
                            <span>
                                solutions, tailored to your financial goals.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GridTwo;
