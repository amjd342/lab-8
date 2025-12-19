import React, { useState } from 'react';

function App() {
  const [page, setPage] = useState('home');
  const [longUrl, setLongUrl] = useState('');
  const [shortCode, setShortCode] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleShorten = () => {
    if (!longUrl || !shortCode) {
      alert('Please fill in both fields');
      return;
    }
    const shortened = 'https://cpt405.co/' + shortCode;
    setShortUrl(shortened);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
      <div style={{ backgroundColor: '#fb7185', padding: '16px', display: 'flex', gap: '8px' }}>
        <button onClick={() => setPage('home')} style={{ padding: '8px 24px', backgroundColor: '#f43f5e', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Home
        </button>
        <button onClick={() => setPage('about')} style={{ padding: '8px 24px', backgroundColor: '#f43f5e', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          About us
        </button>
      </div>

      {page === 'home' && (
        <div style={{ maxWidth: '672px', margin: '40px auto', padding: '32px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <h1 style={{ fontSize: '30px', fontWeight: 'bold', textAlign: 'center', marginBottom: '24px' }}>Link Shrinker</h1>
          <div>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px' }}>Long URL:</label>
              <input type="text" value={longUrl} onChange={(e) => setLongUrl(e.target.value)} placeholder="https://react.dev/learn/reusing-logic-with-custom-hooks" style={{ width: '100%', padding: '8px 16px', border: '2px solid #d1d5db', borderRadius: '4px' }} />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px' }}>Enter short code:</label>
              <input type="text" value={shortCode} onChange={(e) => setShortCode(e.target.value)} placeholder="react101" style={{ width: '100%', padding: '8px 16px', border: '2px solid #d1d5db', borderRadius: '4px' }} />
            </div>
            <div style={{ textAlign: 'center', marginBottom: '16px' }}>
              <button onClick={handleShorten} style={{ padding: '8px 32px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                Shorten
              </button>
            </div>
            {shortUrl && (
              <div style={{ marginTop: '24px', padding: '16px', backgroundColor: '#f9fafb', borderRadius: '4px' }}>
                <h2 style={{ fontWeight: 'bold', marginBottom: '8px' }}>Short URL</h2>
                <a href={longUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline', wordBreak: 'break-all' }}>
                  {shortUrl}
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {page === 'about' && (
        <div style={{ maxWidth: '672px', margin: '40px auto', padding: '32px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <h1 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '24px' }}>About Us</h1>
          <div style={{ color: '#374151' }}>
            <p style={{ marginBottom: '16px' }}>Welcome to Link Shrinker, your solution for creating short, customizable URLs that are easy to share.</p>
            <div style={{ marginBottom: '16px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>Features:</h2>
              <ul style={{ listStyle: 'disc', listStylePosition: 'inside', marginLeft: '16px' }}>
                <li>Convert long URLs into short links</li>
                <li>Create custom short codes</li>
                <li>Simple user interface</li>
                <li>Fast link shortening</li>
              </ul>
            </div>
            <div>
              <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>How to Use:</h2>
              <ol style={{ listStyle: 'decimal', listStylePosition: 'inside', marginLeft: '16px' }}>
                <li>Enter your long URL</li>
                <li>Create a custom short code</li>
                <li>Click Shorten button</li>
                <li>Share your shortened link!</li>
              </ol>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;