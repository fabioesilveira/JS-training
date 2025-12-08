import { useState } from "react";

export default function App() {

  const questions = [
    {
      question: "Which team Stephen Curry plays for?",
      options: ["Warriors", "Lakers", "Celtics"],
      answer: "Warriors",
    },
    {
      question: "Which team Jaylen Brown plays for?",
      options: ["Warriors", "Lakers", "Celtics"],
      answer: "Celtics",
    },
    {
      question: "Which team LeBron plays for?",
      options: ["Warriors", "Lakers", "Celtics"],
      answer: "Lakers",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);

  function handleNext() {
    if (selectedAnswer === questions[currentIndex].answer) {
      setScore(score + 1)
    }

    setSelectedAnswer("");
    setCurrentIndex(currentIndex + 1);
  }

  function handleRestart() {
    setCurrentIndex(0);
    setSelectedAnswer("");
    setScore(0);
  }

  if (currentIndex === questions.length) {
    return (
      <>
        <h2>the quiz has ended, you scored {score} of {questions.lenght}</h2>
        <button onClick={handleRestart}>Restart</button>
      </>
    )
  }


  return (
    <>
      <h2>{questions[currentIndex].question}</h2>
      {questions[currentIndex].options.map((e) => (
        <>
        <input
          type="radio"
          name="answer"
          checked={selectedAnswer === e}
          onChange={(event) => setSelectedAnswer(event.target.value)}
          value={e}
        />
        {e}
        </>
      ))}
      <button onClick={handleNext} disabled={!selectedAnswer}>next</button>
    </>
  )
}