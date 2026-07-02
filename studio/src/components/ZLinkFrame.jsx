export default function ZLinkFrame({ accent, pipRect }) {
  return (
    <div className="cr-zlink">
      <header className="cr-zlink-head">
        <div className="cr-zlink-title">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19z" />
          </svg>
          <span>ZLink</span>
          <em>com.zjin.zlink</em>
        </div>
        <div className="cr-zlink-badge">
          <span className="cr-live" style={{ background: accent, boxShadow: `0 0 8px ${accent}` }} />
          CarPlay Active
        </div>
      </header>
      <div className="cr-zlink-viewport">
        <iframe
          title="ZLink CarPlay"
          src="/zlink-mock.html"
          className="cr-zlink-iframe"
          sandbox="allow-scripts allow-same-origin"
        />
        {pipRect && (
          <div className="cr-pip-hint" title="sys.lsec.pip_rect">
            PiP {pipRect.w}×{pipRect.h}
          </div>
        )}
      </div>
    </div>
  );
}
