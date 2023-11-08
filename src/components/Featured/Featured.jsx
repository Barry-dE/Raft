import featuredImage from "/Frame_31.jpg";

import "./featured.scss";
import FeaturedOn from "./FeaturedOn/FeaturedOn";
function Featured() {
  return (
    <section className="featuredWrapper">
      <div className="featuredWrapper_image-wrapper">
        <figure>
          <img
            src={featuredImage}
            alt="Two women smiling"
            width={700}
            sizes=""
          />
        </figure>
      </div>
      <div className="featuredWrapper_seenOnWrapper">
        <div className="featuredWrapper_seenOnWrapper_paragraph">
          <p>FEATURED AND SEEN ON</p>
        </div>
        <FeaturedOn />
      </div>
    </section>
  );
}

export default Featured;
