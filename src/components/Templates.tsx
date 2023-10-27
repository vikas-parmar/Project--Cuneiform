import { templateData } from "../data";
import TemplateCard from "./TemplateCard";
import "../styles/template.css";

const Templates = () => {
  return (
    <section id="templates">
      <h3 className="heading">Beat the blank canvas with Templates</h3>
      <p>
        Ready-to-use Templates for product specs, company handbooks, meeting
        notes and more.
      </p>
      <button className="outlined">Browse templates</button>
      <div className="template--container">
        {templateData.map((item) => (
          <TemplateCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Templates;
