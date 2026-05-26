import { Menu, Sun, Moon, Bell } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import Avatar from '../ui/Avatar';
import { useLocation } from 'react-router-dom';

const PAGE_TITLES = {
  '/dashboard': 'Dashboard',
  '/profile': 'My Profile',
  '/about': 'About TaskFlow',
};

export default function Topbar({ onMenuClick }) {
  const { dark, toggleDark, user } = useApp();
  const { pathname } = useLocation();
  const title = PAGE_TITLES[pathname] || 'TaskFlow';

  return (
    <header style={{
      height: 64,
      borderBottom: '1px solid var(--border)',
      background: 'var(--bg-card)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 1.25rem',
      gap: '1rem',
      position: 'sticky',
      top: 0,
      zIndex: 20,
    }}>
      <button
        onClick={onMenuClick}
        className="md:hidden"
        style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', display: 'flex' }}
      >
        <Menu  size={22} />
      </button>

      <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: 'var(--text)', flex: 1 }}>
        {title}
      </h1>

      <div className="flex items-center gap-2">
        <button
          onClick={toggleDark}
          style={{
            width: 36, height: 36, borderRadius: 10,
            background: 'var(--accent-light)',
            border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--accent)',
            transition: 'transform 0.2s',
          }}
        >
          {dark ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        <Avatar user={user} size={34} />
      </div>
    </header>
  );
}
