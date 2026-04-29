import React, { useState } from "react";

export default function App() {
  const [ticker, setTicker] = useState("UUUU");

  return (
    <div className="wrap">
      <h1 className="title">Freedom Trade Fit Engine</h1>
      <p className="sub">מערכת בדיקת מניות לפי השיטה שלך</p>

      <div className="row">
        <input
          value={ticker}
          onChange={(e) => setTicker(e.target.value.toUpperCase())}
        />
        <button>Load</button>
      </div>

      <div className="card">
        <div className="ticker">{ticker}</div>
        <p className="green">GREEN / מתאים</p>
        <p className="score">Trade Fit Score: 84/100</p>
        <p className="note">כאן נחבר גרף אמיתי בשלב הבא</p>
      </div>
    </div>
  );
}
