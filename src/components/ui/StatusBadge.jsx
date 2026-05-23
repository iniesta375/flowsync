import { STATUS_COLORS, PRIORITY_COLORS } from '../../utils/helpers';

export function StatusBadge({ status }) {
  const c = STATUS_COLORS[status] || STATUS_COLORS.pending;
  return (
    <span style={{
      background: c.bg,
      color: c.text,
      padding: '2px 10px',
      borderRadius: 99,
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: '0.02em',
      textTransform: 'capitalize',
    }}>
      {status}
    </span>
  );
}

export function PriorityBadge({ priority = 'medium' }) {
  const c = PRIORITY_COLORS[priority];
  return (
    <span style={{
      background: c.bg,
      color: c.text,
      padding: '2px 10px',
      borderRadius: 99,
      fontSize: '0.75rem',
      fontWeight: 600,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
    }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: c.dot, display: 'inline-block' }} />
      {priority}
    </span>
  );
}
