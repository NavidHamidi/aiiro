'use client';

import { useState, useTransition } from 'react';
import Spinner from './components/spinner';

export default function Home() {
  const [question, setQuestion] = useState<string>('');
  const [response, setResponse] = useState<string>('');
  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    setResponse('');
    try {
      startTransition(async () => {
        const res = await fetch('/api/ask', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ question }),
        });
        const data = await res.json();
        setResponse(data.response);
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center justify-center sm:items-start w-1/2">
        <div className="flex flex-col gap-4 items-center justify-center w-full border border-gray-300 rounded-lg p-4">
          <p className="text-white">{response}</p>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center w-full ">
          <input
            type="text"
            className="w-full p-4 text-lg text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-black"
            placeholder="Ask a question to AI"
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button
            type="submit"
            className="w-full p-4 text-lg text-white bg-green-700 hover:bg-green-900 rounded-lg cursor-pointer"
            onClick={handleSubmit}
            disabled={isPending}
          >
            {isPending ? <Spinner /> : 'Ask'}
          </button>
        </div>
      </main>
    </div>
  );
}
