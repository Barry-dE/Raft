import heroImage from '/assets/Frame_31.jpg';
import forbes from '/assets/forbes.png';
import cnn from '/assets/cnn.png';
import bloomberg from '/assets/bloomberg.png';
import cnbc from '/assets/cnbc.png';
import reuters from '/assets/reuters.png';
import '../../styles/components/companies.scss';

function Companies() {
    return (
        <section className="companies">
            <div className="companies_wrapper">
                <div className="companies_media">
                    <figure>
                        <img
                            src={heroImage}
                            alt="A picture of two women smiling"
                            className="companies_media_image"
                        />
                    </figure>
                </div>
                <div className="companies_featured">
                    <div className="companies_featured_wrapper">
                        <p>featured and seen on </p>
                        <div className="companies_featured_logo">
                            <figure className="companies_feature_image">
                                <img
                                    src={forbes}
                                    alt="Forbes Logo"
                                    className="companies_featured_image_media"
                                />
                            </figure>

                            <figure className="companies_feature_image">
                                <img
                                    src={cnbc}
                                    alt="CNBC Logo"
                                    className="companies_featured_image_media"
                                />
                            </figure>
                            <figure className="companies_feature_image">
                                <img
                                    src={bloomberg}
                                    alt="Bloomberg Logo"
                                    className="companies_featured_image_media"
                                />
                            </figure>
                            <figure className="companies_feature_image">
                                <img
                                    src={reuters}
                                    alt="Reuters Logo"
                                    className="companies_featured_image_media"
                                />
                            </figure>
                            <figure className="companies_feature_image">
                                <img
                                    src={cnn}
                                    alt="CNN Logo"
                                    className="companies_featured_image_media"
                                />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Companies;
