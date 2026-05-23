import { ClipboardList } from 'lucide-react';

export default function EmptyState({ title = 'No tasks yet', description = 'Create your first task to get started.', action }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-4 animate-fade-in">
      <div style={{
        width: 72, height: 72, borderRadius: 20,
        background: 'var(--accent-light)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <ClipboardList size={32} style={{ color: 'var(--accent)' }} />
      </div>
      <div className="text-center">
        <p style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text)', fontFamily: 'Syne, sans-serif' }}>{title}</p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: 4 }}>{description}</p>
      </div>
      {action}
    </div>
  );
}
