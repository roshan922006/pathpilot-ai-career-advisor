import React from "react";

export default function ProjectCard({ project, onClick }) {
  return (
    <div className={`p-6 rounded-xl shadow-lg card-hover ${project.color} text-white cursor-pointer`} onClick={onClick}>
      <h3 className="font-bold text-xl mb-2">{project.title}</h3>
      <p className="mb-2">{project.description}</p>
      <p className="text-sm">Tools: {project.tools.join(", ")}</p>
    </div>
  );
}
