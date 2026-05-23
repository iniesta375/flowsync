import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)', padding: '2rem' }}>
      <div style={{ textAlign: 'center', maxWidth: 440 }}>
        <div style={{
          fontFamily: 'Syne, sans-serif', fontWeight: 800,
          fontSize: 'clamp(5rem, 20vw, 8rem)',
          color: 'var(--accent)', lineHeight: 1, marginBottom: '1rem', opacity: 0.18,
        }}>404</div>
        <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.6rem', color: 'var(--text)', marginBottom: '0.75rem' }}>
          Page not found
        </h1>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn-ghost" onClick={() => window.history.back()}>
            <ArrowLeft size={15} /> Go Back
          </button>
          <Link to="/" className="btn-primary" style={{ textDecoration: 'none' }}>
            <Home size={15} /> Home
          </Link>
        </div>
      </div>
    </div>
  );
}
