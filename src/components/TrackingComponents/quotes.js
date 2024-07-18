
import React, { useState, useEffect } from 'react';

const FetchQuote = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch("https://api.quotable.io/random");
        const { statusCode, statusMessage, ...data } = await response.json();
        if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
        setQuote(data);
      }
      catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
    // Set up interval to fetch data every 5 seconds
    const intervalId = setInterval(fetchQuote, 5000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='mt-6 w-[90%] h-[6.625] px-3  mx-auto'>
        <div className='overflow-wrap font-semibold'>
          <hr className='border-2 border-slate-400'></hr>
          <p className='text-justify'>{quote.content}</p>
          <hr className='border-2 border-slate-400'></hr>
          <p className='text-right pr-5'><em>- {quote.author}</em></p>
        </div>
    </div>
  );
};

export default FetchQuote;
