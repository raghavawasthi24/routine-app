"use client";
import React from 'react'

export default function ProgressBar() {
    const [percentage, setPercentage] = React.useState(0);
  return (
    <div>
      <div className="progressbarfull">
        <div className="progressbar" style={{ width: `${percentage}%` }}></div>
      </div>
      <div className="percentage mt-1 ">{percentage}</div>
    </div>
  );
}
