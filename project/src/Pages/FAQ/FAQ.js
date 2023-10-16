import "./FAQ.css";
const FAQ = () => {
  const data = [
    {
      id: 1,
      title: `What is "Mubi" all about?`,
      content:
        "Mubi is a platform dedicated to providing movie enthusiasts with in-depth and honest movie reviews. Our goal is to help you make informed decisions about what to watch next.",
    },
    {
      id: 2,
      title: "How are movies reviewed on Mubi?",
      content:
        "Our team of experienced and passionate movie reviewers watches and evaluates a wide range of films. We assess various aspects such as acting, plot, cinematography, and overall entertainment value. Each review is carefully crafted to offer insightful and unbiased opinions.",
    },
    {
      id: 3,
      title: "Can I request a specific movie review?",
      content:
        "Yes, we welcome movie review requests from our users. You can suggest a movie you'd like us to review, and we will consider it for future review publications.",
    },
    {
      id: 4,
      title: "Are the movie reviews spoiler-free?",
      content:
        "We strive to keep our reviews as spoiler-free as possible. You can expect a general overview of the movie's strengths and weaknesses without revealing crucial plot details. However, please be cautious when reading user comments, as spoilers may be present there.",
    },
    {
      id: 5,
      title: "How often are new movie reviews published on Mubi?",
      content:
        " We aim to publish new movie reviews regularly, typically within a week of a movie's release. However, the frequency may vary based on the number of new releases and our team's availability.",
    },
    {
      id: 6,
      title: "Can I contribute as a movie reviewer for Mubi?",
      content: `We are always open to new contributors. If you are passionate about movies and writing, you can contact us through our "Contact" page to inquire about becoming a part of our review team.`,
    },
    {
      id: 7,
      title: "Can I share reviews from Mubi on social media?",
      content:
        "Yes, you are encouraged to share reviews and movie information from our website on your social media platforms. We provide social sharing buttons to make this process easy.",
    },
  ];

  return (
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
  );
};

export default FAQ;
