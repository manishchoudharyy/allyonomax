'use client';

import { useState } from 'react';

export default function LogoDownloader() {
  const [domain, setDomain] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleDownload = async () => {
    if (!domain.trim()) {
      setStatus('Please enter a domain');
      return;
    }

    setLoading(true);
    setStatus('Converting to WebP...');

    try {
      const response = await fetch('/api/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ domain: domain.trim() }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Conversion failed');
      }

      // Download the WebP file
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'logo.webp';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      setStatus('✅ Logo downloaded successfully as WebP!');
      setDomain('');
      
    } catch (error) {
      console.error('Download error:', error);
      setStatus(`❌ ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      maxWidth: '500px',
      margin: '50px auto',
      padding: '30px',
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h2 style={{
        fontSize: '24px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '8px',
        color: '#1f2937'
      }}>
        Logo Downloader
      </h2>
      
      <p style={{
        textAlign: 'center',
        color: '#6b7280',
        marginBottom: '24px',
        fontSize: '14px'
      }}>
        Convert any domain's logo to WebP
      </p>

      <input
        type="text"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
        placeholder="example.com or https://example.com"
        disabled={loading}
        style={{
          width: '100%',
          padding: '12px 16px',
          fontSize: '16px',
          border: '1px solid #d1d5db',
          borderRadius: '8px',
          marginBottom: '16px',
          boxSizing: 'border-box',
          backgroundColor: loading ? '#f3f4f6' : 'white'
        }}
      />

      <button
        onClick={handleDownload}
        disabled={loading}
        style={{
          width: '100%',
          padding: '12px',
          fontSize: '16px',
          fontWeight: '500',
          backgroundColor: loading ? '#9ca3af' : '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: loading ? 'not-allowed' : 'pointer',
          marginBottom: '16px'
        }}
      >
        {loading ? 'Converting...' : 'Download as WebP'}
      </button>

      {status && (
        <div style={{
          padding: '12px',
          borderRadius: '8px',
          fontSize: '14px',
          textAlign: 'center',
          backgroundColor: status.includes('✅') ? '#d1fae5' : status.includes('❌') ? '#fee2e2' : '#dbeafe',
          color: status.includes('✅') ? '#065f46' : status.includes('❌') ? '#991b1b' : '#1e40af'
        }}>
          {status}
        </div>
      )}

      <p style={{
        fontSize: '12px',
        color: '#9ca3af',
        textAlign: 'center',
        marginTop: '20px',
        paddingTop: '16px',
        borderTop: '1px solid #e5e7eb'
      }}>
        Logo fetched from: <strong>{domain || 'yourdomain'}/logo.png</strong><br/>
        🔒 Server-side processing • No CORS issues
      </p>
    </div>
  );
}