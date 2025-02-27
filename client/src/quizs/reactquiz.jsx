import React, { useState } from 'react';
import { toast } from 'react-toastify';

const questions = [
  { question: "What is React?", options: ["A JavaScript library for building user interfaces", "A database management system", "A server-side framework", "A programming language"], answer: 0 },
  { question: "Which hook is used to manage state in a functional component?", options: ["useState", "useEffect", "useReducer", "useContext"], answer: 0 },
  { question: "What is JSX?", options: ["JavaScript XML", "A syntax extension for JavaScript", "Both A and B", "None of the above"], answer: 2 },
  { question: "Which method is used to render a React component?", options: ["ReactDOM.render", "renderComponent", "React.createComponent", "None of the above"], answer: 0 },
  { question: "What is the virtual DOM?", options: ["A real representation of the UI", "An abstraction of the actual DOM", "A separate DOM for styling", "None of the above"], answer: 1 },
  { question: "Which hook is used for side effects in a React component?", options: ["useState", "useEffect", "useReducer", "useCallback"], answer: 1 },
  { question: "What does the useRef hook do?", options: ["Manages state", "Handles side effects", "Returns a mutable ref object", "None of the above"], answer: 2 },
  { question: "Which lifecycle method is used to fetch data in class components?", options: ["componentDidMount", "componentWillMount", "componentWillUpdate", "componentDidUpdate"], answer: 0 },
  { question: "How do you pass data from a parent to a child component?", options: ["Using state", "Using props", "Using context", "None of the above"], answer: 1 },
  { question: "Which React feature prevents unnecessary re-renders?", options: ["React.memo", "useEffect", "useState", "React.lazy"], answer: 0 },
  { question: "What does the useReducer hook do?", options: ["Manages side effects", "Handles state with a reducer function", "Creates a reference object", "None of the above"], answer: 1 },
  { question: "Which keyword is used to create a React component?", options: ["component", "function", "class", "React.createComponent"], answer: 2 },
  { question: "What is the purpose of useContext hook?", options: ["To manage local state", "To access context values", "To perform side effects", "None of the above"], answer: 1 },
  { question: "Which tool is used for state management in large React applications?", options: ["Redux", "Context API", "MobX", "All of the above"], answer: 3 },
  { question: "What is the default behavior of useEffect?", options: ["Runs after every render", "Runs only once", "Runs before render", "Runs only on state change"], answer: 0 },
  { question: "What is React Fragment used for?", options: ["To group multiple elements without adding extra nodes", "To create animations", "To manage state", "None of the above"], answer: 0 },
  { question: "How do you handle forms in React?", options: ["Using state", "Using refs", "Using controlled components", "All of the above"], answer: 3 },
  { question: "What is the purpose of React Router?", options: ["To manage global state", "To handle navigation in a React app", "To handle API calls", "None of the above"], answer: 1 },
  { question: "Which method is used to lazy load components in React?", options: ["React.lazy", "React.memo", "useEffect", "useState"], answer: 0 }
];

const ReactQuiz = () => {
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

export default ReactQuiz;