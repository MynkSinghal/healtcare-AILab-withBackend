import { HealthData } from '../types';

export const predictHeartDisease = async (data: HealthData): Promise<number> => {
  console.log('Sending data for prediction:', data);

  const response = await fetch('http://localhost:5000/predict', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch prediction');
  }

  const result = await response.json();
  console.log('Received prediction:', result.prediction);
  return result.prediction;
};