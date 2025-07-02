import React, { useState } from 'react';
import './App.css';

function App() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-gray-900 min-h-screen text-white p-8 font-sans">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-xl p-10 shadow-xl">
        <h1 className="text-4xl font-bold text-teal-400 mb-4 text-center">
          Hello REAMS Team! 👋
        </h1>
        <p className="text-lg text-gray-300 text-center mb-6">
          Here's why my skills perfectly match your Application Support Engineer role.
        </p>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded mb-6 block mx-auto"
        >
          {showDetails ? 'Hide My Key Skills' : 'View My Key Skills'}
        </button>

        {showDetails && (
          <div className="space-y-6">

            <section>
              <h2 className="text-2xl text-teal-300 mb-2">🛠️ Core Technical Skills</h2>
              <ul className="list-disc list-inside text-gray-200 space-y-1">
                <li><strong>Application & API Troubleshooting:</strong> Deep experience debugging REST APIs, JSON/XML payloads.</li>
                <li><strong>SQL & Database Management:</strong> Skilled at querying databases, diagnosing data issues.</li>
                <li><strong>SFTP/AS2 Management:</strong> Ensured robust file transfer integrations at Veratrak.</li>
                <li><strong>Manual & Regression Testing:</strong> Extensive experience maintaining application quality and stability.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-teal-300 mb-2">🧰 Relevant Tools Expertise</h2>
              <div className="grid grid-cols-2 gap-2 text-gray-200">
                <div>✅ Jira (Issue tracking)</div>
                <div>✅ Zendesk & Intercom (Support platforms)</div>
                <div>✅ Confluence & Notion (Documentation)</div>
                <div>✅ Fiddler & Postman (API & HTTP debugging)</div>
                <div>✅ PostgreSQL (Database management)</div>
                <div>✅ VS Code & DevTools (Development & debugging)</div>
                <div>✅ Slack (Team collaboration)</div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl text-teal-300 mb-2">📚 Recent Certifications</h2>
              <ul className="list-disc list-inside text-gray-200 space-y-1">
                <li>AWS Certified Cloud Practitioner</li>
                <li>Crash Course on Python (Coursera)</li>
                <li>Responsive Web Design (FreeCodeCamp)</li>
              </ul>
            </section>

          </div>
        )}

        <footer className="mt-10 border-t border-gray-600 pt-4 text-center text-gray-500 text-sm">
          — Jon James | <a href="mailto:jonjames@outlook.com" className="text-teal-400">jonjames@outlook.com</a>
        </footer>
      </div>
    </div>
  );
}

export default App;