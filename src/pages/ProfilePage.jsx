import { useState } from 'react';
import { updateProfile } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../firebase/config';
import { useApp } from '../context/AppContext';
import Avatar from '../components/ui/Avatar';
import Field from '../components/ui/Field';
import toast from 'react-hot-toast';
import { User, Mail, Calendar, Save, CheckCircle2, ListTodo, Clock } from 'lucide-react';
import { formatDate } from '../utils/helpers';

export default function ProfilePage() {
  const { user, tasks } = useApp();
  const [name, setName] = useState(user?.displayName || '');
  const [loading, setLoading] = useState(false);

  const stats = {
    total: tasks.length,
    completed: tasks.filter((t) => t.status === 'completed').length,
    pending: tasks.filter((t) => t.status === 'pending').length,
  };

  const handleSave = async () => {
    if (!name.trim() || name.trim().length < 2) {
      toast.error('Name must be at least 2 characters');
      return;
    }
    setLoading(true);
    try {
      await updateProfile(auth.currentUser, { displayName: name.trim() });
      await updateDoc(doc(db, 'users', user.uid), { name: name.trim() });
      toast.success('Profile updated!');
    } catch {
      toast.error('Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="animate-fade-in" style={{ maxWidth: 700, margin: '0 auto' }}>
      <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 18, overflow: 'hidden', marginBottom: '1.5rem' }}>
        <div style={{ height: 100, background: 'linear-gradient(135deg, var(--accent) 0%, #a78bfa 100%)' }} />
        <div style={{ padding: '0 1.5rem 1.5rem', marginTop: -36 }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ border: '3px solid var(--bg-card)', borderRadius: '50%', display: 'inline-block' }}>
              <Avatar user={user} size={68} />
            </div>
            <div style={{ paddingBottom: 4 }}>
              <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.2rem', color: 'var(--text)' }}>
                {user?.displayName || 'User'}
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{user?.email}</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
        {[
          { label: 'Total', value: stats.total, icon: ListTodo, color: 'var(--accent)', bg: 'var(--accent-light)' },
          { label: 'Done', value: stats.completed, icon: CheckCircle2, color: '#10b981', bg: '#d1fae5' },
          { label: 'Pending', value: stats.pending, icon: Clock, color: '#f59e0b', bg: '#fef3c7' },
        ].map(({ label, value, icon: Icon, color, bg }) => (
          <div key={label} className="stat-card" style={{ textAlign: 'center' }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.5rem' }}>
              <Icon size={17} style={{ color }} />
            </div>
            <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.4rem', color: 'var(--text)' }}>{value}</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>{label}</p>
          </div>
        ))}
      </div>

      <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 18, padding: '1.5rem' }}>
        <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem', color: 'var(--text)', marginBottom: '1.25rem' }}>
          Account Details
        </h3>

        <div className="flex flex-col gap-4">
          <Field label="Display Name">
            <div style={{ position: 'relative' }}>
              <User size={15} style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input
                className="input-field"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ paddingLeft: '2.3rem' }}
                placeholder="Your name"
              />
            </div>
          </Field>

          <Field label="Email Address">
            <div style={{ position: 'relative' }}>
              <Mail size={15} style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input
                className="input-field"
                value={user?.email || ''}
                disabled
                style={{ paddingLeft: '2.3rem', opacity: 0.6, cursor: 'not-allowed' }}
              />
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>Email cannot be changed.</p>
          </Field>

          <Field label="Member Since">
            <div style={{ position: 'relative' }}>
              <Calendar size={15} style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input
                className="input-field"
                value={user?.metadata?.creationTime ? formatDate({ toDate: () => new Date(user.metadata.creationTime) }) : '—'}
                disabled
                style={{ paddingLeft: '2.3rem', opacity: 0.6, cursor: 'not-allowed' }}
              />
            </div>
          </Field>

          <div className="flex justify-end">
            <button className="btn-primary" onClick={handleSave} disabled={loading} style={{ opacity: loading ? 0.7 : 1 }}>
              <Save size={15} />
              {loading ? 'Saving…' : 'Save Changes'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
