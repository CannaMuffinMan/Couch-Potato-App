'use client';

import { useState, useEffect } from 'react';

export default function DevPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Check for dev access token in localStorage
  useEffect(() => {
    const devToken = localStorage.getItem('fcg_dev_access');
    if (devToken === 'forevercouchgang2026') {
      setIsAuthenticated(true);
      return;
    }

    // also accept cookie set by middleware when using basic auth
    const cookieMatch = document.cookie.split('; ').find((row) => row.startsWith('fcg_dev_access='));
    if (cookieMatch) {
      const val = cookieMatch.split('=')[1];
      if (val === 'forevercouchgang2026') {
        setIsAuthenticated(true);
        return;
      }
    }
  }, []);

  const handleAuth = () => {
    // accept both the long token and the short code 'forevercouch'
    if (password === 'forevercouchgang2026' || password === 'forevercouch') {
      localStorage.setItem('fcg_dev_access', 'forevercouchgang2026');
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid access code');
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
        color: '#00ff41',
        fontFamily: 'monospace'
      }}>
        <div style={{
          background: 'rgba(0, 255, 65, 0.1)',
          border: '2px solid #00ff41',
          borderRadius: '10px',
          padding: '2rem',
          textAlign: 'center',
          boxShadow: '0 0 20px #00ff41'
        }}>
          <h2 style={{ marginBottom: '1rem', color: '#00ff41' }}>🔒 Dev Access Required</h2>
          <p style={{ marginBottom: '1rem', color: '#F0F4FF' }}>
            Enter the development access code to continue
          </p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Access Code"
            style={{
              padding: '0.5rem',
              marginRight: '0.5rem',
              border: '1px solid #00ff41',
              borderRadius: '5px',
              background: 'rgba(0,0,0,0.5)',
              color: '#00ff41',
              fontFamily: 'monospace'
            }}
          />
          <button
            onClick={handleAuth}
            style={{
              padding: '0.5rem 1rem',
              background: '#00ff41',
              color: '#000',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontFamily: 'monospace',
              fontWeight: 'bold'
            }}
          >
            Access
          </button>
          {error && <p style={{ color: '#ff0040', marginTop: '1rem' }}>{error}</p>}
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
      color: '#00ff41',
      fontFamily: 'monospace',
      padding: '2rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <header style={{
          textAlign: 'center',
          marginBottom: '2rem',
          padding: '1rem',
          background: 'rgba(0, 255, 65, 0.1)',
          border: '2px solid #00ff41',
          borderRadius: '10px'
        }}>
          <h1 style={{ color: '#00ff41', marginBottom: '0.5rem' }}>
            🚀 Forever Couch Gang Dev Platform
          </h1>
          <p style={{ color: '#F0F4FF' }}>
            Development access granted • Build v0.1.0 • {new Date().toLocaleDateString()}
          </p>
          <button
            onClick={() => {
              localStorage.removeItem('fcg_dev_access');
              window.location.reload();
            }}
            style={{
              marginTop: '1rem',
              padding: '0.5rem 1rem',
              background: '#ff0040',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontFamily: 'monospace'
            }}
          >
            Logout
          </button>
        </header>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          <div style={{
            background: 'rgba(0, 255, 65, 0.1)',
            border: '2px solid #00ff41',
            borderRadius: '10px',
            padding: '1.5rem',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#00ff41', marginBottom: '1rem' }}>🌐 Frontend Status</h3>
            <p style={{ color: '#F0F4FF' }}>React Dev Server: <span style={{ color: '#00ff41' }}>✅ Running</span></p>
            <p style={{ color: '#F0F4FF' }}>Port: <span style={{ color: '#00ff41' }}>3000</span></p>
            <a
              href="http://localhost:3000"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                marginTop: '1rem',
                padding: '0.5rem 1rem',
                background: '#00ff41',
                color: '#000',
                textDecoration: 'none',
                borderRadius: '5px',
                fontWeight: 'bold'
              }}
            >
              Open Frontend →
            </a>
          </div>

          <div style={{
            background: 'rgba(255, 0, 170, 0.1)',
            border: '2px solid #ff00aa',
            borderRadius: '10px',
            padding: '1.5rem',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#ff00aa', marginBottom: '1rem' }}>🔌 API Status</h3>
            <p style={{ color: '#F0F4FF' }}>Express Server: <span style={{ color: '#00ff41' }}>✅ Running</span></p>
            <p style={{ color: '#F0F4FF' }}>Port: <span style={{ color: '#00ff41' }}>3001</span></p>
            <a
              href="http://localhost:3001/api"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                marginTop: '1rem',
                padding: '0.5rem 1rem',
                background: '#ff00aa',
                color: '#000',
                textDecoration: 'none',
                borderRadius: '5px',
                fontWeight: 'bold'
              }}
            >
              Open API →
            </a>
          </div>

          <div style={{
            background: 'rgba(0, 240, 255, 0.1)',
            border: '2px solid #00f0ff',
            borderRadius: '10px',
            padding: '1.5rem',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#00f0ff', marginBottom: '1rem' }}>⛓️ Blockchain Status</h3>
            <p style={{ color: '#F0F4FF' }}>Forever Couch Gang Coin: <span style={{ color: '#00ff41' }}>✅ Active</span></p>
            <p style={{ color: '#F0F4FF' }}>Mining: <span style={{ color: '#00ff41' }}>Ready</span></p>
            <button
              onClick={() => window.open('http://localhost:3000', '_blank')}
              style={{
                marginTop: '1rem',
                padding: '0.5rem 1rem',
                background: '#00f0ff',
                color: '#000',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Test Mining →
            </button>
          </div>
        </div>

        <div style={{
          background: 'rgba(255, 255, 65, 0.1)',
          border: '2px solid #ffff41',
          borderRadius: '10px',
          padding: '1.5rem',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#ffff41', marginBottom: '1rem' }}>🎯 Quick Actions</h3>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => window.open('http://localhost:3000', '_blank')}
              style={{
                padding: '0.5rem 1rem',
                background: '#00ff41',
                color: '#000',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Test OAuth Flow
            </button>
            <button
              onClick={() => window.open('http://localhost:3001/api/oauth/x/start', '_blank')}
              style={{
                padding: '0.5rem 1rem',
                background: '#1da1f2',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Test X OAuth
            </button>
            <button
              onClick={() => window.open('http://localhost:3001/api/oauth/twitch/start', '_blank')}
              style={{
                padding: '0.5rem 1rem',
                background: '#9146ff',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Test Twitch OAuth
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}