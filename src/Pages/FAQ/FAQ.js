import { data } from "../../Objects/Objects";
const FAQ = () => {
  return (
    <section>
      <div>
        <h2 className="text-lg font-bold my-6">Frequently Asked Questions</h2>
        <div className="text-secondary max-w-5xl w-full">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-dark py-6 px-10 leading-7 mb-6 rounded-md"
            >
              <h3 className="mb-4">{item.title}</h3>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
