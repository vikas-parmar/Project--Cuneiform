import "../styles/navbar.css";

const list = ["Product", "Templates", "Pricing", "Blog", "Sign in"];

const Navbar = () => {
  return (
    <header>
      <nav>
        <h2>slite</h2>
        <ul>
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        <li className="outlined">Request a demo</li>
        <li className="filled">Start for free</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
