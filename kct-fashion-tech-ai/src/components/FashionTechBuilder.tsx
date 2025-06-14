'use client';

import { useState } from 'react';

interface ProjectData {
  analysis?: object;
  architecture?: string;
  code?: object;
  instructions?: string;
}

export default function FashionTechBuilder() {
  const [requirements, setRequirements] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [project, setProject] = useState<ProjectData | null>(null);

  const handleGenerate = async () => {
    if (!requirements.trim()) return;
    
    setIsGenerating(true);
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ requirements })
      });
      
      const data = await response.json();
      if (data.success) {
        setProject(data.project);
      }
    } catch (error) {
      console.error('Generation failed:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white p-8 rounded-lg mb-8">
        <h1 className="text-4xl font-bold mb-4">KCT Fashion Tech AI</h1>
        <p className="text-purple-200 text-lg">
          Generate complete fashion technology solutions
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Project Requirements</h2>
          <textarea
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            placeholder="Describe what you want to build...

Examples:
- Build a wedding groomsmen coordination website
- Create an AR virtual fitting room
- Generate an inventory management system"
            className="w-full h-64 p-4 border rounded-lg resize-none focus:ring-2 focus:ring-purple-500"
          />
          
          <button
            onClick={handleGenerate}
            disabled={isGenerating || !requirements.trim()}
            className="w-full py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 font-semibold text-lg"
          >
            {isGenerating ? 'Generating Fashion Tech Solution...' : 'Generate Project 🚀'}
          </button>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Generated Project</h2>
          {project ? (
            <div className="bg-gray-50 rounded-lg p-6">
              <pre className="text-sm overflow-auto whitespace-pre-wrap">
                {JSON.stringify(project, null, 2)}
              </pre>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-6 text-center text-gray-500">
              Enter requirements and generate a fashion tech project
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
