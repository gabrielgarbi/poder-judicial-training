export interface User {
  name: string;
}

export interface TestResult {
  id: string;
  type: 'typing' | 'spelling' | 'quiz';
  date: string;
  score: number;
  maxScore?: number;
  duration: number; // in seconds
  details?: any; // WPM, accuracy, etc.
}
