import { Search, Filter } from 'lucide-react';

export default function TaskFilters({ search, setSearch, filter, setFilter }) {
  const filters = ['all', 'pending', 'completed'];

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <div style={{ position: 'relative', flex: 1 }}>
        <Search size={16} style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
        <input
          className="input-field"
          placeholder="Search tasks…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ paddingLeft: '2.3rem' }}
        />
      </div>

      <div style={{
        display: 'flex',
        gap: 4,
        background: 'var(--bg)',
        border: '1px solid var(--border)',
        borderRadius: 10,
        padding: 3,
      }}>
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              padding: '0.4rem 0.85rem',
              borderRadius: 8,
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.82rem',
              fontWeight: 600,
              textTransform: 'capitalize',
              background: filter === f ? 'var(--accent)' : 'transparent',
              color: filter === f ? '#fff' : 'var(--text-muted)',
              transition: 'all 0.2s',
            }}
          >
            {f}
          </button>
        ))}
      </div>
    </div>
  );
}
