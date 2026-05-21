// =============================
// DEPLOY-READY REACT + VITE PROJECT
// =============================
//
// 1. Create project:
// npm create vite@latest storage-tank-system -- --template react
//
// 2. Install dependencies:
// npm install
// npm install -D tailwindcss postcss autoprefixer
// npx tailwindcss init -p
//
// 3. Replace the generated files with the code below.
//
// 4. Run development server:
// npm run dev
//
// 5. Build for production:
// npm run build
//
// 6. Deploy to Vercel or Netlify.
//
// =============================
// FILE: package.json
// =============================
// {
//   "name": "storage-tank-system",
//   "private": true,
//   "version": "1.0.0",
//   "type": "module",
//   "scripts": {
//     "dev": "vite",
//     "build": "vite build",
//     "preview": "vite preview"
//   },
//   "dependencies": {
//     "react": "^18.3.1",
//     "react-dom": "^18.3.1"
//   },
//   "devDependencies": {
//     "@vitejs/plugin-react": "^4.3.1",
//     "autoprefixer": "^10.4.20",
//     "postcss": "^8.4.49",
//     "tailwindcss": "^3.4.16",
//     "vite": "^5.4.10"
//   }
// }
//
// =============================
// FILE: vite.config.js
// =============================
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
//
// export default defineConfig({
//   plugins: [react()],
// })
//
// =============================
// FILE: tailwind.config.js
// =============================
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     './index.html',
//     './src/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
//
// =============================
// FILE: postcss.config.js
// =============================
// export default {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }
//
// =============================
// FILE: src/main.jsx
// =============================
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'
//
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
//
// =============================
// FILE: src/index.css
// =============================
// @tailwind base;
// @tailwind components;
// @tailwind utilities;
//
// body {
//   margin: 0;
//   font-family: Inter, sans-serif;
//   background: #050708;
// }
//
// * {
//   box-sizing: border-box;
// }
//
// =============================
// FILE: src/App.jsx
// =============================

import React, { useEffect, useState } from "react";

