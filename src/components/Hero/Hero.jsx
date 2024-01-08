import { IoChevronForward } from "react-icons/io5";
import "/src/styles/components/hero.scss";


function Hero() {
  return (
    <section className="hero">
      <div className="hero_wrapper">
        <div className="hero_info">
          <div className="hero_info_wrapper">
            <p className="hero_info_text">Introducing Raft Cards</p>
            <span className="hero_info_icon">
              <IoChevronForward />
            </span>
          </div>
        </div>
        <div className="hero_title">
          <div className="hero_title_wrapper">
            <span className="hero_title_text">Building the future of</span>
            <div className="hero_title_text">banking</div>
          </div>
        </div>
        <div className="hero_description">
          <div className="hero_description_wrapper">
            <p className="hero_description_text">
              Experience the future of banking with RAFT. We are here to <br />
              empower your financial journey
            </p>
          </div>
        </div>
        <div className="hero_button">
          <div className="hero_button_wrapper">
            <button className="hero_button_item">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
