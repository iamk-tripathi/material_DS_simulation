import type { CSSProperties, ReactNode } from 'react';

export interface ComponentPreviewProps {
  children: ReactNode;
  caption?: string;
  note?: string;
}

const containerStyle: CSSProperties = {
  backgroundColor: '#FFFFFF',
  border: '1px solid #E7E0EC',
  borderRadius: '8px',
  padding: '24px',
  boxSizing: 'border-box',
};

const previewStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const captionStyle: CSSProperties = {
  margin: 0,
  marginTop: '12px',
  color: '#1C1B1F',
  fontSize: '13px',
  fontWeight: 700,
  lineHeight: 1.4,
};

const noteStyle: CSSProperties = {
  margin: 0,
  marginTop: '4px',
  color: '#49454F',
  fontSize: '13px',
  fontStyle: 'italic',
  lineHeight: 1.4,
};

function ComponentPreview({ children, caption, note }: ComponentPreviewProps) {
  return (
    <div>
      <div style={containerStyle}>
        <div style={previewStyle}>{children}</div>
      </div>
      {caption ? <p style={captionStyle}>{caption}</p> : null}
      {note ? <p style={noteStyle}>{note}</p> : null}
    </div>
  );
}

export default ComponentPreview;
