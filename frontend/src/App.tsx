import React from 'react';
import { Heart } from 'lucide-react';
import HealthForm from './components/HealthForm';
import ResultDisplay from './components/ResultDisplay';
import { HealthData } from './types';
import { predictHeartDisease } from './utils/predictionModel';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [risk, setRisk] = React.useState<boolean | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData); // Ensure formData has the correct structure
  };

  const handleReset = () => {
    setRisk(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-4">
            <Heart className="w-12 h-12 text-red-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Heart Disease Risk Assessment
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enter your health information below for a preliminary heart disease risk assessment. 
            This tool uses real medical data but should not replace professional medical advice.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          {isLoading ? (
            <div className="flex justify-center items-center">
              <div className="loader"></div>
              <p className="ml-4">Calculating your risk...</p>
            </div>
          ) : risk === null ? (
            <HealthForm onSubmit={handleSubmit} isLoading={isLoading} />
          ) : (
            <ResultDisplay risk={risk} onReset={handleReset} />
          )}
        </div>

        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>
            Disclaimer: This is a simplified risk assessment tool based on historical medical data. 
            It should not be used as a substitute for professional medical diagnosis or treatment. 
            Always consult with healthcare professionals for medical advice.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;