import type { CSSProperties, ReactNode } from 'react';

export interface DosDontsProps {
  dos: string[];
  donts: string[];
}

const containerStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  gap: '16px',
  alignItems: 'stretch',
};

const columnBaseStyle: CSSProperties = {
  flex: 1,
  borderRadius: '8px',
  padding: '16px',
  boxSizing: 'border-box',
};

const headerStyle: CSSProperties = {
  margin: 0,
  fontSize: '14px',
  fontWeight: 700,
  lineHeight: 1.4,
};

const listStyle: CSSProperties = {
  margin: '8px 0 0 0',
  paddingLeft: '20px',
};

const itemStyle: CSSProperties = {
  marginTop: '8px',
  color: '#1C1B1F',
  fontSize: '14px',
  lineHeight: 1.5,
};

function renderItems(items: string[]): ReactNode {
  return (
    <ul style={listStyle}>
      {items.map((item) => (
        <li key={item} style={itemStyle}>
          {item}
        </li>
      ))}
    </ul>
  );
}

function DosDonts({ dos, donts }: DosDontsProps) {
  return (
    <div style={containerStyle}>
      <div
        style={{
          ...columnBaseStyle,
          backgroundColor: '#F0FFF4',
          border: '1px solid #C6F6D5',
        }}
      >
        <p style={{ ...headerStyle, color: '#276749' }}>✓ Do</p>
        {renderItems(dos)}
      </div>
      <div
        style={{
          ...columnBaseStyle,
          backgroundColor: '#FFF5F5',
          border: '1px solid #FED7D7',
        }}
      >
        <p style={{ ...headerStyle, color: '#9B2C2C' }}>✗ Don't</p>
        {renderItems(donts)}
      </div>
    </div>
  );
}

export default DosDonts;
