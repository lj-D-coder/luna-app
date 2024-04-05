"use client";
import React, { useState } from "react";

const faqs = [
  {
    "question": "What is Node.js?",
    "answer": "Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications."
  },
  {
    "question": "Why should I use Docker with Node.js?",
    "answer": "Docker can help you build a container for your application and its dependencies in a lightweight and standalone executable package."
  },
  {
    "question": "What is React.js?",
    "answer": "React.js is a JavaScript library for building user interfaces, primarily for single-page applications."
  },
  {
    "question": "Why should I use Redux with React.js?",
    "answer": "Redux is a predictable state container for JavaScript apps that helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test."
  }
  
];

const FAQ = () => {
  const [isRotated, setIsRotated] = useState<boolean[]>(new Array(faqs.length).fill(false));

  const toggleRotation = (index: number) => {
    setIsRotated(prevState => prevState.map((item, i) => i === index ? !item : false));
  };

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <>
      <div className="container my-24 mx-auto md:px-6 xl:px-24">
        <section className="mb-32">
          <h2 className="mb-6 pl-6 text-3xl font-bold">Frequently asked questions</h2>
          <div className="rounded-none border border-t-0 border-l-0 border-r-0 border-neutral-200">
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <button
                    className="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]"
                    onClick={() => {
                      toggleAnswer(index);
                      toggleRotation(index);
                    }}
                    aria-expanded={index === expandedIndex}
                  >
                    {faq.question}

                    <span className={`ml-auto h-5 w-5 shrink-0 ${isRotated[index] ? 'rotate-180' : ''} fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee]`}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <path
                          fill-rule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`faq-answer px-5 text-neutral-500 transition-all duration-500 ease-in-out overflow-hidden ${
                      index === expandedIndex ? "max-h-screen" : "max-h-0"
                    }`}
                  >
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQ;
