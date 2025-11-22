import React, { useState, useEffect } from "react";

function QuestionCard({ question, options, correctAnswer, currentQ, totalQ, onAnswer }) {
  const [selected, setSelected] = useState(null);
  const [locked, setLocked] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    // Reset local animations when question changes
    setSelected(null);
    setLocked(false);
    setShowFeedback(false);
  }, [question]);

  const handleClick = (opt) => {
    if (locked) return;
    setSelected(opt);
    setLocked(true);
    setShowFeedback(true);

    // After short feedback delay notify parent
    setTimeout(() => {
      onAnswer(opt);
    }, 700);
  };

  const getOptionClass = (opt) => {
    if (!showFeedback) return "option option-default";
    if (opt === correctAnswer) return "option option-correct";
    if (opt === selected && opt !== correctAnswer) return "option option-wrong";
    return "option option-faded";
  };

  return (
    <div className="question-card-decor fade-up">
      <div className="q-top">
        <div className="q-meta">Question {currentQ + 1} of {totalQ}</div>
        <div className="q-bubble">Tip: read carefully ✨</div>
      </div>

      <div className="q-text" dangerouslySetInnerHTML={{ __html: question }} />

      <div className="options-grid">
        {options.map((opt, idx) => (
          <button
            key={idx}
            className={getOptionClass(opt)}
            onClick={() => handleClick(opt)}
            disabled={locked}
            type="button"
          >
            <span className="opt-letter">{opt.split(".")[0]}</span>
            <span className="opt-text">{opt.replace(/^[A-D]\.\s*/, "")}</span>
            <span className="opt-check" aria-hidden>
              {showFeedback && opt === correctAnswer ? "✓" : ""}
              {showFeedback && opt === selected && opt !== correctAnswer ? "✕" : ""}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
