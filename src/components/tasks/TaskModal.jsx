import { useState, useEffect } from 'react';
import { X, Save } from 'lucide-react';
import Field from '../ui/Field';
import { useTaskForm } from '../../hooks/useTaskForm';
import { createTask, updateTask } from '../../firebase/tasks';
import { useApp } from '../../context/AppContext';
import toast from 'react-hot-toast';

export default function TaskModal({ task, onClose }) {
  const { user } = useApp();
  const isEdit = !!task;
  const { fields, set, errors, validate, reset, setFields } = useTaskForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (task) {
      setFields({ title: task.title, description: task.description, priority: task.priority || 'medium' });
    }
  }, [task]);

  const handleSave = async () => {
    if (!validate()) return;
    setLoading(true);
    try {
      if (isEdit) {
        await updateTask(user.uid, task.id, fields);
        toast.success('Task updated');
      } else {
        await createTask(user.uid, fields);
        toast.success('Task created');
      }
      onClose();
    } catch {
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.15rem', color: 'var(--text)' }}>
            {isEdit ? 'Edit Task' : 'New Task'}
          </h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <Field label="Title" error={errors.title} required>
            <input
              className={`input-field ${errors.title ? 'error' : ''}`}
              placeholder="e.g. Build login page"
              value={fields.title}
              onChange={(e) => set('title', e.target.value)}
            />
          </Field>

          <Field label="Description" error={errors.description} required>
            <textarea
              className={`input-field ${errors.description ? 'error' : ''}`}
              placeholder="Describe the task…"
              rows={3}
              value={fields.description}
              onChange={(e) => set('description', e.target.value)}
              style={{ resize: 'vertical', minHeight: 80 }}
            />
          </Field>

          <Field label="Priority">
            <select
              className="input-field"
              value={fields.priority}
              onChange={(e) => set('priority', e.target.value)}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </Field>
        </div>

        <div className="flex gap-2 justify-end mt-6">
          <button className="btn-ghost" onClick={onClose}>Cancel</button>
          <button
            className="btn-primary"
            onClick={handleSave}
            disabled={loading}
            style={{ opacity: loading ? 0.7 : 1 }}
          >
            <Save size={15} />
            {loading ? 'Saving…' : isEdit ? 'Update Task' : 'Create Task'}
          </button>
        </div>
      </div>
    </div>
  );
}
