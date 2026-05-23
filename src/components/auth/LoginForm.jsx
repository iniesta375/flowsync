import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginWithEmail, loginWithGoogle } from '../../firebase/auth';
import { useAuthForm } from '../../hooks/useAuthForm';
import Field from '../ui/Field';
import toast from 'react-hot-toast';
import { Eye, EyeOff, LogIn } from 'lucide-react';

export default function LoginForm({ onSwitch }) {
  const { fields, set, errors, validate } = useAuthForm('login');
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!validate()) return;
    setLoading(true);
    try {
      await loginWithEmail(fields.email, fields.password);
      toast.success('Welcome back!');
      navigate('/dashboard');
    } catch (err) {
      toast.error(err.code === 'auth/invalid-credential' ? 'Invalid email or password' : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setGoogleLoading(true);
    try {
      await loginWithGoogle();
      toast.success('Welcome!');
      navigate('/dashboard');
    } catch (err) {
      toast.error('Google sign-in failed');
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="animate-fade-in flex flex-col gap-5">
      <Field label="Email" error={errors.email} required>
        <input
          className={`input-field ${errors.email ? 'error' : ''}`}
          type="email"
          placeholder="you@example.com"
          value={fields.email}
          onChange={(e) => set('email', e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
        />
      </Field>

      <Field label="Password" error={errors.password} required>
        <div style={{ position: 'relative' }}>
          <input
            className={`input-field ${errors.password ? 'error' : ''}`}
            type={showPass ? 'text' : 'password'}
            placeholder="Your password"
            value={fields.password}
            onChange={(e) => set('password', e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            style={{ paddingRight: '2.5rem' }}
          />
          <button
            type="button"
            onClick={() => setShowPass((s) => !s)}
            style={{ position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
          >
            {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </Field>

      <button
        className="btn-primary"
        onClick={handleSubmit}
        disabled={loading}
        style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.7 : 1 }}
      >
        <LogIn size={16} />
        {loading ? 'Signing in…' : 'Sign In'}
      </button>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <hr style={{ flex: 1, borderColor: 'var(--border)' }} />
        <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>or</span>
        <hr style={{ flex: 1, borderColor: 'var(--border)' }} />
      </div>

      <button
        className="btn-ghost"
        onClick={handleGoogle}
        disabled={googleLoading}
        style={{ width: '100%', justifyContent: 'center', gap: '0.6rem' }}
      >
        <svg width="17" height="17" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        {googleLoading ? 'Connecting…' : 'Continue with Google'}
      </button>

      <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
        Don't have an account?{' '}
        <button onClick={onSwitch} style={{ color: 'var(--accent)', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>
          Sign up
        </button>
      </p>
    </div>
  );
}
