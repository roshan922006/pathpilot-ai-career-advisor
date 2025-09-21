import React from "react";

export default function InterviewCard({ question }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <p className="font-bold mb-2">Q: {question.question}</p>
      <p className="text-gray-600 mb-1"><strong>Hint:</strong> {question.hint}</p>
      <p className="text-gray-600"><strong>Feedback:</strong> {question.feedback}</p>
    </div>
  )
}
