import React from "react";

export default function PortfolioCard({ profile }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Portfolio Preview</h2>
      <p className="mb-2"><strong>Education:</strong> {profile.education}</p>
      <p className="mb-2"><strong>Skills:</strong> {profile.skills}</p>
      <p className="mb-2"><strong>Interests:</strong> {profile.interests}</p>
    </div>
  )
}
