export default function Field({ label, error, children, required }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label style={{ color: 'var(--text)', fontSize: '0.85rem', fontWeight: 600 }}>
          {label}{required && <span style={{ color: 'var(--danger)', marginLeft: 2 }}>*</span>}
        </label>
      )}
      {children}
      {error && (
        <p style={{ color: 'var(--danger)', fontSize: '0.78rem', marginTop: 2 }}>{error}</p>
      )}
    </div>
  );
}
