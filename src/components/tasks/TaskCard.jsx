import { useState } from 'react';
import { Pencil, Trash2, CheckCircle2, Circle } from 'lucide-react';
import { StatusBadge, PriorityBadge } from '../ui/StatusBadge';
import { formatDate, timeAgo } from '../../utils/helpers';
import { toggleTaskStatus, deleteTask } from '../../firebase/tasks';
import { useApp } from '../../context/AppContext';
import ConfirmDelete from '../ui/ConfirmDelete';
import toast from 'react-hot-toast';

export default function TaskCard({ task, onEdit }) {
  const { user } = useApp();
  const [deleting, setDeleting] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const isCompleted = task.status === 'completed';

  const handleToggle = async () => {
    try {
      await toggleTaskStatus(user.uid, task.id, task.status);
    } catch {
      toast.error('Failed to update status');
    }
  };

  const handleDelete = async () => {
    setDeleting(true);
    try {
      await deleteTask(user.uid, task.id);
      toast.success('Task deleted');
      setShowConfirm(false);
    } catch {
      toast.error('Failed to delete task');
    } finally {
      setDeleting(false);
    }
  };

  return (
    <>
      <div className="task-card animate-fade-in p-5">
        <div className="flex items-start gap-3">
          <button
            onClick={handleToggle}
            style={{ marginTop: 2, flexShrink: 0, background: 'none', border: 'none', cursor: 'pointer', color: isCompleted ? 'var(--success)' : 'var(--border)', transition: 'color 0.2s' }}
          >
            {isCompleted ? <CheckCircle2 size={20} /> : <Circle size={20} />}
          </button>

          <div style={{ flex: 1, minWidth: 0 }}>
            <div className="flex items-start justify-between gap-2 flex-wrap">
              <h3 style={{
                fontWeight: 600,
                fontSize: '0.95rem',
                color: isCompleted ? 'var(--text-muted)' : 'var(--text)',
                textDecoration: isCompleted ? 'line-through' : 'none',
                fontFamily: 'Syne, sans-serif',
                lineHeight: 1.3,
              }}>
                {task.title}
              </h3>
              <div className="flex items-center gap-1 flex-shrink-0">
                <button
                  onClick={() => onEdit(task)}
                  style={{ width: 28, height: 28, borderRadius: 7, background: 'var(--accent-light)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', transition: 'opacity 0.2s' }}
                >
                  <Pencil size={13} />
                </button>
                <button
                  onClick={() => setShowConfirm(true)}
                  style={{ width: 28, height: 28, borderRadius: 7, background: '#fee2e2', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--danger)', transition: 'opacity 0.2s' }}
                >
                  <Trash2 size={13} />
                </button>
              </div>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.35rem', lineHeight: 1.5 }}>
              {task.description}
            </p>

            <div className="flex items-center gap-2 mt-3 flex-wrap">
              <StatusBadge status={task.status} />
              <PriorityBadge priority={task.priority} />
              <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginLeft: 'auto' }}>
                {timeAgo(task.createdAt)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {showConfirm && (
        <ConfirmDelete
          onConfirm={handleDelete}
          onCancel={() => setShowConfirm(false)}
          loading={deleting}
        />
      )}
    </>
  );
}
