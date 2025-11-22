import React from "react";

export default function ResultCard({ user, score, total, onRestart, onPlayAgain }) {
  const percent = Math.round((score / total) * 100);
  const passed = percent >= 50;

  const exportCSV = () => {
    const rows = [
      ["Name","Email","Age","Gender","Score","Total","Percent"],
      [user.name,user.email,user.age,user.gender,score,total,`${percent}%`],
    ];
    const csv = rows.map(r => r.map(c => `"${String(c).replace(/"/g,'""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = `${user.name || "result"}-quiz.csv`; a.click(); URL.revokeObjectURL(url);
  };

  const saveToLocal = () => {
    try {
      const key = "quiz_results_v1";
      const prev = JSON.parse(localStorage.getItem(key) || "[]");
      prev.unshift({ user, score, total, percent, date: new Date().toISOString() });
      localStorage.setItem(key, JSON.stringify(prev.slice(0,50)));
      alert("Saved.");
    } catch (e) { alert("Could not save."); }
  };

  return (
    <div className="result-screen fade-up" style={{ padding: 22 }}>
      <div style={{ display: "flex", gap: 18, alignItems: "center", marginBottom: 10 }}>
        <div style={{
          width: 80, height: 80, borderRadius: 14,
          display: "grid", placeItems: "center",
          background: passed ? "linear-gradient(90deg,#d1fae5,#ecfccb)" : "linear-gradient(90deg,#ffe4e6,#fff1f2)",
          boxShadow: "0 10px 28px rgba(11,28,50,0.06)"
        }}>
          <div className="result-illustration" style={{ fontSize: 28, fontWeight: 800, color: passed ? "#064e3b" : "#7f1d1d" }}>
            {percent}%
          </div>
        </div>

        <div>
          <h2 style={{ margin: 0, fontSize: 20, color: "#072340" }}>Quiz Results</h2>
          <p style={{ marginTop: 6, color: "#6b7280" }}>Well done, <strong>{user.name}</strong>!</p>
        </div>
      </div>

      <div style={{ display: "grid", gap: 10, gridTemplateColumns: "1fr 1fr", marginBottom: 14 }}>
        <div className="result-box"><div className="result-box-label">Name</div><div className="result-box-value">{user.name}</div></div>
        <div className="result-box"><div className="result-box-label">Email</div><div className="result-box-value">{user.email}</div></div>
        <div className="result-box"><div className="result-box-label">Age</div><div className="result-box-value">{user.age}</div></div>
        <div className="result-box"><div className="result-box-label">Gender</div><div className="result-box-value">{user.gender}</div></div>
      </div>

      <div style={{ marginBottom: 14 }}>
        <div style={{ color: "#6b7280", marginBottom: 6 }}>Score</div>
        <div style={{ fontSize: 18, fontWeight: 800 }}>
          {score} / {total} • <span style={{ color: passed ? "#065f46" : "#9b1c1c" }}>{passed ? "Passed" : "Needs Improvement"}</span>
        </div>
      </div>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <button className="btn btn-primary" onClick={onPlayAgain}>Play Again</button>
        <button className="btn btn-ghost" onClick={onRestart}>New User</button>
        <button className="btn btn-ghost" onClick={exportCSV}>Export CSV</button>
        <button className="btn btn-ghost" onClick={saveToLocal}>Save Locally</button>
      </div>
    </div>
  );
}
