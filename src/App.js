import React, { useState, useEffect } from "react";
import ModuleCard from "./components/ModuleCard";
import ProjectCard from "./components/ProjectCard";
import PortfolioCard from "./components/PortfolioCard";
import InterviewCard from "./components/InterviewCard";
import Modal from "./components/Modal";

// Mock AI data
const generateModules = () => [
  { title: "AI Fundamentals", exercises: ["Chatbot", "ML Basics", "NLP Intro"], progress: 40, color: "bg-gradient-to-r from-purple-400 to-indigo-500" },
  { title: "Web Development", exercises: ["React App", "Node API", "Deploy"], progress: 30, color: "bg-gradient-to-r from-green-400 to-teal-500" },
  { title: "Data Science", exercises: ["Pandas", "Visualization", "Regression"], progress: 20, color: "bg-gradient-to-r from-yellow-400 to-orange-500" },
  { title: "Cloud & DevOps", exercises: ["AWS", "CI/CD", "Docker"], progress: 10, color: "bg-gradient-to-r from-red-400 to-pink-500" },
];

const generateProjects = () => [
  { title: "AI Chatbot", description: "Build GPT-powered bot", tools: ["ReactJS","NodeJS","GPT API"], color:"bg-gradient-to-r from-pink-400 to-red-500"},
  { title: "Portfolio Website", description: "Showcase skills", tools: ["ReactJS","Tailwind","Vercel"], color:"bg-gradient-to-r from-blue-400 to-indigo-500"},
];

const generateInterview = () => [
  { question:"Explain React lifecycle", hint:"Mounting/Updating/Unmounting", feedback:"Mention hooks too"},
  { question:"What is AI?", hint:"ML/NLP/Computer Vision", feedback:"Give examples"},
];

export default function App() {
  const [profile, setProfile] = useState(null);
  const [tab, setTab] = useState("modules");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);
  const [modules, setModules] = useState([]);
  const [projects, setProjects] = useState([]);
  const [interview, setInterview] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const skills = e.target.skills.value;
    const interests = e.target.interests.value;
    const education = e.target.education.value;
    const p = { skills, interests, education };
    setProfile(p);
  };

  useEffect(()=>{
    setModules(generateModules());
    setProjects(generateProjects());
    setInterview(generateInterview());
  },[]);

  const openModal = (content) => {
    setSelectedContent(content);
    setModalOpen(true);
  }

  if(!profile){
    return (
      <div className="min-h-screen flex items-center justify-center">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">PathPilot</h1>
          <input type="text" name="skills" placeholder="Skills" className="w-full p-3 border rounded mb-4" required/>
          <input type="text" name="interests" placeholder="Interests" className="w-full p-3 border rounded mb-4" required/>
          <input type="text" name="education" placeholder="Education" className="w-full p-3 border rounded mb-6" required/>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">Generate Dashboard</button>
        </form>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <
