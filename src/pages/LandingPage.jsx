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
    <div className="min-h-screen transition-colors duration-200" style={{ background: 'var(--bg)' }}>
      
      <nav className="fixed top-0 left-0 right-0 z-50 h-[62px] flex items-center justify-between px-2 sm:px-6 backdrop-blur-[10px] border-b transition-colors duration-200"
           style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
        
        <div className="flex items-center gap-1 min-w-0 shrink-0">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-[8px] flex items-center justify-center shrink-0" 
               style={{ background: 'var(--accent)' }}>
            <CheckSquare size={14} color="#fff" className="sm:hidden" />
            <CheckSquare size={16} color="#fff" className="hidden sm:block" />
          </div>
          <span className="font-extrabold text-sm sm:text-[1.05rem] tracking-tight shrink-0" 
                style={{ fontFamily: 'sans-serif', color: 'var(--text)' }}>
            FlowSync
          </span>
        </div>

        <div className="flex items-center gap-0.5 sm:gap-3 shrink-0">
          <button 
            onClick={toggleDark} 
            className="w-8 h-8 sm:w-[34px] sm:h-[34px] rounded-[8px] border-none cursor-pointer flex items-center justify-center shrink-0 transition-transform active:scale-95"
            style={{ background: 'var(--accent-light)', color: 'var(--accent)' }}
          >
            <Moon size={14} />
          </button>
          
          <Link 
            to="/login" 
            className="btn-ghost px-1.5 py-1 sm:px-4 sm:py-2 text-[11px] sm:text-sm font-medium shrink-0"
            style={{ textDecoration: 'none' }}
          >
            Sign In
          </Link>
          
          <Link 
            to="/register"
            className="btn-primary px-2 py-1 sm:px-4 sm:py-2 text-[11px] sm:text-sm font-medium rounded-lg sm:rounded-xl whitespace-nowrap shadow-sm shrink-0 transition-all"
            style={{ textDecoration: 'none' }}
          >
            Get Started
          </Link>
        </div>
      </nav>

      <section className="pt-[130px] pb-16 px-4 text-center">
        <div className="max-w-[680px] mx-auto">
          <h1 className="font-extrabold tracking-tight mb-5"
              style={{
                fontFamily: 'sans-serif',
                fontSize: 'clamp(2.1rem, 6.5vw, 3.5rem)',
                lineHeight: 1.15,
                color: 'var(--text)',
              }}>
            Manage your tasks,<br />
            <span style={{ color: 'var(--accent)' }}>not your stress.</span>
          </h1>

          <p className="mx-auto mb-10 max-w-[520px]" 
             style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)', lineHeight: 1.7 }}>
            A clean, fast, and reliable task manager. Create, prioritize, and track your work all in one beautifully simple place.
          </p>

          <div className="flex gap-3 justify-center flex-wrap items-center">
            <Link to="/register" className="btn-primary flex items-center gap-2" style={{ textDecoration: 'none', fontSize: '1rem', padding: '0.75rem 1.75rem' }}>
              Start for free <ArrowRight size={16} />
            </Link>
            <Link to="/login" className="btn-ghost" style={{ textDecoration: 'none', fontSize: '1rem', padding: '0.75rem 1.75rem' }}>
              Sign In
            </Link>
          </div>

          <div className="mt-10 flex justify-center items-center gap-4 sm:gap-6 flex-wrap">
            {['Free forever', 'No credit card', 'Google sign-in'].map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-[0.82rem]" style={{ color: 'var(--text-muted)' }}>
                <Check size={13} style={{ color: 'var(--success)' }} /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-[1100px] mx-auto">
        <h2 className="text-center font-bold mb-2" 
            style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', color: 'var(--text)' }}>
          Everything you need
        </h2>
        <p className="text-center mb-12" style={{ color: 'var(--text-muted)' }}>
          Designed to help you stay focused and organized.
        </p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="stat-card p-6 border rounded-2xl transition-all duration-200 hover:-translate-y-0.5" 
                 style={{ borderColor: 'var(--border)' }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" 
                   style={{ background: 'var(--accent-light)' }}>
                <Icon size={20} style={{ color: 'var(--accent)' }} />
              </div>
              <h3 className="font-bold text-base mb-1.5" style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text)' }}>
                {title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 text-center" style={{ background: 'var(--accent)' }}>
        <h2 className="font-extrabold text-white mb-3" 
            style={{ fontFamily: 'sans-serif', fontSize: 'clamp(1.6rem, 4vw, 2.2rem)' }}>
          Ready to get organized?
        </h2>
        <p className="mb-8 text-[1rem]" style={{ color: 'rgba(255,255,255,0.8)' }}>
          Join thousands of people who manage their day with FlowSync.
        </p>
        <Link to="/register" className="inline-flex items-center gap-2 bg-white px-8 py-3 rounded-xl font-bold text-[1rem] transition-transform hover:scale-[1.02]" style={{ textDecoration: 'none', color: 'var(--accent)' }}>
          Create free account <ArrowRight size={16} />
        </Link>
      </section>

      <footer className="py-6 text-center border-t text-[0.82rem]" 
              style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}>
        © {new Date().getFullYear()} FlowSync
      </footer>
    </div>
  );
}