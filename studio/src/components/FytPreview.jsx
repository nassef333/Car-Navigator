import AuraLauncher from '../features/launcher/AuraLauncher.jsx';

export default function FytPreview({ theme, width, height, scale, onColorChange }) {
  const bezel = 28;
  const scaledW = width * scale + bezel;
  const scaledH = height * scale + bezel;

  return (
    <div className="device" style={{ width: scaledW, height: scaledH }}>
      <div className="device-bezel" style={{ width: scaledW, height: scaledH }}>
        <div
          style={{
            width,
            height,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
            borderRadius: theme.layout?.cornerRadius || 16,
            overflow: 'hidden',
          }}
        >
          <AuraLauncher
            theme={theme}
            width={width}
            height={height}
            onColorChange={onColorChange}
          />
        </div>
      </div>
    </div>
  );
}
