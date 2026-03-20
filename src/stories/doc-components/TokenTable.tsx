import type { CSSProperties } from 'react';

export interface TokenTableItem {
  name: string;
  value: string;
  role: string;
  preview?: string;
}

export interface TokenTableProps {
  tokens: TokenTableItem[];
}

const tableStyle: CSSProperties = {
  width: '100%',
  borderCollapse: 'collapse',
  backgroundColor: '#FFFFFF',
};

const headerCellStyle: CSSProperties = {
  padding: '12px 0',
  borderBottom: '1px solid #E7E0EC',
  color: '#49454F',
  fontSize: '12px',
  fontWeight: 700,
  lineHeight: 1.4,
  textAlign: 'left',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
};

const dataCellStyle: CSSProperties = {
  padding: '14px 0',
  borderBottom: '1px solid #E7E0EC',
  color: '#1C1B1F',
  fontSize: '14px',
  lineHeight: 1.5,
  verticalAlign: 'middle',
};

const monoStyle: CSSProperties = {
  fontFamily: 'ui-monospace, SFMono-Regular, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
};

const previewStyle = (color?: string): CSSProperties => ({
  width: '24px',
  height: '24px',
  borderRadius: '999px',
  backgroundColor: color ?? 'transparent',
  border: color ? '1px solid #E7E0EC' : '1px solid transparent',
  boxSizing: 'border-box',
});

function TokenTable({ tokens }: TokenTableProps) {
  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={headerCellStyle}>Token</th>
          <th style={headerCellStyle}>Value</th>
          <th style={headerCellStyle}>Role</th>
          <th style={headerCellStyle}>Preview</th>
        </tr>
      </thead>
      <tbody>
        {tokens.map((token) => (
          <tr key={`${token.name}-${token.value}-${token.role}`}>
            <td style={{ ...dataCellStyle, ...monoStyle }}>{token.name}</td>
            <td style={{ ...dataCellStyle, ...monoStyle }}>{token.value}</td>
            <td style={dataCellStyle}>{token.role}</td>
            <td style={dataCellStyle}>
              {token.preview ? <div style={previewStyle(token.preview)} /> : null}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TokenTable;
