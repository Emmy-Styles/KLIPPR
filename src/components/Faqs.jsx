import React, { useState } from "react";

const FAQs = () => {
  const faqsData = [
    {
      question: "What is Klippr?",
      answer: "Klippr is a fast and convenient URL management tool...",
    },
    {
      question: "How do I generate a Klipped link?",
      answer:
        "To generate a Klipped link, enter your long URL in the input field...",
    },
    {
      question: "How does Klippr work?",
      answer:
        "Klippr works by taking a long url and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the original URL.",
    },
    {
      question: "How do I share my Klipped link?",
      answer:
        "To share your Klipped link, simply copy the link and paste it wherever you want to share it.",
    },
    {
      question: "How do I customize my Klipped link?",
      answer:
        "To customize your Klipped link, click on the 'Customize' button and enter your desired URL slug.",
    },
    {
      question: "Can i track the perfomance of my Klipped link?",
      answer:
        "Yes, you can track the perfomance of your Klipped link by clicking on the 'Analytics' button.",
    },
    {
      question: "What is a QR code and what can it do?",
      answer:
        "A QR code is a type of barcode that can be read easily by a digital device and which stores information as a series of pixels in a square-shaped grid. QR codes can be used to store different kinds of information, such as links, plain text, phone numbers, email addresses, etc. QR codes can be scanned by a smartphone or tablet and they connect the user to the intended target.",
    },
    {
      question:
        "Are there any limitations to the number of links I can Klip?",
      answer:
        "No, there are no limitations to the number of links you can Klip.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(-1);

  const toggleQuestion = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(-1); // Collapse the clicked question
    } else {
      setExpandedIndex(index); // Expand the clicked question
    }
  };

  return (
    <div id="faq" className="faqSection">
      <h1>FAQs</h1>
      {faqsData.map((faq, index) => (
        <div key={index} className="faqItem">
          <div className="faqQuestion" onClick={() => toggleQuestion(index)}>
            <span className="faqSign">
              {expandedIndex === index ? "-" : "+"}
            </span>
            <span className="faqText">{faq.question}</span>
          </div>
          {expandedIndex === index && (
            <div className="faqAnswer">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQs;
