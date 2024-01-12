import "../../styles/components/features.scss";
import GridOneSvg from "../../assets/Vector_features.svg";
import arrowIcon from "../../assets/arrow.png";

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
              RAFT offers a world of financial possibilities. From investments
              to payments,
            </span>
            <span className="block">
              we&apos;ve got you covered. Join us and unlock your financial
              potential today.
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
                      src={GridOneSvg}
                      alt="Grid background"
                      width={400}
                    />
                  </figure>
                  <div className="features_grid_content">
                    <div className="features_grid_content_wrapper">
                      <div className="features_grid_content_box">
                        <div className="features_grid_content_box_item features_grid_content_box_item--1">
                          <span>
                            <figure>
                              <img
                                src={arrowIcon}
                                alt="arrow icon"
                                width={300}
                              />
                            </figure>
                          </span>
                          <p>+ $22.15 Received from Nguyen Shane</p>
                        </div>
                        <div className="features_grid_content_box_item features_grid_content_box_item--2">
                          <span>
                            <figure>
                              <img
                                src={arrowIcon}
                                alt="arrow icon"
                                width={300}
                              />
                            </figure>
                          </span>
                          <p>+ $300.52 Received from Cooper Kristin</p>
                        </div>
                        <div className="features_grid_content_box_item features_grid_content_box_item--3">
                          <span>
                            <figure>
                              <img
                                src={arrowIcon}
                                alt="arrow icon"
                                width={300}
                              />
                            </figure>
                          </span>
                          <p> + $50.00 Received from Miles Esther</p>
                        </div>
                      </div>

                      <div className="features_grid_content_box_item_title">
                        <h3>Seamless Payments</h3>
                        <p>
                          <span>
                            Enjoy secure, seamless transactions that make
                            managing your money a
                          </span>
                          <span>breeze.</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="features_grid_layout_item features_grid_layout_item--2">
                  <figure>
                    <img
                      className="features_grid_background--2"
                      src={GridOneSvg}
                      alt="Grid background"
                      width={400}
                    />
                  </figure>
                </div>
                <div className="features_grid_layout_item features_grid_layout_item--3">
                  <figure>
                    <img
                      className="features_grid_background--3"
                      src={GridOneSvg}
                      alt="Grid background"
                    />
                  </figure>
                </div>
                <div className="features_grid_layout_item features_grid_layout_item--4">
                  <figure>
                    <img
                      className="features_grid_background--4"
                      src={GridOneSvg}
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
