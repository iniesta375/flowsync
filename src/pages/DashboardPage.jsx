import { useState, useMemo } from 'react';
import { Plus, CheckCircle2, Clock, ListTodo, TrendingUp } from 'lucide-react';
import { useApp } from '../context/AppContext';
import TaskCard from '../components/tasks/TaskCard';
import TaskModal from '../components/tasks/TaskModal';
import TaskFilters from '../components/tasks/TaskFilters';
import EmptyState from '../components/ui/EmptyState';
import Pagination from '../components/ui/Pagination';

const PAGE_SIZE = 6;

export default function DashboardPage() {
  const { tasks, tasksLoading, user } = useApp();
  const [showModal, setShowModal] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [page, setPage] = useState(1);

  const stats = useMemo(() => ({
    total: tasks.length,
    completed: tasks.filter((t) => t.status === 'completed').length,
    pending: tasks.filter((t) => t.status === 'pending').length,
    rate: tasks.length ? Math.round((tasks.filter((t) => t.status === 'completed').length / tasks.length) * 100) : 0,
  }), [tasks]);

  const filtered = useMemo(() => {
    let t = tasks;
    if (filter !== 'all') t = t.filter((tk) => tk.status === filter);
    if (search.trim()) {
      const q = search.toLowerCase();
      t = t.filter((tk) => tk.title.toLowerCase().includes(q) || tk.description.toLowerCase().includes(q));
    }
    return t;
  }, [tasks, filter, search]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleEdit = (task) => { setEditTask(task); setShowModal(true); };
  const handleCreate = () => { setEditTask(null); setShowModal(true); };
  const handleClose = () => { setShowModal(false); setEditTask(null); };

  const STATS = [
    { label: 'Total Tasks', value: stats.total, icon: ListTodo, color: '#6c63ff', bg: '#ede9fe' },
    { label: 'Completed', value: stats.completed, icon: CheckCircle2, color: '#10b981', bg: '#d1fae5' },
    { label: 'Pending', value: stats.pending, icon: Clock, color: '#f59e0b', bg: '#fef3c7' },
    { label: 'Completion', value: `${stats.rate}%`, icon: TrendingUp, color: '#6366f1', bg: '#e0e7ff' },
  ];

  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.3rem', color: 'var(--text)' }}>
            Good day, {user?.displayName?.split(' ')[0] || 'there'} 👋
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: 2 }}>
            You have {stats.pending} pending task{stats.pending !== 1 ? 's' : ''} to tackle.
          </p>
        </div>
        <button className="btn-primary" onClick={handleCreate}>
          <Plus size={16} /> New Task
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', marginBottom: '1.75rem' }}>
        {STATS.map(({ label, value, icon: Icon, color, bg }) => (
          <div key={label} className="stat-card" style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
            <div style={{ width: 42, height: 42, borderRadius: 12, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Icon size={20} style={{ color }} />
            </div>
            <div>
              <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.4rem', color: 'var(--text)', lineHeight: 1 }}>{value}</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: 2 }}>{label}</p>
            </div>
          </div>
        ))}
      </div>

      {tasks.length > 0 && (
        <div style={{ marginBottom: '1.75rem', background: 'var(--bg-card)', borderRadius: 14, border: '1px solid var(--border)', padding: '1rem 1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text)' }}>Overall Progress</span>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{stats.completed}/{stats.total} tasks</span>
          </div>
          <div style={{ height: 7, background: 'var(--border)', borderRadius: 99, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${stats.rate}%`, background: 'var(--accent)', borderRadius: 99, transition: 'width 0.5s ease' }} />
          </div>
        </div>
      )}

      <div style={{ marginBottom: '1.25rem' }}>
        <TaskFilters
          search={search}
          setSearch={(v) => { setSearch(v); setPage(1); }}
          filter={filter}
          setFilter={(v) => { setFilter(v); setPage(1); }}
        />
      </div>

      {tasksLoading ? (
        <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>Loading tasks…</div>
      ) : filtered.length === 0 ? (
        <EmptyState
          title={search || filter !== 'all' ? 'No tasks match your filters' : 'No tasks yet'}
          description={search || filter !== 'all' ? 'Try adjusting your search or filter.' : 'Create your first task to get started.'}
          action={
            !search && filter === 'all' && (
              <button className="btn-primary" onClick={handleCreate}>
                <Plus size={15} /> Create Task
              </button>
            )
          }
        />
      ) : (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1rem' }}>
            {paginated.map((task) => (
              <TaskCard key={task.id} task={task} onEdit={handleEdit} />
            ))}
          </div>
          <Pagination page={page} totalPages={totalPages} onChange={setPage} />
        </>
      )}

      {showModal && <TaskModal task={editTask} onClose={handleClose} />}
    </div>
  );
}
