import arrowIcon from '../../assets/arrow.png'
import '../../styles/components/features.scss'

function GridOne() {
    return (
        <>
            <div className="features_grid_content_box">
                <div className="features_grid_content_box_item features_grid_content_box_item--1">
                    <span>
                        <figure>
                            <img src={arrowIcon} alt="arrow icon" width={300} />
                        </figure>
                    </span>
                    <p>+ $22.15 Received from Nguyen Shane</p>
                </div>
                <div className="features_grid_content_box_item features_grid_content_box_item--2">
                    <span>
                        <figure>
                            <img src={arrowIcon} alt="arrow icon" width={300} />
                        </figure>
                    </span>
                    <p>+ $300.52 Received from Cooper Kristin</p>
                </div>
                <div className="features_grid_content_box_item features_grid_content_box_item--3">
                    <span>
                        <figure>
                            <img src={arrowIcon} alt="arrow icon" width={300} />
                        </figure>
                    </span>
                    <p>+ $50.00 Received from Miles Esther</p>
                </div>
            </div>
            <div className="features_grid_overlay"></div>
            <div className="features_grid_content_box_item_title">
                <h3>Seamless Payments</h3>
                <p>
                    <span>
                        Enjoy secure, seamless transactions that make managing
                        your money a
                    </span>
                    <span>breeze.</span>
                </p>
            </div>
        </>
    )
}

export default GridOne
