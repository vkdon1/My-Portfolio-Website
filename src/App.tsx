import React, { useState } from 'react';
import {
  Github,
  Linkedin,
  Youtube,
  Code,
  Mail,
  Phone,
  ExternalLink,
  Download,
  ChevronRight,
} from 'lucide-react';
import './index.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Vallabh Dongre</h1>
          <nav className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection('home')}
              className={`${
                activeSection === 'home' ? 'text-blue-600' : 'text-gray-600'
              } hover:text-blue-500`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`${
                activeSection === 'about' ? 'text-blue-600' : 'text-gray-600'
              } hover:text-blue-500`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className={`${
                activeSection === 'skills' ? 'text-blue-600' : 'text-gray-600'
              } hover:text-blue-500`}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className={`${
                activeSection === 'experience'
                  ? 'text-blue-600'
                  : 'text-gray-600'
              } hover:text-blue-500`}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={`${
                activeSection === 'projects' ? 'text-blue-600' : 'text-gray-600'
              } hover:text-blue-500`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className={`${
                activeSection === 'education'
                  ? 'text-blue-600'
                  : 'text-gray-600'
              } hover:text-blue-500`}
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`${
                activeSection === 'contact' ? 'text-blue-600' : 'text-gray-600'
              } hover:text-blue-500`}
            >
              Contact
            </button>
          </nav>
          <button className="md:hidden text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20"
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Vallabh Dongre
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Full Stack Developer | MERN Stack Developer | Software Engineer
            </h2>
            <p className="text-xl mb-8">
              Passionate about building robust web applications and exploring
              new technologies.
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-2 rounded-full shadow-xl">
              <img
                src="https://i.ibb.co/Zz18qL0K/PASS.jpg"
                alt="Vallabh Dongre"
                className="w-256 h-128 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              Accomplished Full Stack Developer Intern with hands-on experience
              in designing and implementing RESTful APIs, and developing
              full-stack web applications using JavaScript, React, and Node.js.
            </p>
            <p className="text-lg mb-6">
              Demonstrated expertise in cloud computing through a virtual
              internship at AWS Academy, specialising in AWS infrastructure
              management and deployment best practices.
            </p>
            <p className="text-lg mb-6">
              Gained practical knowledge in Salesforce development during an
              8-week virtual internship at SmartInternz, earning Super Badges in
              Apex Specialist, Process Automation Specialist, and Developer
              Super Set.
            </p>
            <p className="text-lg">
              Proficient in a wide range of technologies including C++, Core
              Java, Python, GitHub, HTML, CSS, Express.js, MySQL, MongoDB,
              Docker, Kubernetes, CI/CD pipelines and Tailwind CSS. Strong
              skills in effective communication, team collaboration,
              problem-solving and leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Technical Skills */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                Programming Languages
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">C++</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: '85%' }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Core Java</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: '80%' }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Python</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: '75%' }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">JavaScript</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: '90%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Frontend Skills */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                Frontend Technologies
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">React.js</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: '85%' }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">HTML & CSS</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: '90%' }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Tailwind CSS</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: '80%' }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Responsive Design</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: '85%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Skills */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                Backend Technologies
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Node.js</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: '85%' }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Express.js</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: '80%' }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">MongoDB</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: '75%' }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">MySQL</span>
                    <span>70%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: '70%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* DevOps Skills */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                DevOps & Tools
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Docker</span>
                    <span>70%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: '70%' }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Kubernetes</span>
                    <span>65%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: '65%' }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">CI/CD</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: '75%' }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">GitHub</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: '85%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cloud Skills */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                Cloud Computing
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">AWS</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: '75%' }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Cloud Infrastructure</span>
                    <span>70%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: '70%' }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Deployment</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: '80%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                Soft Skills
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Communication</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: '90%' }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Team Collaboration</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: '85%' }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Problem Solving</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: '90%' }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Leadership</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: '80%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Work Experience
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="relative border-l-2 border-blue-500 pl-8 pb-12">
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-500"></div>
              <div className="mb-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-xl font-bold">
                    Full Stack Developer Intern
                  </h3>
                  <span className="text-gray-600">01/2025 to Present</span>
                </div>
                <p className="text-gray-700 mb-2">Innomatics Research Labs</p>
                <ul className="list-disc ml-5 space-y-2 text-gray-700">
                  <li>
                    Collaborated with the development team to build and enhance
                    web applications.
                  </li>
                  <li>
                    Gained practical experience in frontend and backend
                    development using modern frameworks.
                  </li>
                  <li>
                    Contributed to project design, implementation, and testing
                    to improve application performance
                  </li>
                  <li>
                    Developed and maintained full-stack web applications using
                    JavaScript, React, and Node.js, enhancing user experience
                    and functionality.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative border-l-2 border-blue-500 pl-8 pb-12">
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-500"></div>
              <div className="mb-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-xl font-bold">
                    Full Stack Developer Intern
                  </h3>
                  <span className="text-gray-600">08/2024 to 09/2024</span>
                </div>
                <p className="text-gray-700 mb-2">Exposys Data Labs</p>
                <ul className="list-disc ml-5 space-y-2 text-gray-700">
                  <li>
                    Exhibited strong commitment and recognized for punctuality
                    in the Full Stack Developer internship.
                  </li>
                  <li>
                    Enhanced knowledge in full-stack development while
                    delivering impactful contributions to team initiatives.
                  </li>
                  <li>
                    Designed and implemented RESTful APIs, enabling effective
                    communication between front-end and back-end systems.
                  </li>
                  <li>
                    Developed and maintained full-stack web applications using
                    JavaScript, React, and Node.js, enhancing user experience
                    and functionality.
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative border-l-2 border-blue-500 pl-8 pb-12">
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-500"></div>
              <div className="mb-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-xl font-bold">
                    Cloud Virtual Internship
                  </h3>
                  <span className="text-gray-600">07/2024 to 09/2024</span>
                </div>
                <p className="text-gray-700 mb-2">AWS Academy</p>
                <ul className="list-disc ml-5 space-y-2 text-gray-700">
                  <li>
                    Gained expertise in cloud computing through a 10-week AWS
                    Academy virtual internship.
                  </li>
                  <li>
                    Specialized in AWS infrastructure management and deployment
                    best practices.
                  </li>
                  <li>
                    Engaged in a virtual internship focusing on cloud computing
                    with AWS Academy.
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative border-l-2 border-blue-500 pl-8">
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-500"></div>
              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-xl font-bold">
                    Salesforce Developer Virtual Internship
                  </h3>
                  <span className="text-gray-600">11/2023 to 01/2024</span>
                </div>
                <p className="text-gray-700 mb-2">SmartInternz</p>
                <ul className="list-disc ml-5 space-y-2 text-gray-700">
                  <li>
                    Company Overview: 8-week virtual internship, gaining
                    practical knowledge in Salesforce development.
                  </li>
                  <li>
                    Worked on Salesforce Trailhead modules covering Salesforce
                    Fundamentals, Organizational Setup, Relationship & Process
                    Automation, Apex coding, and Lightning Web Components (LWC).
                  </li>
                  <li>
                    Earned Super Badges: Apex Specialist, Process Automation
                    Specialist, and Developer Super Set.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80"
                alt="VD-LearnNest"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">VD-LearnNest</h3>
                <p className="text-gray-700 mb-4">
                  A MERN-stack learning platform with authentication and
                  authorization.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    React.js
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Tailwind CSS
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Node.js
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Express.js
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    MongoDB
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    JWT
                  </span>
                </div>
                <div className="flex justify-between">
                  <a
                    href="https://github.com/vkdon1"
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <Github size={16} className="mr-1" /> GitHub
                  </a>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <ExternalLink size={16} className="mr-1" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
            {/* Project 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="URL Shortener"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Text Utils</h3>
                <p className="text-gray-700 mb-4">
                  TextUtils is a ReactJs website built primarily to do various
                  operations on regular typed text. You can safely use WordPad
                  or NotePad for text drafting, and saving, but TextUtils offers
                  much more than simple text drafting and formatting
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    React
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Bootstrap
                  </span>
                </div>
                <div className="flex justify-between">
                  <a
                    href="https://github.com/vkdon1/TextUtils"
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <Github size={16} className="mr-1" /> GitHub
                  </a>
                  <a
                    href="https://text-utils-steel-mu.vercel.app/"
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <ExternalLink size={16} className="mr-1" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
            {/* Project 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="URL Shortener"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">URL Shortener</h3>
                <p className="text-gray-700 mb-4">
                  A URL shortener application that generates unique short codes
                  for long URLs.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    HTML
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    CSS
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Node.js
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Express.js
                  </span>
                </div>
                <div className="flex justify-between">
                  <a
                    href="https://github.com/vkdon1/VD-Url-shortner"
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <Github size={16} className="mr-1" /> GitHub
                  </a>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <ExternalLink size={16} className="mr-1" /> Live Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=722&q=80"
                alt="BURGUR Web Application"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  BURGUR Web Application
                </h3>
                <p className="text-gray-700 mb-4">
                  A food ordering web application with integrated database
                  storage.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    HTML
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    CSS
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    JavaScript
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Node.js
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    MongoDB
                  </span>
                </div>
                <div className="flex justify-between">
                  <a
                    href="https://github.com/vkdon1/VD-Url-shortner"
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <Github size={16} className="mr-1" /> GitHub
                  </a>
                  <a
                    href="https://vkdon1.github.io/Brugur_Web_application/"
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <ExternalLink size={16} className="mr-1" /> Live Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1503919545889-aef636e10ad4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1047&q=80"
                alt="Child Care Management System"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Child Care Management System
                </h3>
                <p className="text-gray-700 mb-4">
                  A comprehensive web-based system to manage and track child
                  care services and records.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    HTML
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    CSS
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    PHP
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    MySQL
                  </span>
                </div>
                <div className="flex justify-between">
                  <a
                    href="https://github.com/vkdon1"
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <Github size={16} className="mr-1" /> GitHub
                  </a>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <ExternalLink size={16} className="mr-1" /> Live Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                alt="Zomato Landing Page"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Zomato Landing Page</h3>
                <p className="text-gray-700 mb-4">
                  A fully responsive landing page for Zomato using HTML and CSS.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    HTML
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    CSS
                  </span>
                </div>
                <div className="flex justify-between">
                  <a
                    href="https://github.com/vkdon1"
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <Github size={16} className="mr-1" /> GitHub
                  </a>
                  <a
                    href="https://zomato-landing-page1.vercel.app/"
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <ExternalLink size={16} className="mr-1" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>

          <div className="max-w-3xl mx-auto">
            <div className="relative border-l-2 border-blue-500 pl-8 pb-12">
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-500"></div>
              <div className="mb-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-xl font-bold">
                    Master of Computer Applications (MCA)
                  </h3>
                  <span className="text-gray-600">2023 - Present</span>
                </div>
                <p className="text-gray-700 mb-2">
                  Prof. Ram Meghe Institute of Technology and Research
                </p>
                <p className="text-gray-700">CGPA: 9.09</p>
              </div>
            </div>

            <div className="relative border-l-2 border-blue-500 pl-8 pb-12">
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-500"></div>
              <div className="mb-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-xl font-bold">
                    Bachelor of Computer Applications (BCA)
                  </h3>
                  <span className="text-gray-600">2020 - 2023</span>
                </div>
                <p className="text-gray-700 mb-2">
                  Sant Gadge Baba Amravati University (SGBAU)
                </p>
                <p className="text-gray-700">Percentage: 87.67</p>
              </div>
            </div>

            <div className="relative border-l-2 border-blue-500 pl-8 pb-12">
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-500"></div>
              <div className="mb-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-xl font-bold">
                    HSC (Higher Secondary Certificate)
                  </h3>
                  <span className="text-gray-600">2019 - 2020</span>
                </div>
                <p className="text-gray-700 mb-2">
                  Arts, Commerce, and Science College Kiran Nagar Amravati
                </p>
                <p className="text-gray-700">Percentage: 61.38</p>
              </div>
            </div>

            <div className="relative border-l-2 border-blue-500 pl-8">
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-500"></div>
              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-xl font-bold">
                    SSC (Secondary School Certificate)
                  </h3>
                  <span className="text-gray-600">2017 - 2018</span>
                </div>
                <p className="text-gray-700 mb-2">
                  Shri Ram Krishna Krida Vidyalaya Amravati
                </p>
                <p className="text-gray-700">Percentage: 81.20%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Certificates</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">
                Full Stack Web Development Training
              </h3>
              <p className="text-gray-600 mb-2">Devtown</p>
              <p className="text-gray-700 mb-4">
                Completed an intensive 3-month program, focusing on both
                front-end and back-end frameworks, gaining comprehensive skills
                in web development.
              </p>
              <a
                href="https://drive.google.com/file/d/1THpTpOquM2yocybdpLah2S3CSitdY6VB/view?usp=sharing"
                className="text-blue-600 hover:text-blue-800 flex items-center"
              >
                <ExternalLink size={16} className="mr-1" /> View Certificate
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">
                Cisco Networking Essentials
              </h3>
              <p className="text-gray-600 mb-2">Cisco</p>
              <p className="text-gray-700 mb-4">
                Acquired foundational networking knowledge essential for
                managing and configuring network infrastructures.
              </p>
              <a
                href="https://drive.google.com/file/d/1tiNxXdvdOMczG45zZsG7UP-aaB26BIUD/view?usp=sharing"
                className="text-blue-600 hover:text-blue-800 flex items-center"
              >
                <ExternalLink size={16} className="mr-1" /> View Certificate
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">
                Advanced Software Engineering Job Simulation
              </h3>
              <p className="text-gray-600 mb-2">Forage (Walmart)</p>
              <p className="text-gray-700 mb-4">
                Gained hands-on experience in Advanced Data Structures, Software
                Architecture, Relational Database Design, and Data Munging
                through a comprehensive job simulation program.
              </p>
              <a
                href="https://docs.google.com/document/d/1yRv63sh9NJLnesoXc2gWHfRbYnx5pubdWa1q19h7WlM/edit?usp=drive_link"
                className="text-blue-600 hover:text-blue-800 flex items-center"
              >
                <ExternalLink size={16} className="mr-1" /> View Certificate
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">
                Introduction to Cybersecurity
              </h3>
              <p className="text-gray-600 mb-2">Cisco Networking Academy</p>
              <p className="text-gray-700 mb-4">
                Gained proficiency in online safety, understanding cybersecurity
                concepts, and addressing cyber threats and vulnerabilities.
              </p>
              <a
                href="https://drive.google.com/file/d/1mHbuLRgqF98yRzmSX7A5P4PfmzEpnIC3/view?usp=sharing"
                className="text-blue-600 hover:text-blue-800 flex items-center"
              >
                <ExternalLink size={16} className="mr-1" /> View Certificate
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* youtube videos  */}
      <section>
        <div className="container">
          <h1 className="h2 text-center">My Youtube Videos</h1>
          <div className="row">
            <div className="col-lg-4 col-12">
              <iframe
                width="450"
                height="315"
                src="https://www.youtube.com/embed/cruFGY6PwJ4?si=DgCXVEI_e5VYV-hE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div className="col-lg-4 col-12">
              <iframe
                width="450"
                height="315"
                src="https://www.youtube.com/embed/dxqK_eI4Wlo?si=BpR9PJlyIh3rZoRF"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div className="col-lg-4 col-12">
              <iframe
                width="450"
                height="315"
                src="https://www.youtube.com/embed/DHx9W2ZJ-Eg?si=QLEIbFl1cMR61omX"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Achievements</h2>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 p-3 rounded-full text-white mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Smart India Hackathon</h3>
                </div>
                <p className="text-gray-700">
                  Participated in Smart India Hackathon (SIH) 2024
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 p-3 rounded-full text-white mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">LeetCode Badge</h3>
                </div>
                <p className="text-gray-700">
                  Earned 100 days coding badge on LeetCode
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="mr-4 mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:vallabhdongre5@gmail.com"
                      className="hover:underline"
                    >
                      vallabhdongre5@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="mr-4 mt-1" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:+918767905826" className="hover:underline">
                      +91 8767905826
                    </a>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mt-10 mb-6">
                Social Links
              </h3>
              <div className="flex space-x-4">
                <a
                  href="http://www.linkedin.com/in/vallabh-dongre-286491262"
                  className="bg-white text-blue-600 p-3 rounded-full hover:bg-gray-100 transition duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/vkdon1"
                  className="bg-white text-blue-600 p-3 rounded-full hover:bg-gray-100 transition duration-300"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.youtube.com/@includevallabh.h"
                  className="bg-white text-blue-600 p-3 rounded-full hover:bg-gray-100 transition duration-300"
                >
                  <Youtube size={20} />
                </a>
                <a
                  href="https://leetcode.com/u/42_numbers/"
                  className="bg-white text-blue-600 p-3 rounded-full hover:bg-gray-100 transition duration-300"
                >
                  <Code size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-white placeholder-opacity-70"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-white placeholder-opacity-70"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-white placeholder-opacity-70"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">Vallabh Dongre</h2>
              <p className="text-gray-400 mt-2">Full Stack Developer</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="http://www.linkedin.com/in/vallabh-dongre-286491262"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/vkdon1"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="http://www.youtube.com/@vallabhshub"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://leetcode.com/u/42_numbers/"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Code size={20} />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Vallabh Dongre. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
