import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Mathematics() {
  const navigate = useNavigate();

  const experiments = [
    {
      title: "Pythagorean Theorem Verification",
      category: "Geometry",
      theory:
        "Verify the relationship between the sides of a right triangle (a² + b² = c²).",
      image:
        "https://images.unsplash.com/photo-1632933731592-564d693e754e?w=800",
      procedures: [
        "Select different lengths for sides a and b",
        "Calculate the hypotenuse using the theorem",
        "Measure the actual hypotenuse length",
        "Compare calculated and measured values",
      ],
    },
    {
      title: "Quadratic Equation Solver",
      category: "Algebra",
      theory:
        "Explore the nature of roots in quadratic equations using the discriminant.",
      image:
        "https://images.unsplash.com/photo-1611080626919-63f575e34e77?w=800",
      procedures: [
        "Input coefficients a, b, and c",
        "Calculate discriminant (b² - 4ac)",
        "Determine number and type of roots",
        "Solve using quadratic formula",
      ],
    },
    {
      title: "Sine Wave Analysis",
      category: "Trigonometry",
      theory:
        "Study properties of sine waves including amplitude, frequency, and period.",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800",
      procedures: [
        "Set initial amplitude and frequency",
        "Generate the sine wave graph",
        "Measure period and wavelength",
        "Analyze phase shift effects",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h1 className="text-3xl font-bold mb-4">
            Mathematics Virtual Laboratory
          </h1>
          <p className="text-gray-600 mb-6">
            Welcome to the Mathematics Virtual Lab! Explore mathematical
            concepts through interactive experiments designed to enhance your
            understanding of geometry, algebra, and trigonometry.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <h3 className="font-bold text-xl mb-2">10+ Experiments</h3>
              <p className="text-gray-600">
                Wide range of mathematical explorations
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <h3 className="font-bold text-xl mb-2">Interactive Graphs</h3>
              <p className="text-gray-600">Visual mathematical simulations</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <h3 className="font-bold text-xl mb-2">Step-by-Step Solutions</h3>
              <p className="text-gray-600">Detailed problem-solving guidance</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {experiments.map((experiment, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={experiment.image}
                    alt={experiment.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
                      {experiment.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">
                    {experiment.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{experiment.theory}</p>

                  <div className="mb-4">
                    <h3 className="font-semibold mb-2">Procedure:</h3>
                    <ol className="list-decimal list-inside space-y-1">
                      {experiment.procedures.map((step, stepIndex) => (
                        <li key={stepIndex} className="text-gray-600">
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>

                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Start Experiment
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mathematics;
