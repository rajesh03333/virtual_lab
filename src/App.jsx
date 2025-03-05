import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import {
  Search,
  Beaker,
  Brain,
  Atom,
  Calculator,
  ChevronRight,
  Download,
  ChevronDown,
} from "lucide-react";
import Physics from "./components/Physics";
import Chemistry from "./components/Chemistry";
import Mathematics from "./components/Math";

function SimulationCard({ title, image, subject, grade }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="bg-blue-100 px-2 py-1 rounded">{subject}</span>
          <span className="bg-green-100 px-2 py-1 rounded">{grade}</span>
        </div>
      </div>
    </div>
  );
}

SimulationCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  grade: PropTypes.string.isRequired,
};

function DropdownMenu({ title, items, isOpen, onToggle }) {
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    if (item === "Physics") navigate("/physics");
    if (item === "Chemistry") navigate("/chemistry");
    if (item === "Math") navigate("/math");
  };

  return (
    <div className="relative">
      <button
        className="flex items-center gap-1 hover:text-blue-200 py-2"
        onClick={onToggle}
      >
        {title}
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-64 bg-white text-gray-800 rounded-lg shadow-lg py-2 z-50">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => handleItemClick(item)}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

DropdownMenu.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

function HomePage() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const dropdowns = {
    simulations: {
      title: "Simulations",
      items: [
        "Physics",
        "Chemistry",
        "Math",
        "Biology",
        "Earth Science",
        "By Grade Level",
        "New Sims",
        "HTML5 Sims",
        "All Simulations",
      ],
    },
    about: {
      title: "About",
      items: [
        "Overview",
        "Our Mission",
        "Our Team",
        "Contact Us",
        "News",
        "Research",
        "Publications",
        "Get Involved",
      ],
    },
    teachers: {
      title: "For Teachers",
      items: [
        "Teacher Tips",
        "Workshops",
        "Activity Ideas",
        "Browse Activities",
        "Submit Activity",
        "Virtual Workshop",
        "Professional Development",
      ],
    },
    support: {
      title: "Support",
      items: [
        "Help Center",
        "Troubleshooting",
        "Donate",
        "Technical Requirements",
        "Report a Problem",
        "Accessibility",
      ],
    },
    languages: {
      title: "Languages",
      items: [
        "English",
        "Español",
        "العربية",
        "Português",
        "Français",
        "Deutsch",
        "Italiano",
        "Nederlands",
        "हिंदी",
        "More Languages...",
      ],
    },
  };

  const simulations = [
    {
      title: "Circuit Construction",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800",
      subject: "Physics",
      grade: "High School",
    },
    {
      title: "Molecular Geometry",
      image:
        "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
      subject: "Chemistry",
      grade: "Middle School",
    },
    {
      title: "Cell Structure",
      image:
        "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800",
      subject: "Biology",
      grade: "High School",
    },
    {
      title: "Plate Tectonics",
      image:
        "https://images.unsplash.com/photo-1566936737687-8f392a237b8b?w=800",
      subject: "Earth Science",
      grade: "Middle School",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-[#0B3F75] text-white relative z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Atom className="w-8 h-8" />
                <span className="text-2xl font-bold">VisionLab</span>
              </div>
              <div className="hidden md:flex items-center gap-4">
                <DropdownMenu
                  {...dropdowns.simulations}
                  isOpen={activeDropdown === "simulations"}
                  onToggle={() => toggleDropdown("simulations")}
                />
                <DropdownMenu
                  {...dropdowns.about}
                  isOpen={activeDropdown === "about"}
                  onToggle={() => toggleDropdown("about")}
                />
                <DropdownMenu
                  {...dropdowns.teachers}
                  isOpen={activeDropdown === "teachers"}
                  onToggle={() => toggleDropdown("teachers")}
                />
                <DropdownMenu
                  {...dropdowns.support}
                  isOpen={activeDropdown === "support"}
                  onToggle={() => toggleDropdown("support")}
                />
              </div>
            </div>
            {/* Show Simulations dropdown on mobile instead of Languages */}
            <div className="md:hidden">
              <DropdownMenu
                {...dropdowns.simulations}
                isOpen={activeDropdown === "simulations"}
                onToggle={() => toggleDropdown("simulations")}
              />
            </div>
            <div className="hidden md:block">
              <DropdownMenu
                {...dropdowns.languages}
                isOpen={activeDropdown === "languages"}
                onToggle={() => toggleDropdown("languages")}
              />
            </div>
          </div>
        </div>
      </header>

      {activeDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setActiveDropdown(null)}
        />
      )}

      {/* Hero Section */}
      <div className="bg-[#0B3F75] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Interactive Science and Math Simulations
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Free educational resources for teachers and students
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for simulations..."
                className="w-full pl-12 pr-4 py-3 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Subject Categories */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Browse by Subject
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Beaker className="w-8 h-8 text-purple-500" />
            <div>
              <h3 className="font-bold">Chemistry</h3>
              <p className="text-sm text-gray-600">120+ simulations</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Atom className="w-8 h-8 text-blue-500" />
            <div>
              <h3 className="font-bold">Physics</h3>
              <p className="text-sm text-gray-600">150+ simulations</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Brain className="w-8 h-8 text-green-500" />
            <div>
              <h3 className="font-bold">Biology</h3>
              <p className="text-sm text-gray-600">80+ simulations</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Calculator className="w-8 h-8 text-red-500" />
            <div>
              <h3 className="font-bold">Math</h3>
              <p className="text-sm text-gray-600">100+ simulations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Simulations */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            Featured Simulations
          </h2>
          <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mt-4 md:mt-0">
            View all
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {simulations.map((sim, index) => (
            <SimulationCard key={index} {...sim} />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#0B3F75] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Join millions of students and teachers using PhET simulations
          </p>
          <button className="bg-white text-[#0B3F75] px-8 py-3 rounded-full font-bold hover:bg-blue-100 transition-colors flex items-center gap-2 mx-auto">
            <Download className="w-5 h-5" />
            Get Started Now
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">About VisionLab</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-300">
                    Our Mission
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300">
                    History
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">For Teachers</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-300">
                    Teacher Tips
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300">
                    Workshops
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300">
                    Activity Ideas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300">
                    Research
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Support Us</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-300">
                    Donate
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300">
                    Volunteer
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300">
                    Partners
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300">
                    Sponsors
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-300">
                    Newsletter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
            <p>
              &copy; 2025 PhET Interactive Simulations, University of Colorado
              Boulder
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/physics" element={<Physics />} />
        <Route path="/chemistry" element={<Chemistry />} />
        <Route path="/math" element={<Mathematics />} />
      </Routes>
    </Router>
  );
}

export default App;
