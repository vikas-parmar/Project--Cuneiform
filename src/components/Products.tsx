import { useState } from "react";
import { laptop, wiki } from "../assets";
import "../styles/product.css";

const list = [
  { id: 1, title: "Wiki" },
  { id: 2, title: "Projects" },
  { id: 3, title: "Processes" },
  { id: 4, title: "Onboarding" },
  { id: 5, title: "Meetings" },
  { id: 6, title: "Team updates" },
  { id: 7, title: "1:1s" },
  { id: 8, title: "User research" },
  { id: 9, title: "More →" },
];

const Products = () => {
  const [clickedItemIndex, setClickedItemIndex] = useState<number>(0);

  return (
    <section id="products">
      <div>
        <h2>A home for all of your knowledge.</h2>
        <p>
          Project, knowledge base, process {"–"} bring all your work to life in
          Docs.
        </p>
      </div>

      <div className="box">
        <ul>
          {list.map((item, i) => (
            <li
              key={i}
              className={i === clickedItemIndex ? "white--background" : ""}
              onClick={() => {
                if (i !== clickedItemIndex) {
                  setClickedItemIndex(i);
                }
              }}
            >
              {item.title}
            </li>
          ))}
        </ul>
        
        <div className="img-container">
          <img src={laptop} alt="" className="laptop-img" />
          <img src={wiki} alt="" className="wiki-img" />
        </div>
      </div>

    </section>
  );
};

export default Products;