export default function StorageTankRecommendationWebsite() {
  const industries = {
    Gasoline: {
      uses: {
        "Gasoline Station": [
          {
            name: "Underground Storage Tank",
            capacity: "10,000L – 100,000L+",
            reason: "Best for fuel stations with safety and space efficiency."
          },
          {
            name: "Above Ground Storage Tank",
            capacity: "5,000L – 80,000L",
            reason: "Easy maintenance and monitoring for fuel reserves."
          }
        ],
        "Fuel Depot": [
          {
            name: "Bulk Storage Tank",
            capacity: "50,000L – 500,000L+",
            reason: "Ideal for large-scale fuel storage and distribution."
          },
          {
            name: "Vertical Storage Tank",
            capacity: "20,000L – 200,000L",
            reason: "Efficient high-capacity storage with smaller footprint."
          }
        ],
        "Fuel Transportation": [
          {
            name: "Tanker / Trailer Tank",
            capacity: "5,000L – 45,000L",
            reason: "Designed for safe fuel transport and delivery."
          }
        ]
      }
    },

    "Manufacturing / Industrial": {
      uses: {
        "Industrial Liquid Storage": [
          {
            name: "Above Ground Storage Tank",
            capacity: "10,000L – 200,000L",
            reason: "Suitable for industrial oil, fuel, and liquid storage."
          },
          {
            name: "Vertical Storage Tank",
            capacity: "5,000L – 300,000L",
            reason: "Space-saving option for industrial facilities."
          }
        ],
        "Raw Material Storage": [
          {
            name: "Bulk Storage Tank",
            capacity: "50,000L – 1,000,000L",
            reason: "Handles large-volume industrial material storage."
          },
          {
            name: "SILO Tank",
            capacity: "20,000L – 500,000L",
            reason: "Perfect for powders, grains, and cement materials."
          }
        ],
        "Mixing & Processing": [
          {
            name: "Mixing Tank",
            capacity: "500L – 50,000L",
            reason: "Designed for blending chemicals and industrial liquids."
          },
          {
            name: "Stainless Steel Tank",
            capacity: "1,000L – 100,000L",
            reason: "Corrosion-resistant and hygienic for processing systems."
          }
        ]
      }
    },

    "Water & Waste": {
      uses: {
        "Water Distribution": [
          {
            name: "Elevated Water Storage Tank",
            capacity: "50,000L – 1,000,000L+",
            reason: "Provides gravity-fed water pressure systems."
          }
        ],
        "Wastewater Storage": [
          {
            name: "Vertical Storage Tank",
            capacity: "5,000L – 200,000L",
            reason: "Reliable for wastewater collection and treatment."
          },
          {
            name: "Fiber Reinforced Plastic Tank",
            capacity: "1,000L – 50,000L",
            reason: "Corrosion-resistant solution for harsh environments."
          }
        ],
        "Fire Reserve & Water Backup": [
          {
            name: "Modular Tank",
            capacity: "10,000L – 500,000L",
            reason: "Expandable and ideal for reserve water systems."
          }
        ]
      }
    },

    "Chemical & Health": {
      uses: {
        "Chemical Storage": [
          {
            name: "Fiber Reinforced Plastic Tank",
            capacity: "1,000L – 80,000L",
            reason: "Excellent resistance against corrosive chemicals."
          },
          {
            name: "Pressure Tank",
            capacity: "1,000L – 30,000L",
            reason: "Safe for pressurized chemical applications."
          }
        ],
        "Pharmaceutical & Food Grade": [
          {
            name: "Stainless Steel Tank",
            capacity: "500L – 100,000L",
            reason: "Maintains sanitary and contamination-free storage."
          }
        ],
        "Chemical Mixing": [
          {
            name: "Mixing Tank",
            capacity: "500L – 50,000L",
            reason: "Used for controlled blending and production processes."
          },
          {
            name: "Intermediate Bulk Container Tank",
            capacity: "500L – 1,500L",
            reason: "Portable storage and dosing for chemicals."
          }
        ]
      }
    },

    "Commercial & Residential": {
      uses: {
        "Building Water Reserve": [
          {
            name: "Modular Tank",
            capacity: "5,000L – 200,000L",
            reason: "Efficient for building and community water systems."
          }
        ],
        "Residential Water Storage": [
          {
            name: "Fiber Reinforced Plastic Tank",
            capacity: "500L – 10,000L",
            reason: "Affordable and durable residential solution."
          },
          {
            name: "Pressure Tank",
            capacity: "100L – 5,000L",
            reason: "Improves household water pressure systems."
          }
        ],
        "Backup Fuel System": [
          {
            name: "Above Ground Storage Tank",
            capacity: "1,000L – 20,000L",
            reason: "Suitable for generators and backup fuel supply."
          }
        ]
      }
    }
  };

  const [selectedIndustry, setSelectedIndustry] = useState("Gasoline");
  const [selectedUse, setSelectedUse] = useState(
    Object.keys(industries["Gasoline"].uses)[0]
  );

  useEffect(() => {
    setSelectedUse(Object.keys(industries[selectedIndustry].uses)[0]);
  }, [selectedIndustry]);

  const tankRecommendations =
    industries[selectedIndustry]?.uses[selectedUse] || [];

  return (
    <div className="min-h-screen bg-[#050708] text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold mb-4 text-[#09aff2]">
            Storage Tank Recommendation System
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Help your clients choose the best storage tank based on industry,
            application, and recommended capacity range.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#0f1720] p-6 rounded-3xl border border-[#096eb4] shadow-xl">
            <h2 className="text-2xl font-semibold mb-4 text-[#09aff2]">
              1. Select Industry
            </h2>

            <div className="space-y-3">
              {Object.keys(industries).map((industry) => (
                <button
                  type="button"
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`w-full text-left px-4 py-3 rounded-2xl transition-all duration-200 ${
                    selectedIndustry === industry
                      ? "bg-[#09aff2] text-black font-semibold"
                      : "bg-[#111827] hover:bg-[#1f2937]"
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-[#0f1720] p-6 rounded-3xl border border-[#096eb4] shadow-xl">
            <h2 className="text-2xl font-semibold mb-4 text-[#09aff2]">
              2. Select Use
            </h2>

            <div className="space-y-3">
              {Object.keys(industries[selectedIndustry].uses).map((use) => (
                <button
                  type="button"
                  key={use}
                  onClick={() => setSelectedUse(use)}
                  className={`w-full text-left px-4 py-3 rounded-2xl transition-all duration-200 ${
                    selectedUse === use
                      ? "bg-[#09aff2] text-black font-semibold"
                      : "bg-[#111827] hover:bg-[#1f2937]"
                  }`}
                >
                  {use}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#09aff2] to-[#096eb4] p-6 rounded-3xl text-black shadow-2xl">
            <h2 className="text-2xl font-bold mb-4">
              Recommended Solution
            </h2>

            <div className="space-y-4">
              {tankRecommendations.length > 0 ? (
                tankRecommendations.map((tank, index) => (
                  <div
                    key={`${tank.name}-${index}`}
                    className="bg-white/90 rounded-2xl p-4 shadow-lg"
                  >
                    <h3 className="text-xl font-bold mb-2">{tank.name}</h3>

                    <p className="text-sm mb-2">
                      <span className="font-semibold">Capacity:</span>{" "}
                      {tank.capacity}
                    </p>

                    <p className="text-sm text-gray-700">{tank.reason}</p>
                  </div>
                ))
              ) : (
                <div className="bg-white/90 rounded-2xl p-4 shadow-lg">
                  <p>No recommendations available.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-[#0f1720] rounded-3xl p-8 border border-[#096eb4] shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#09aff2] mb-4">
                Why Choose Siegen Philippines?
              </h2>

              <ul className="space-y-3 text-gray-300 text-lg">
                <li>✔ Industrial-grade tank fabrication</li>
                <li>✔ Custom sizes and capacities available</li>
                <li>✔ Fuel, water, chemical, and process tanks</li>
                <li>✔ Built for commercial and industrial applications</li>
                <li>✔ Trusted by multiple industries in the Philippines</li>
              </ul>

              <a
                href="https://www.siegenphilippines.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 bg-[#09aff2] text-black px-6 py-3 rounded-2xl font-bold hover:scale-105 transition-transform"
              >
                Visit Siegen Philippines
              </a>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#09aff2]">
              <img
                src="https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1200&auto=format&fit=crop"
                alt="Storage Tank Facility"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>
            © 2026 Storage Tank Recommendation System • Powered by Siegen
            Philippines
          </p>
        </div>
      </div>
    </div>
  );
}
