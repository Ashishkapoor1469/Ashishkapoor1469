import React, { useState } from 'react';
import { toast } from 'react-toastify';
const questions = [
    { question: "What is JavaScript?", options: ["A programming language", "A database", "A CSS framework", "An operating system"], answer: 0 },
    { question: "Which keyword is used to declare a variable in JavaScript?", options: ["var", "let", "const", "All of the above"], answer: 3 },
    { question: "What does the 'typeof' operator do?", options: ["Checks if a variable is defined", "Returns the data type of a variable", "Converts a variable to a string", "None of the above"], answer: 1 },
    { question: "Which function is used to parse a string to an integer?", options: ["parseInt()", "parseFloat()", "Number()", "JSON.parse()"], answer: 0 },
    { question: "What is an arrow function?", options: ["A function with a different syntax", "A function that must have parameters", "A function that runs only once", "None of the above"], answer: 0 },
    { question: "Which built-in method is used to add elements to the end of an array?", options: ["push()", "pop()", "unshift()", "shift()"], answer: 0 },
    { question: "What is 'NaN' in JavaScript?", options: ["Not a Number", "A null value", "An undefined variable", "None of the above"], answer: 0 },
    { question: "Which loop executes at least once before checking the condition?", options: ["for", "while", "do...while", "None of the above"], answer: 2 },
    { question: "How do you declare an asynchronous function in JavaScript?", options: ["async function myFunc()", "function async myFunc()", "async: function myFunc()", "None of the above"], answer: 0 },
    { question: "What is the purpose of 'localStorage' in JavaScript?", options: ["To store data persistently in the browser", "To temporarily store data", "To store session data", "None of the above"], answer: 0 },
    { question: "What is the difference between '==' and '==='?", options: ["'==' checks value, '===' checks value and type", "They are the same", "'==' is strict comparison", "None of the above"], answer: 0 },
    { question: "Which function is used to schedule code execution after a delay?", options: ["setTimeout()", "setInterval()", "requestAnimationFrame()", "None of the above"], answer: 0 },
    { question: "What does JSON stand for?", options: ["JavaScript Object Notation", "Java Standard Output Notation", "Java Serialized Object Notation", "None of the above"], answer: 0 },
    { question: "Which array method is used to filter elements?", options: ["map()", "reduce()", "filter()", "forEach()"], answer: 2 },
    { question: "What does the 'this' keyword refer to in JavaScript?", options: ["The global object", "The object it belongs to", "Depends on the context", "None of the above"], answer: 2 },
    { question: "What is a closure in JavaScript?", options: ["A function inside another function that has access to outer variables", "A function with no return value", "A loop that never ends", "None of the above"], answer: 0 },
    { question: "Which statement is used to handle exceptions in JavaScript?", options: ["try...catch", "if...else", "switch", "None of the above"], answer: 0 },
    { question: "Which JavaScript feature allows functions to be assigned to variables?", options: ["First-class functions", "Closures", "Prototypes", "None of the above"], answer: 0 },
    { question: "What is event bubbling in JavaScript?", options: ["An event propagates from child to parent elements", "An event propagates from parent to child elements", "An event stops at the target element", "None of the above"], answer: 0 },
    { question: "How do you convert a JavaScript object to a JSON string?", options: ["JSON.stringify()", "JSON.parse()", "Object.toJSON()", "None of the above"], answer: 0 }
  ];

const Jsquiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (index) => {
    if (index === questions[currentQuestion].answer) {
      toast.success("Correct answer!");
      setScore(score + 1);
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowResult(true);
      }
    } else {
      toast.error("Wrong answer! Restarting the quiz.");
      setCurrentQuestion(0);
      setScore(0);
      setShowResult(false);
    }
  };

  return (
    <div className="min-w-screen min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        {showResult ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold">Quiz Completed!</h2>
            <p className="text-lg mt-4">Your score: {score} / {questions.length}</p>
            <p className="text-lg mt-4">Good luck for your next quiz!</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
              onClick={() => {
                setCurrentQuestion(0);
                setScore(0);
                setShowResult(false);
              }}
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold">{questions[currentQuestion].question}</h2>
            <div className="mt-4 space-y-2">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg"
                  onClick={() => handleAnswer(index)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Jsquiz;