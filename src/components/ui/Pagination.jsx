import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Pagination({ page, totalPages, onChange }) {
  if (totalPages <= 1) return null;
  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      <button
        className="btn-ghost"
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        style={{ padding: '0.4rem 0.7rem', opacity: page === 1 ? 0.4 : 1 }}
      >
        <ChevronLeft size={16} />
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          style={{
            width: 36, height: 36, borderRadius: 8, fontSize: '0.875rem', fontWeight: 600,
            background: p === page ? 'var(--accent)' : 'transparent',
            color: p === page ? '#fff' : 'var(--text-muted)',
            border: p === page ? 'none' : '1px solid var(--border)',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
        >
          {p}
        </button>
      ))}

      <button
        className="btn-ghost"
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
        style={{ padding: '0.4rem 0.7rem', opacity: page === totalPages ? 0.4 : 1 }}
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}
