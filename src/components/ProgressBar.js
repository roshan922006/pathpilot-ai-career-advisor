import React from "react";

export default function ProgressBar({ progress }) {
  return (
    <div className="w-full progress-bg h-2 rounded-full mt-2">
      <div className="progress-fill bg-green-500" style={{ width: `${progress}%` }}></div>
    </div>
  )
}
