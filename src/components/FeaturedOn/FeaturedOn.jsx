import cnn from "/cnn.png";
import cnbc from "/cnbc.png";
import reuters from "/reuters.png";
import bloomberg from "/bloomberg.png";
import forbes from "/forbes.png";
import "./featuredOn.scss";

function FeaturedOn() {
  return (
    <div className="featuredOnWrapper">
      <div className="featuredOnWrapper_item">
        <figure>
          <img src={forbes} alt="Forbes logo" />
        </figure>
      </div>
      <div className="featuredOnWrapper_item">
        <figure>
          <img src={bloomberg} alt="Bloomberg logo" />
        </figure>
      </div>
      <div className="featuredOnWrapper_item">
        <figure>
          <img src={cnbc} alt="CNBC logo" />
        </figure>
      </div>
      <div className="featuredOnWrapper_item">
        <figure>
          <img src={reuters} alt="Reuters logo" />
        </figure>
      </div>
      <div className="featuredOnWrapper_item">
        <figure>
          <img src={cnn} alt="CNN logo" />
        </figure>
      </div>
    </div>
  );
}

export default FeaturedOn;
