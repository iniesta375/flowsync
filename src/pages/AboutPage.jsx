import { Target, Lightbulb, Users, ArrowRight, CheckSquare, Zap, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="animate-fade-in" style={{ maxWidth: 720, margin: '0 auto' }}>

      <div style={{
        background: 'linear-gradient(135deg, var(--accent) 0%, #a78bfa 100%)',
        borderRadius: 20,
        padding: 'clamp(1.5rem, 5vw, 2.5rem)',
        marginBottom: '1.5rem',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
        <div style={{ position: 'absolute', bottom: -30, left: -30, width: 150, height: 150, borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.15)', padding: '0.3rem 0.9rem', borderRadius: 99, fontSize: '0.78rem', fontWeight: 600, marginBottom: '1.25rem' }}>
            <Heart size={12} /> Our Story
          </div>
          <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', lineHeight: 1.2, marginBottom: '1rem' }}>
            Built for people who just want to get things done.
          </h1>
          <p style={{ opacity: 0.88, lineHeight: 1.8, fontSize: '0.95rem', maxWidth: 560 }}>
            FlowSync was born out of a simple frustration — the feeling of having too many things to do and no clear, simple way to keep track of them all.
          </p>
        </div>
      </div>

      <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 18, padding: 'clamp(1.25rem, 4vw, 2rem)', marginBottom: '1.25rem' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
          <div style={{ width: 44, height: 44, borderRadius: 13, background: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Lightbulb size={20} style={{ color: 'var(--accent)' }} />
          </div>
          <div>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: 'var(--text)', marginBottom: '0.75rem' }}>
              Why we built FlowSync
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, fontSize: '0.9rem', marginBottom: '0.75rem' }}>
              Productivity tools shouldn't feel like work. Yet most of them are bloated, complicated, or simply overwhelming — piling on features that get in the way of actually doing things.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, fontSize: '0.9rem' }}>
              We wanted something different. Something that respects your time, stays out of your way, and gives you a clear, honest picture of what needs to get done today. TaskFlow is that tool — minimal by design, powerful where it counts.
            </p>
          </div>
        </div>
      </div>

      <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 18, padding: 'clamp(1.25rem, 4vw, 2rem)', marginBottom: '1.25rem' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
          <div style={{ width: 44, height: 44, borderRadius: 13, background: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Target size={20} style={{ color: '#d97706' }} />
          </div>
          <div>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: 'var(--text)', marginBottom: '0.75rem' }}>
              The problem we're solving
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, fontSize: '0.9rem', marginBottom: '0.75rem' }}>
              Every day, people juggle dozens of responsibilities — work deadlines, personal errands, side projects, appointments. Without a system, things slip through the cracks. That forgotten task, that missed deadline, that nagging feeling you've left something undone.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, fontSize: '0.9rem' }}>
              The real problem isn't busyness — it's the mental overhead of trying to hold everything in your head at once. TaskFlow takes that burden off your mind and puts it somewhere you can actually see, manage, and act on it.
            </p>
          </div>
        </div>
      </div>

      <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 18, padding: 'clamp(1.25rem, 4vw, 2rem)', marginBottom: '1.25rem' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
          <div style={{ width: 44, height: 44, borderRadius: 13, background: '#d1fae5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Users size={20} style={{ color: '#059669' }} />
          </div>
          <div>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: 'var(--text)', marginBottom: '0.75rem' }}>
              Who it's for
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, fontSize: '0.9rem', marginBottom: '1rem' }}>
              FlowSync is for anyone who finds themselves overwhelmed by their day-to-day tasks — whether you're a student balancing assignments and personal goals, a professional managing projects and meetings, or simply someone who wants a cleaner, calmer way to stay on top of life.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))', gap: '0.6rem' }}>
              {['Students', 'Freelancers', 'Professionals', 'Entrepreneurs', 'Creatives', 'Everyone else'].map((group) => (
                <div key={group} style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  background: 'var(--bg)', border: '1px solid var(--border)',
                  borderRadius: 10, padding: '0.5rem 0.75rem',
                  fontSize: '0.82rem', fontWeight: 600, color: 'var(--text)',
                }}>
                  <CheckSquare size={13} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                  {group}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{
        background: 'var(--accent-light)',
        border: '1px solid var(--accent)',
        borderRadius: 18,
        padding: 'clamp(1.25rem, 4vw, 2rem)',
        marginBottom: '1.5rem',
      }}>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
          <Zap size={20} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }} />
          <div>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem', color: 'var(--text)', marginBottom: '0.5rem' }}>
              Our promise
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, fontSize: '0.875rem' }}>
              FlowSync will always be fast, focused, and free of clutter. No endless settings, no feature bloat. Just a clean space to capture what matters, track your progress, and move forward — one task at a time.
            </p>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', padding: '1rem 0 0.5rem' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1rem' }}>
          Ready to take control of your day?
        </p>
        <Link to="/dashboard" className="btn-primary" style={{ textDecoration: 'none', fontSize: '0.95rem', padding: '0.7rem 1.75rem' }}>
          Go to Dashboard <ArrowRight size={15} />
        </Link>
      </div>

    </div>
  );
}