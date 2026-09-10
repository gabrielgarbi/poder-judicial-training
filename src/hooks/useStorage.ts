import { useState } from 'react';
import type { User, TestResult } from '../types';

export function useStorage() {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('pj_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [results, setResults] = useState<TestResult[]>(() => {
    const saved = localStorage.getItem('pj_results');
    return saved ? JSON.parse(saved) : [];
  });

  const saveUser = (name: string) => {
    const newUser = { name };
    setUser(newUser);
    localStorage.setItem('pj_user', JSON.stringify(newUser));
  };

  const saveResult = (result: Omit<TestResult, 'id' | 'date'>) => {
    const newResult: TestResult = {
      ...result,
      id: crypto.randomUUID(),
      date: new Date().toISOString()
    };
    const updated = [...results, newResult];
    setResults(updated);
    localStorage.setItem('pj_results', JSON.stringify(updated));
  };

  return { user, saveUser, results, saveResult };
}
