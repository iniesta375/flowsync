import { Link } from 'react-router-dom';
import { CheckSquare, Zap, Shield, Moon, Search, BarChart3, ArrowRight, Check } from 'lucide-react';
import { useApp } from '../context/AppContext';

const FEATURES = [
  { icon: Zap, title: 'Lightning Fast', desc: 'Real-time sync powered by Firebase. Changes reflect instantly across all devices.' },
  { icon: Shield, title: 'Secure by Default', desc: 'Every task is private to your account. Firebase Auth keeps your data safe.' },
  { icon: Moon, title: 'Dark Mode', desc: 'Easy on the eyes. Switch between light and dark with one click.' },
  { icon: Search, title: 'Instant Search', desc: 'Find any task immediately with full-text search across titles and descriptions.' },
  { icon: BarChart3, title: 'Visual Dashboard', desc: 'Get a birds-eye view of your progress with live stats and completion rates.' },
  { icon: CheckSquare, title: 'Priority System', desc: 'Tag tasks as low, medium, or high priority and filter accordingly.' },
];

export default function LandingPage() {
  const { dark, toggleDark } = useApp();

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: 'var(--bg-card)', borderBottom: '1px solid var(--border)',
        padding: '0 1.5rem', height: 62,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        backdropFilter: 'blur(10px)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{ width: 32, height: 32, borderRadius: 9, background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CheckSquare size={16} color="#fff" />
          </div>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.05rem', color: 'var(--text)' }}>FlowSync</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button onClick={toggleDark} style={{ width: 34, height: 34, borderRadius: 9, background: 'var(--accent-light)', border: 'none', cursor: 'pointer', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Moon size={15} />
          </button>
          <Link to="/login" className="btn-ghost" style={{ textDecoration: 'none', fontSize: '0.875rem' }}>Sign In</Link>
          <Link to="/register" className="btn-primary" style={{ textDecoration: 'none', fontSize: '0.875rem' }}>Get Started</Link>
        </div>
      </nav>

      <section style={{ paddingTop: 140, paddingBottom: 80, textAlign: 'center', padding: '140px 1.5rem 80px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>

          <h1 style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(2.2rem, 6vw, 3.5rem)',
            lineHeight: 1.15,
            color: 'var(--text)',
            marginBottom: '1.25rem',
          }}>
            Manage your tasks,<br />
            <span style={{ color: 'var(--accent)' }}>not your stress.</span>
          </h1>

          <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: 520, margin: '0 auto 2.5rem' }}>
            A clean, fast, and reliable task manager. Create, prioritize, and track your work — all in one beautifully simple place.
          </p>

          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/register" className="btn-primary" style={{ textDecoration: 'none', fontSize: '1rem', padding: '0.75rem 1.75rem' }}>
              Start for free <ArrowRight size={16} />
            </Link>
            <Link to="/login" className="btn-ghost" style={{ textDecoration: 'none', fontSize: '1rem', padding: '0.75rem 1.75rem' }}>
              Sign In
            </Link>
          </div>

          <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            {['Free forever', 'No credit card', 'Google sign-in'].map((t) => (
              <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 5, color: 'var(--text-muted)', fontSize: '0.82rem' }}>
                <Check size={13} style={{ color: 'var(--success)' }} /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 1.5rem 100px', maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', color: 'var(--text)', marginBottom: '0.5rem' }}>
          Everything you need
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '3rem' }}>Designed to help you stay focused and organized.</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}>
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="stat-card" style={{ padding: '1.5rem' }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Icon size={20} style={{ color: 'var(--accent)' }} />
              </div>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem', color: 'var(--text)', marginBottom: '0.4rem' }}>{title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '60px 1.5rem', background: 'var(--accent)', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', color: '#fff', marginBottom: '0.75rem' }}>
          Ready to get organized?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', fontSize: '1rem' }}>
          Join thousands of people who manage their day with TaskFlow.
        </p>
        <Link to="/register" style={{ textDecoration: 'none', background: '#fff', color: 'var(--accent)', padding: '0.8rem 2rem', borderRadius: 12, fontWeight: 700, fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          Create free account <ArrowRight size={16} />
        </Link>
      </section>

      <footer style={{ padding: '1.5rem', textAlign: 'center', borderTop: '1px solid var(--border)', color: 'var(--text-muted)', fontSize: '0.82rem' }}>
        © {new Date().getFullYear()} TaskFlow
      </footer>
    </div>
  );
}
