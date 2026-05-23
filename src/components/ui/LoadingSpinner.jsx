export default function LoadingSpinner({ size = 40, fullscreen = false }) {
  const spinner = (
    <div style={{
      width: size, height: size,
      border: `3px solid var(--border)`,
      borderTopColor: 'var(--accent)',
      borderRadius: '50%',
      animation: 'spin 0.7s linear infinite',
    }} />
  );

  if (fullscreen) {
    return (
      <div style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        justifyContent: 'center', background: 'var(--bg)',
      }}>
        <div className="flex flex-col items-center gap-4">
          {spinner}
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Loading…</p>
        </div>
      </div>
    );
  }

  return <style>{`@keyframes spin{to{transform:rotate(360deg)}}`} && spinner</style>;
}
