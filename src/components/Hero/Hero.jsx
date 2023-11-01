import "./hero.scss";
import { GrNext } from "react-icons/gr";
function Hero() {
  return (
    <section className="heroWrapper">
      <div className="heroWrapper_text-wrapper">
        <p className="heroWrapper_text-wrapper_paragraph">
          Introducing Raft cards
          {GrNext}
        </p>

        <h1>
          Building the future of <br /> <span>banking.</span>
        </h1>
        <p className="heroWrapper_text-wrapper_paragraph-2">
          Experience the future of banking with Raft. We are here to <br />
          <span> empower your financial journey.</span>
        </p>
        <button className="heroWrapper_text-wrapper_btn"> Get Started</button>
      </div>
    </section>
  );
}

export default Hero;
