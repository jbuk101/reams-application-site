import React, { useState } from 'react';
import './App.css';

function App() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-gray-900 min-h-screen text-white p-8 font-sans">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-xl p-10 shadow-xl">
        <h1 className="text-4xl font-bold text-teal-400 mb-4 text-center">
          Hey REAMS Team! 👋
        </h1>
        <p className="text-lg text-gray-300 text-center mb-6">
          Here’s why I’d be a great fit for the Application Support Engineer position.
        </p>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded mb-6 block mx-auto"
        >
          {showDetails ? 'Hide Details' : 'Why Me?'}
        </button>

        {showDetails && (
          <div className="space-y-4">
            <h2 className="text-2xl text-teal-300">🔧 Experience</h2>
            <ul className="list-disc list-inside text-gray-200">
              <li>Owned and improved support systems at Veratrak</li>
              <li>Created global guides and mentored engineers at Pegasystems</li>
              <li>Built customer-first solutions and documentation at Waysact</li>
            </ul>

            <h2 className="text-2xl text-teal-300">🛠 Tools I Use</h2>
            <p className="text-gray-200">Jira, Intercom, SQL, SFTP, Fiddler, Notion, and more.</p>

            <h2 className="text-2xl text-teal-300">🎓 Always Learning</h2>
            <p className="text-gray-200">
              Recently certified in AWS Cloud, Python, JavaScript, and UX design.
            </p>
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