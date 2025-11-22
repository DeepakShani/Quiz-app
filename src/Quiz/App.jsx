import React, { useState } from "react";
import StartForm from "./StartForm";
import QuestionCard from "./Card";
import ResultCard from "./ResultCard";
import questions from "./Data";
import "./styles.css";

export default function App() {
  const [userData, setUserData] = useState(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const normalize = (str) => (str ? str.trim().toLowerCase() : "");

  // Called by QuestionCard after its local feedback delay
  const handleAnswer = (selected) => {
    if (normalize(selected) === normalize(questions[currentQ].answer)) {
      setScore((prev) => prev + 1);
    }

    const nextQ = currentQ + 1;
    if (nextQ < questions.length) {
      setCurrentQ(nextQ);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    // keep userData if you want; here we reset to allow new form entry
    setUserData(null);
    setCurrentQ(0);
    setScore(0);
    setShowResult(false);
  };

  const playAgain = () => {
    // keep user's details and let them reattempt quiz
    setCurrentQ(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="decor-app">
      <div className="decor-container">
        {/* Show start form when we don't have userData yet */}
        {!userData && (
          <StartForm
            onSubmit={(data) => {
              setUserData(data);
              // ensure quiz starts from first question
              setCurrentQ(0);
              setScore(0);
              setShowResult(false);
            }}
          />
        )}

        {/* Show quiz while userData exists and quiz not finished */}
        {userData && !showResult && (
          <>
            {/* header area (optional) */}
            <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <div>
                <strong>Player:</strong> {userData.name} • <span style={{ color: "#6b7280" }}>{userData.email}</span>
              </div>
              <div style={{ color: "#6b7280" }}>Question {currentQ + 1} / {questions.length}</div>
            </header>

            <QuestionCard
              question={questions[currentQ].question}
              options={questions[currentQ].options}
              correctAnswer={questions[currentQ].answer}
              currentQ={currentQ}
              totalQ={questions.length}
              onAnswer={handleAnswer}
            />
          </>
        )}

        {/* Show results when quiz finished */}
        {userData && showResult && (
          <ResultCard
            user={userData}
            score={score}
            total={questions.length}
            onRestart={restartQuiz}   // clears user details and score to start over
            onPlayAgain={playAgain}   // keeps details, replay quiz
          />
        )}
      </div>
    </div>
  );
}
