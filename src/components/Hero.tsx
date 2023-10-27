import { brands, hero_img, line, write } from "../assets";
import "../styles/hero-section.css";

type TextAlign = "left" | "right" | "center" | "justify";

const card = (w: string, z: number) => {
  return {
    width: w,
    zIndex: z,
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    padding: "10px 20px",
    textAlign: "center" as TextAlign,
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    borderRadius: "5px",
    border: "1px solid rgba(255, 255, 255, 0.18)",
  };
};

const Hero = () => {
  return (
    <section className="hero-section">
      {/* ______________Main Heading______________ */}
      <h1>Bring Clarity to your team</h1>
      <img src={line} alt="" className="line" />
      <p>
        Slite is a modern knowledge base that drives action with structured
        docs, thoughtful collaboration and confident decision-making.
      </p>

      <form>
        <input type="text" placeholder="name@company.com" />
        <button>Start for free</button>
      </form>

      <div style={{ position: "relative" }}>
        <img src={hero_img} alt="main page photo" className="main--image" />

        <div className="cards">
          <p className="time">8:45 AM - PDT</p>
          {/* _______________Card component______________ */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={card("100%", 9)}>
              <img src={write} alt="" />
              <div>
                <h4>Georges made some changes</h4>
                <p>The abnormal guide to remote</p>
              </div>
            </div>
            <div style={card("80%", 8)}></div>
            <div style={card("60%", 7)}></div>
          </div>
        </div>
      </div>

      {/* ____________Brands Navigation_____________ */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p>200,000+ teams have found focus with Slite</p>
        <div className="brands">
          {brands.map((img, i) => (
            <img key={i} src={img} alt="" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;