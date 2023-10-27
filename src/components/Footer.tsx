import { bg, v } from "../assets";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <img src={bg} alt="" style={{ width: "100%" }} />
      <img
        src={v}
        alt=""
        style={{
          position: "relative",
          zIndex: 99999,
          top: "-70%",
          right: "-3%",
        }}
      />
      <div className="main--container">
        <div className="list--container">
          <div>
            <h4>What it's for</h4>
            <ul>
              <li>Knowledge base</li>
              <li>Working remotely</li>
              <li>Fix remote meetings</li>
              <li>Onboarding remotely</li>
              <li>Build human connection</li>
              <li>Handbooks</li>
            </ul>
          </div>
          <div>
            <h4>How it works</h4>
            <ul>
              <li>Features</li>
              <li>Integrations</li>
              <li>Pricing</li>
              <li>What's new</li>
              <li>Help center</li>
              <li>Contact support</li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li>Templates</li>
              <li>Learn</li>
              <li>Blog</li>
              <li>Startup Bibles</li>
              <li>Remote handbook</li>
              <li>Management handbook</li>
              <li>Download apps</li>
              <li>Chrome extension</li>
            </ul>
          </div>
          <div>
            <h4>Slite</h4>
            <ul>
              <li>About us</li>
              <li>Find us on Twitter</li>
              <li>
                Careers{" "}
                <span
                  style={{
                    background: "#F67748",
                    color: "#fff",
                    padding: "5px",
                    borderRadius: "60px",
                  }}
                >
                  Hiring
                </span>{" "}
              </li>
              <li>Customers</li>
              <li>Press kit</li>
            </ul>
          </div>
          <div>
            <h4>Compare</h4>
            <ul>
              <li>Notion</li>
              <li>Confluence</li>
              <li>Google Docs</li>
              <li>Dropbox Paper</li>
              <li>All comparisons</li>
            </ul>
          </div>
        </div>
        <div className="contact">
          <h4>Remote letters to read on your own time</h4>
          <form style={{ position: "relative" }}>
            <input type="text" placeholder="What's your email?" />
            <button>→</button>
          </form>
          <p>
            100% homemade, no tricks or ponies or growth hacking nonsense. Just
            remote things we care about with a short surprising insight every
            week. No rush.
          </p>
        </div>
      </div>

      <hr />

      <div className="copyrights">
        <ul>
          <li>Privacy</li>
          <li>Security</li>
          <li>User terms</li>
          <li>Customer terms</li>
        </ul>
        <p>©2022 Slite. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
