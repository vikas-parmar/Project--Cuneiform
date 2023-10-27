interface template {
  title: string;
  img: string;
  color: string;
}

type TextAlign = "left" | "right" | "center" | "justify";
type Position = "absolute" | "relative";

const box = {
  height: "220px",
  width: "200px",
  display: "flex",
  justifyContent: "center",
  background: "#fff",
  padding: "10px 20px",
  textAlign: "center" as TextAlign,
  boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
  borderRadius: "10px",
  border: "1px solid rgba(255, 255, 255, 0.18)",
};

const background = (clr: string) => {
  return {
    width: "105px",
    height: "105px",
    borderRadius: "50%",
    backgroundColor: clr,
    position: "absolute" as Position,
    top: "35%",
  };
};

const TemplateCard = ({ title, img, color }: template) => {
  return (
    <div style={box}>
      <h4 style={{fontWeight:"500"}}>{title}</h4>
      <div style={background(color)}></div>
      <img src={img} alt="" style={{ position: "absolute", top: "35%" }} />
    </div>
  );
};

export default TemplateCard;
