import "./FAQ.css";
import { data } from "../../Objects/Objects";
const FAQ = () => {
  return (
    <section>
      <div className="faqWrapper">
        <h2>Frequently Asked Questions</h2>
        <div className="accordion">
          {data.map((item) => (
            <div key={item.id} className="item">
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
