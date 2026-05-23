import { format, formatDistanceToNow } from 'date-fns';

export const formatDate = (ts) => {
  if (!ts) return '';
  const date = ts?.toDate ? ts.toDate() : new Date(ts);
  return format(date, 'MMM d, yyyy');
};

export const timeAgo = (ts) => {
  if (!ts) return '';
  const date = ts?.toDate ? ts.toDate() : new Date(ts);
  return formatDistanceToNow(date, { addSuffix: true });
};

export const getInitials = (name = '') =>
  name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2);

export const PRIORITY_COLORS = {
  low: { bg: '#d1fae5', text: '#065f46', dot: '#10b981' },
  medium: { bg: '#fef3c7', text: '#92400e', dot: '#f59e0b' },
  high: { bg: '#fee2e2', text: '#991b1b', dot: '#ef4444' },
};

export const STATUS_COLORS = {
  pending: { bg: '#fef3c7', text: '#92400e' },
  completed: { bg: '#d1fae5', text: '#065f46' },
};
