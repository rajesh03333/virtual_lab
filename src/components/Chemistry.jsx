import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Chemistry() {
  const navigate = useNavigate();

  const experiments = [
    {
      title: "Acid-Base Titration",
      category: "Analytical Chemistry",
      theory: "Determine the concentration of an unknown acid or base using titration.",
      image: "https://plus.unsplash.com/premium_photo-1715107534823-ea682a93cf1b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      procedures: [
        "Prepare the burette with standard solution",
        "Pipette a known volume of the analyte into a flask",
        "Add indicator and titrate until endpoint",
        "Calculate the concentration based on titration readings"
      ]
    },
    {
      title: "Electrolysis of Water",
      category: "Electrochemistry",
      theory: "Decompose water into hydrogen and oxygen gases using electrical energy.",
      image: "https://plus.unsplash.com/premium_photo-1692825695165-367917888cb0?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      procedures: [
        "Set up electrolysis apparatus with water and electrolyte",
        "Connect electrodes to a power source",
        "Observe gas bubbles forming at electrodes",
        "Collect and test the gases"
      ]
    },
    {
      title: "Flame Test",
      category: "Inorganic Chemistry",
      theory: "Identify metal ions based on the color they emit when heated in a flame.",
      image: "https://plus.unsplash.com/premium_photo-1677534712847-a5afaab7831d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      procedures: [
        "Prepare metal salt solutions",
        "Dip wire loop in each solution and place in flame",
        "Observe flame color and record observations",
        "Compare with known emission spectra"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <button 
          onClick={() => navigate('/')} 
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h1 className="text-3xl font-bold mb-4">Chemistry Virtual Laboratory</h1>
          <p className="text-gray-600 mb-6">
            Welcome to the Chemistry Virtual Lab! Perform various chemistry experiments in a simulated environment. 
            These virtual experiments help you understand chemistry concepts better through practical application.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <h3 className="font-bold text-xl mb-2">15+ Experiments</h3>
              <p className="text-gray-600">Comprehensive collection of chemistry experiments</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <h3 className="font-bold text-xl mb-2">Real-time Simulation</h3>
              <p className="text-gray-600">Interactive virtual lab environment</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <h3 className="font-bold text-xl mb-2">Detailed Theory</h3>
              <p className="text-gray-600">Complete theoretical background</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {experiments.map((experiment, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
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
                  <h2 className="text-2xl font-bold mb-4">{experiment.title}</h2>
                  <p className="text-gray-600 mb-4">{experiment.theory}</p>
                  
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2">Procedure:</h3>
                    <ol className="list-decimal list-inside space-y-1">
                      {experiment.procedures.map((step, stepIndex) => (
                        <li key={stepIndex} className="text-gray-600">{step}</li>
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

export default Chemistry;