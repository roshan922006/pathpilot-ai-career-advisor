import React from "react";
import ProgressBar from "./ProgressBar";

export default function ModuleCard({ module, onClick }) {
  return (
    <div className={`p-6 rounded-xl shadow-lg card-hover ${module.color} text-white cursor-pointer`} onClick={onClick}>
      <h3 className="font-bold text-xl mb-2">{module.title}</h3>
      <ul className="list-disc list-inside mb-2">
        {module.exercises.map((ex, idx) => <li key={idx}>{ex}</li>)}
      </ul>
      <ProgressBar progress={module.progress} />
    </div>
  )
}
