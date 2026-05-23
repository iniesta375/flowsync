import { Trash2, X } from 'lucide-react';

export default function ConfirmDelete({ onConfirm, onCancel, loading }) {
  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div className="modal-box" style={{ maxWidth: 380 }} onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-3 mb-4">
          <div style={{ width: 42, height: 42, borderRadius: 12, background: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Trash2 size={20} style={{ color: 'var(--danger)' }} />
          </div>
          <div>
            <p style={{ fontWeight: 700, fontFamily: 'Syne, sans-serif' }}>Delete Task?</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>This action cannot be undone.</p>
          </div>
        </div>
        <div className="flex gap-2 justify-end">
          <button className="btn-ghost" onClick={onCancel}>Cancel</button>
          <button
            onClick={onConfirm}
            disabled={loading}
            style={{
              background: 'var(--danger)', color: '#fff',
              borderRadius: 10, padding: '0.55rem 1.25rem',
              fontWeight: 600, fontSize: '0.9rem', border: 'none', cursor: 'pointer',
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? 'Deleting…' : 'Delete'}
          </button>
        </div>
      </div>
    </div>
  );
}
